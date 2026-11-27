'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Loader2, LogOut, RefreshCw, ImagePlus, X, ExternalLink } from 'lucide-react';
import { supabase } from '../../../lib/supabase';
import { VINFAST_MODELS, PROVINCES_MIEN_NAM, MAX_IMAGES, STATUS_LABEL, uploadToSlots } from '../../../lib/xeCuOptions';

type Row = Record<string, any>;
type Tab = 'cho-duyet' | 'xe' | 'dang-moi';

const money = (n?: number | null) => (n ? `${Number(n).toLocaleString('vi-VN')}đ` : '');
const dt = (s?: string) => (s ? new Date(s).toLocaleString('vi-VN') : '');

async function api(token: string, method: 'GET' | 'POST', body?: unknown) {
  const res = await fetch('/api/quan-tri/xe-cu', {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(j.error || `Lỗi ${res.status}`);
  return j;
}

/* ---------- Đăng nhập ---------- */
function Login({ onDone }: { onDone: () => void }) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState('');
  return (
    <form
      className="gcm-card mx-auto mt-16 max-w-sm space-y-4 p-6"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setErr('');
        const { error } = await supabase.auth.signInWithPassword({ email, password: pw });
        setBusy(false);
        if (error) setErr('Sai email hoặc mật khẩu.');
        else onDone();
      }}
    >
      <h1 className="gcm-h3">Quản trị xe cũ GCM</h1>
      <input className="gcm-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
      <input className="gcm-input" type="password" placeholder="Mật khẩu" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="current-password" />
      {err && <p className="text-sm text-red-700">{err}</p>}
      {sent && <p className="text-sm text-green-700">{sent}</p>}
      <button className="gcm-btn w-full" disabled={busy}>{busy ? <Loader2 className="animate-spin" size={16} /> : 'Đăng nhập'}</button>
      <button
        type="button"
        className="w-full text-sm text-ink-soft underline"
        onClick={async () => {
          if (!email) { setErr('Nhập email trước.'); return; }
          setErr('');
          const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/quan-tri/xe-cu` });
          if (error) setErr('Chưa gửi được email, thử lại sau.');
          else setSent('Đã gửi email. Mở link trong email để đặt mật khẩu.');
        }}
      >
        Đặt mật khẩu lần đầu / quên mật khẩu
      </button>
    </form>
  );
}

/* ---------- Đặt mật khẩu (mở từ link mời hoặc link quên mật khẩu) ---------- */
function SetPassword({ onDone }: { onDone: () => void }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="gcm-card mx-auto mt-16 max-w-sm space-y-4 p-6"
      onSubmit={async (e) => {
        e.preventDefault();
        if (pw.length < 8) { setErr('Mật khẩu ít nhất 8 ký tự.'); return; }
        setBusy(true);
        setErr('');
        const { error } = await supabase.auth.updateUser({ password: pw });
        setBusy(false);
        if (error) setErr('Chưa đặt được mật khẩu: ' + error.message);
        else onDone();
      }}
    >
      <h1 className="gcm-h3">Đặt mật khẩu quản trị</h1>
      <input className="gcm-input" type="password" placeholder="Mật khẩu mới" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="new-password" />
      {err && <p className="text-sm text-red-700">{err}</p>}
      <button className="gcm-btn w-full" disabled={busy}>{busy ? <Loader2 className="animate-spin" size={16} /> : 'Lưu mật khẩu'}</button>
    </form>
  );
}

/* ---------- Form xe: dùng cho đăng mới, duyệt tin khách và sửa ---------- */
const emptyCar: Row = { model: '', trim: '', modelYear: '', odoKm: '', price: '', oldPrice: '', region: 'Cần Thơ', ward: '', color: '', batteryOwnership: '', batterySohPercent: '', plateColor: 'white', plateArea: '', freeChargingUntil: '', equipment: '', warrantyRemaining: '', description: '', usageHistoryNote: '', status: 'available', images: [] };

function carFromDb(c: Row): Row {
  return {
    model: c.model, trim: c.trim ?? '', modelYear: c.model_year ?? '', odoKm: c.odo_km ?? '', price: c.price ?? c.asking_price ?? '',
    oldPrice: c.old_price ?? '', region: c.region ?? c.province ?? 'Cần Thơ', ward: c.ward ?? '', color: c.color ?? '',
    batteryOwnership: c.battery_ownership ?? '', batterySohPercent: c.battery_soh_percent ?? '', plateColor: c.plate_color ?? 'white', plateArea: c.plate_area ?? '', freeChargingUntil: c.free_charging_until ?? '',
    equipment: Array.isArray(c.equipment) ? c.equipment.join('\n') : '',
    warrantyRemaining: c.warranty_remaining ?? '', description: c.description ?? c.note ?? '', usageHistoryNote: c.usage_history_note ?? '',
    status: c.status && STATUS_LABEL[c.status] ? c.status : 'available', images: c.images ?? [],
  };
}

function CarEditor({ token, initial, submitLabel, onSubmit, onCancel }: {
  token: string; initial: Row; submitLabel: string; onSubmit: (car: Row) => Promise<void>; onCancel?: () => void;
}) {
  const [c, setC] = useState<Row>(initial);
  const [busy, setBusy] = useState('');
  const [err, setErr] = useState('');
  const set = (k: string) => (e: React.ChangeEvent<any>) => setC((p) => ({ ...p, [k]: e.target.value }));
  const inp = (k: string, label: string, extra: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-ink">{label}</span>
      <input className="gcm-input" value={c[k] ?? ''} onChange={set(k)} {...extra} />
    </label>
  );

  async function addImages(list: FileList | null) {
    if (!list?.length) return;
    const files = Array.from(list).slice(0, MAX_IMAGES - c.images.length);
    if (!files.length) return;
    try {
      setBusy('Đang tải ảnh...');
      const { slots } = await api(token, 'POST', { action: 'slots', count: files.length });
      const up = await uploadToSlots(files, slots, (n) => setBusy(`Đã tải ${n}/${files.length} ảnh`));
      setC((p) => ({ ...p, images: [...p.images, ...up.map((u) => ({ url: u.url }))] }));
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Lỗi tải ảnh');
    } finally {
      setBusy('');
    }
  }

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setErr('');
        setBusy('Đang lưu...');
        try { await onSubmit(c); } catch (e2) { setErr(e2 instanceof Error ? e2.message : 'Lỗi lưu'); } finally { setBusy(''); }
      }}
    >
      <div className="grid gap-3 md:grid-cols-4">
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-ink">Dòng xe *</span>
          <select className="gcm-input" value={c.model} onChange={set('model')}>
            <option value="">Chọn</option>
            {VINFAST_MODELS.map((m) => <option key={m}>{m}</option>)}
          </select>
        </label>
        {inp('trim', 'Phiên bản')}
        {inp('modelYear', 'Năm SX *', { inputMode: 'numeric' })}
        {inp('odoKm', 'Số km *', { inputMode: 'numeric' })}
        {inp('price', `Giá chào * ${money(Number(c.price))}`, { inputMode: 'numeric' })}
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-ink">Tỉnh/thành</span>
          <select className="gcm-input" value={c.region} onChange={set('region')}>
            {PROVINCES_MIEN_NAM.map((p) => <option key={p}>{p}</option>)}
          </select>
        </label>
        {inp('ward', 'Phường/xã')}
        {inp('color', 'Màu')}
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-ink">Pin</span>
          <select className="gcm-input" value={c.batteryOwnership} onChange={set('batteryOwnership')}>
            <option value="">Chưa rõ</option><option value="purchased">Mua pin</option><option value="leased">Thuê pin</option>
          </select>
        </label>
        {inp('freeChargingUntil', 'Free sạc (vd: KGH)')}
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-ink">Biển số</span>
          <select className="gcm-input" value={c.plateArea} onChange={set('plateArea')}>
            <option value="">Chưa rõ</option><option value="tinh">Tỉnh</option><option value="thanh-pho">Thành phố</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-ink">Màu biển</span>
          <select className="gcm-input" value={c.plateColor} onChange={set('plateColor')}>
            <option value="white">Trắng</option><option value="yellow">Vàng (kinh doanh)</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-ink">Trạng thái</span>
          <select className="gcm-input" value={c.status} onChange={set('status')}>
            {Object.entries(STATUS_LABEL).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1 block font-medium text-ink">Xe được trang bị (mỗi dòng một món)</span>
        <textarea className="gcm-input h-24" placeholder={'Phim cách nhiệt\nLót sàn\nCam hành trình'} value={c.equipment} onChange={set('equipment')} />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium text-ink">Mô tả công khai</span>
        <textarea className="gcm-input h-24" value={c.description} onChange={set('description')} />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium text-ink">Lịch sử sử dụng</span>
        <textarea className="gcm-input h-16" value={c.usageHistoryNote} onChange={set('usageHistoryNote')} />
      </label>

      <div>
        <p className="mb-2 text-sm font-medium text-ink">Ảnh ({c.images.length}/{MAX_IMAGES}); ảnh đầu là ảnh bìa</p>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
          {c.images.map((img: Row, i: number) => (
            <div key={img.url} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt="" className="h-full w-full object-cover" />
              <button type="button" className="absolute right-1 top-1 rounded-full bg-white/90 p-0.5" aria-label="Bỏ ảnh"
                onClick={() => setC((p) => ({ ...p, images: p.images.filter((_: Row, j: number) => j !== i) }))}>
                <X size={12} />
              </button>
              {i > 0 && (
                <button type="button" className="absolute bottom-1 left-1 rounded bg-white/90 px-1 text-[10px]"
                  onClick={() => setC((p) => { const a = [...p.images]; const [x] = a.splice(i, 1); a.unshift(x); return { ...p, images: a }; })}>
                  Làm bìa
                </button>
              )}
            </div>
          ))}
          {c.images.length < MAX_IMAGES && (
            <label className="flex aspect-[4/3] cursor-pointer items-center justify-center rounded-lg border border-dashed border-line-strong text-ink-soft">
              <ImagePlus size={18} />
              <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => { addImages(e.target.files); e.target.value = ''; }} />
            </label>
          )}
        </div>
      </div>

      {err && <p className="text-sm text-red-700">{err}</p>}
      <div className="flex gap-3">
        <button className="gcm-btn" disabled={Boolean(busy)}>{busy ? <><Loader2 className="animate-spin" size={16} /> {busy}</> : submitLabel}</button>
        {onCancel && <button type="button" className="gcm-btn-ghost" onClick={onCancel}>Đóng</button>}
      </div>
    </form>
  );
}

/* ---------- Trang chính ---------- */
export default function QuanTriXeCu() {
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [data, setData] = useState<{ email: string; submissions: Row[]; cars: Row[] } | null>(null);
  const [err, setErr] = useState('');
  const [tab, setTab] = useState<Tab>('cho-duyet');
  const [open, setOpen] = useState<string | null>(null);
  const [notice, setNotice] = useState('');

  const [needPw, setNeedPw] = useState(false);

  useEffect(() => {
    // Link mời / quên mật khẩu trả về #...type=invite hoặc type=recovery: bắt đặt mật khẩu.
    if (/type=(invite|recovery)/.test(window.location.hash)) setNeedPw(true);
    supabase.auth.getSession().then(({ data: s }) => { setToken(s.session?.access_token ?? null); setReady(true); });
    const { data: sub } = supabase.auth.onAuthStateChange((e, s) => {
      if (e === 'PASSWORD_RECOVERY') setNeedPw(true);
      setToken(s?.access_token ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const load = useCallback(async () => {
    if (!token) return;
    setErr('');
    try { setData(await api(token, 'GET')); } catch (e) { setErr(e instanceof Error ? e.message : 'Lỗi'); setData(null); }
  }, [token]);
  useEffect(() => { load(); }, [load]);

  if (!ready) return null;
  if (!token) return <Login onDone={() => undefined} />;
  if (needPw) return <SetPassword onDone={() => { setNeedPw(false); history.replaceState(null, '', window.location.pathname); }} />;

  const pending = data?.submissions.filter((s) => s.status === 'pending') ?? [];
  const done = (msg: string) => { setNotice(msg); setOpen(null); load(); };

  return (
    <div className="min-h-screen bg-page">
      <div className="gcm-container py-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="gcm-h2">Quản trị xe VinFast cũ</h1>
          <div className="flex items-center gap-3 text-sm text-ink-soft">
            {data?.email}
            <button className="gcm-btn-ghost" onClick={load}><RefreshCw size={14} /> Tải lại</button>
            <button className="gcm-btn-ghost" onClick={() => supabase.auth.signOut()}><LogOut size={14} /> Thoát</button>
          </div>
        </div>

        {err && (
          <p className="mb-4 rounded-panel border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            {err === 'Không có quyền' ? 'Tài khoản này chưa có trong danh sách quản trị (biến XE_CU_ADMIN_EMAILS).' : err}
          </p>
        )}
        {notice && <p className="mb-4 rounded-panel border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">{notice}</p>}

        <div className="mb-5 flex gap-2">
          {([['cho-duyet', `Tin khách chờ duyệt (${pending.length})`], ['xe', `Xe trên web (${data?.cars.length ?? 0})`], ['dang-moi', 'GCM đăng xe mới']] as [Tab, string][]).map(([k, l]) => (
            <button key={k} className={`gcm-chip ${tab === k ? 'is-active' : ''}`} onClick={() => { setTab(k); setOpen(null); setNotice(''); }}>{l}</button>
          ))}
        </div>

        {tab === 'cho-duyet' && data && (
          <div className="space-y-4">
            {data.submissions.length === 0 && <p className="text-ink-soft">Chưa có tin khách gửi.</p>}
            {data.submissions.map((s) => (
              <div key={s.id} className="gcm-card p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-ink">VinFast {s.model} {s.trim} {s.model_year} · {money(s.asking_price)}</p>
                    <p className="text-sm text-ink-soft">
                      {Number(s.odo_km).toLocaleString('vi-VN')} km · {s.battery_ownership === 'leased' ? 'Thuê pin' : s.battery_ownership === 'purchased' ? 'Mua pin' : 'Pin chưa rõ'} · {s.province}{s.ward ? `, ${s.ward}` : ''}
                    </p>
                    <p className="text-sm">
                      {s.seller_name} · <a className="font-semibold text-navy" href={`tel:${s.seller_phone}`}>{s.seller_phone}</a> · gửi {dt(s.created_at)}
                    </p>
                    {s.note && <p className="mt-1 whitespace-pre-line text-sm text-ink-soft">{s.note}</p>}
                    {s.admin_note && <p className="mt-1 text-sm text-amber-800">Ghi chú: {s.admin_note}</p>}
                  </div>
                  <span className="gcm-badge">{s.status === 'pending' ? 'Chờ duyệt' : s.status === 'approved' ? 'Đã đăng' : 'Từ chối'}</span>
                </div>
                <div className="mt-3 flex gap-2 overflow-x-auto">
                  {(s.images ?? []).map((im: Row) => (
                    <a key={im.url} href={im.url} target="_blank" rel="noreferrer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={im.url} alt="" className="h-20 w-28 flex-none rounded-lg object-cover" />
                    </a>
                  ))}
                </div>
                {s.status === 'pending' && open !== s.id && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className="gcm-btn" onClick={() => setOpen(s.id)}>Xem lại và đăng</button>
                    <button className="gcm-btn-ghost" onClick={async () => {
                      const note = window.prompt('Ghi chú nội bộ (phí môi giới đã thỏa thuận, hẹn xem xe...)', s.admin_note ?? '');
                      if (note !== null) { await api(token, 'POST', { action: 'note', submissionId: s.id, adminNote: note }); load(); }
                    }}>Ghi chú</button>
                    <button className="gcm-btn-ghost" onClick={async () => {
                      const note = window.prompt('Lý do từ chối (chỉ nội bộ thấy)');
                      if (note !== null) { await api(token, 'POST', { action: 'reject', submissionId: s.id, adminNote: note }); done('Đã từ chối tin.'); }
                    }}>Từ chối</button>
                  </div>
                )}
                {open === s.id && (
                  <div className="mt-4 border-t border-line pt-4">
                    <CarEditor token={token} initial={carFromDb(s)} submitLabel="Duyệt và đăng lên web" onCancel={() => setOpen(null)}
                      onSubmit={async (car) => { const r = await api(token, 'POST', { action: 'approve', submissionId: s.id, car }); done(`Đã đăng: /xe-vinfast-cu/xe/${r.car.slug}`); }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === 'xe' && data && (
          <div className="space-y-3">
            {data.cars.length === 0 && <p className="text-ink-soft">Chưa có xe nào.</p>}
            {data.cars.map((c) => (
              <div key={c.id} className="gcm-card p-4">
                <div className="flex flex-wrap items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {c.images?.[0]?.url && <img src={c.images[0].url} alt="" className="h-16 w-24 rounded-lg object-cover" />}
                  <div className="min-w-[200px] flex-1">
                    <p className="font-semibold text-ink">VinFast {c.model} {c.trim} {c.model_year} · {money(c.price)}</p>
                    <p className="text-sm text-ink-soft">{STATUS_LABEL[c.status]} · {c.source === 'khach' ? 'Tin khách' : 'GCM đăng'} · {c.view_count ?? 0} lượt xem · {dt(c.created_at)}</p>
                  </div>
                  <select className="gcm-input w-auto" value={c.status}
                    onChange={async (e) => { await api(token, 'POST', { action: 'update-car', id: c.id, car: { status: e.target.value } }); done('Đã đổi trạng thái.'); }}>
                    {Object.entries(STATUS_LABEL).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                  <button className="gcm-btn-ghost" onClick={() => setOpen(open === c.id ? null : c.id)}>Sửa</button>
                  {c.status !== 'hidden' && (
                    <a className="gcm-link text-sm" href={`/xe-vinfast-cu/xe/${c.slug}`} target="_blank" rel="noreferrer">Xem <ExternalLink size={12} /></a>
                  )}
                </div>
                {open === c.id && (
                  <div className="mt-4 border-t border-line pt-4">
                    <CarEditor token={token} initial={carFromDb(c)} submitLabel="Lưu thay đổi" onCancel={() => setOpen(null)}
                      onSubmit={async (car) => { await api(token, 'POST', { action: 'update-car', id: c.id, car }); done('Đã lưu.'); }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === 'dang-moi' && (
          <div className="gcm-card p-5">
            <CarEditor token={token} initial={emptyCar} submitLabel="Đăng xe lên web"
              onSubmit={async (car) => { const r = await api(token, 'POST', { action: 'create-car', car }); setTab('xe'); done(`Đã đăng: /xe-vinfast-cu/xe/${r.car.slug}`); }} />
          </div>
        )}
      </div>
    </div>
  );
}
