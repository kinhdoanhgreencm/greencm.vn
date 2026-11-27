'use client';

import React, { useMemo, useState } from 'react';
import { Loader2, CheckCircle, ImagePlus, X } from 'lucide-react';
import { VINFAST_MODELS, PROVINCES_MIEN_NAM, MAX_IMAGES, MIN_IMAGES_KHACH, PHONE_RE, uploadToSlots } from '../../../lib/xeCuOptions';

const thisYear = new Date().getFullYear();
const YEARS = Array.from({ length: thisYear - 2018 + 2 }, (_, i) => thisYear + 1 - i);

type Form = Record<string, string>;

const Field: React.FC<{ label: string; required?: boolean; hint?: string; children: React.ReactNode; wide?: boolean }> = ({
  label, required, hint, children, wide,
}) => (
  <div className={wide ? 'md:col-span-2' : ''}>
    <label className="mb-1.5 block text-sm font-medium text-ink">
      {label} {required && <span className="text-red-700">*</span>}
    </label>
    {children}
    {hint && <p className="mt-1 text-xs text-ink-mute">{hint}</p>}
  </div>
);

export default function DangBanForm() {
  const [f, setF] = useState<Form>({ province: 'Cần Thơ', batteryOwnership: '', plateColor: 'white' });
  const [files, setFiles] = useState<File[]>([]);
  const [agree, setAgree] = useState(false);
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [progress, setProgress] = useState('');
  const [error, setError] = useState('');

  const previews = useMemo(() => files.map((file) => URL.createObjectURL(file)), [files]);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const pricePreview = (() => {
    const n = parseInt((f.askingPrice || '').replace(/[^\d]/g, ''), 10);
    return Number.isFinite(n) && n > 0 ? `${n.toLocaleString('vi-VN')} đồng` : '';
  })();

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const imgs = Array.from(list).filter((x) => x.type.startsWith('image/'));
    setFiles((p) => [...p, ...imgs].slice(0, MAX_IMAGES));
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!f.sellerName?.trim()) return setError('Anh/chị cho GCM xin họ tên.');
    if (!PHONE_RE.test((f.sellerPhone || '').replace(/\s+/g, ''))) return setError('Số điện thoại chưa đúng.');
    if (!f.model) return setError('Chọn dòng xe.');
    if (!f.modelYear) return setError('Chọn năm sản xuất.');
    if (!f.odoKm) return setError('Ghi số km đã đi.');
    if (!f.askingPrice) return setError('Ghi giá mong muốn.');
    if (files.length < MIN_IMAGES_KHACH) return setError(`Cần ít nhất ${MIN_IMAGES_KHACH} ảnh xe.`);
    if (!agree) return setError('Anh/chị cần đồng ý điều kiện đăng tin.');

    setState('sending');
    try {
      setProgress('Đang chuẩn bị tải ảnh...');
      const r1 = await fetch('/api/xe-cu/dang-ban', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step: 'slots', count: files.length, website: f.website }),
      });
      const j1 = await r1.json();
      if (!r1.ok) throw new Error(j1.error);

      const images = await uploadToSlots(files, j1.slots, (n) => setProgress(`Đã tải ${n}/${files.length} ảnh...`));

      setProgress('Đang gửi tin...');
      const r2 = await fetch('/api/xe-cu/dang-ban', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step: 'submit', ...f, images, agree }),
      });
      const j2 = await r2.json();
      if (!r2.ok) throw new Error(j2.error);
      setState('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gửi chưa được, anh/chị thử lại.');
      setState('idle');
    }
  }

  if (state === 'done') {
    return (
      <div className="rounded-panel border border-emerald-200 bg-emerald-50 p-6 text-center">
        <CheckCircle className="mx-auto mb-3 text-emerald-700" size={36} />
        <p className="text-lg font-semibold text-emerald-900">GCM đã nhận tin bán xe của anh/chị</p>
        <p className="mt-2 text-emerald-800">Nhân viên sẽ gọi lại số {f.sellerPhone} trong giờ làm việc để xác minh trước khi đăng.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5 md:grid-cols-2" noValidate>
      {/* Ô ẩn chống tin rác */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" value={f.website || ''} onChange={set('website')} aria-hidden="true" />

      <Field label="Dòng xe" required>
        <select className="gcm-input" value={f.model || ''} onChange={set('model')}>
          <option value="">Chọn dòng xe VinFast</option>
          {VINFAST_MODELS.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </Field>
      <Field label="Phiên bản" hint="Ví dụ: Eco, Plus, S, Base">
        <input className="gcm-input" value={f.trim || ''} onChange={set('trim')} maxLength={40} />
      </Field>
      <Field label="Năm sản xuất" required>
        <select className="gcm-input" value={f.modelYear || ''} onChange={set('modelYear')}>
          <option value="">Chọn năm</option>
          {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
      </Field>
      <Field label="Số km đã đi" required>
        <input className="gcm-input" inputMode="numeric" value={f.odoKm || ''} onChange={set('odoKm')} placeholder="Ví dụ 25000" />
      </Field>
      <Field label="Pin" hint="Xem trong hợp đồng mua xe hoặc ứng dụng VinFast">
        <select className="gcm-input" value={f.batteryOwnership} onChange={set('batteryOwnership')}>
          <option value="">Chưa rõ</option>
          <option value="purchased">Mua pin (pin theo xe)</option>
          <option value="leased">Thuê pin</option>
        </select>
      </Field>
      <Field label="Biển số">
        <select className="gcm-input" value={f.plateColor} onChange={set('plateColor')}>
          <option value="white">Biển trắng (cá nhân)</option>
          <option value="yellow">Biển vàng (kinh doanh)</option>
        </select>
      </Field>
      <Field label="Màu xe">
        <input className="gcm-input" value={f.color || ''} onChange={set('color')} maxLength={40} />
      </Field>
      <Field label="Giá mong muốn" required hint={pricePreview || 'Ghi đủ số, ví dụ 450000000'}>
        <input className="gcm-input" inputMode="numeric" value={f.askingPrice || ''} onChange={set('askingPrice')} placeholder="450000000" />
      </Field>
      <Field label="Tỉnh/thành xe đang ở" required>
        <select className="gcm-input" value={f.province} onChange={set('province')}>
          {PROVINCES_MIEN_NAM.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </Field>
      <Field label="Phường/xã" hint="Không cần ghi quận">
        <input className="gcm-input" value={f.ward || ''} onChange={set('ward')} maxLength={80} />
      </Field>
      <Field label="Tình trạng xe" wide hint="Đâm đụng, ngập nước, đã thay gì, còn bảo hành bao lâu, sạc miễn phí đến khi nào...">
        <textarea className="gcm-input h-28 resize-y" value={f.note || ''} onChange={set('note')} maxLength={2000} />
      </Field>

      <Field label={`Ảnh xe (${files.length}/${MAX_IMAGES})`} required wide hint={`Ít nhất ${MIN_IMAGES_KHACH} ảnh. Che biển số nếu muốn, GCM sẽ chụp lại khi cần.`}>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {previews.map((src, i) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Ảnh xe ${i + 1}`} className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={() => setFiles((p) => p.filter((_, j) => j !== i))}
                className="absolute right-1 top-1 rounded-full bg-white/90 p-1 text-ink"
                aria-label={`Bỏ ảnh ${i + 1}`}
              >
                <X size={14} />
              </button>
            </div>
          ))}
          {files.length < MAX_IMAGES && (
            <label className="flex aspect-[4/3] cursor-pointer flex-col items-center justify-center gap-1 rounded-[14px] border border-dashed border-line-strong text-sm text-ink-soft hover:border-ocean">
              <ImagePlus size={22} />
              Thêm ảnh
              <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => { addFiles(e.target.files); e.target.value = ''; }} />
            </label>
          )}
        </div>
      </Field>

      <Field label="Họ tên" required>
        <input className="gcm-input" value={f.sellerName || ''} onChange={set('sellerName')} autoComplete="name" maxLength={80} />
      </Field>
      <Field label="Số điện thoại" required hint="Chỉ GCM thấy, không hiện trên tin">
        <input className="gcm-input" type="tel" value={f.sellerPhone || ''} onChange={set('sellerPhone')} autoComplete="tel" />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-soft md:col-span-2">
        <input type="checkbox" className="mt-1 h-4 w-4" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
        <span>
          Tôi là chủ xe hoặc được chủ xe ủy quyền. Tôi đồng ý để GCM gọi xác minh, đăng tin kèm ảnh trên greencm.vn và
          nhận phí môi giới theo mức hai bên thỏa thuận khi GCM bán được xe.
        </span>
      </label>

      {error && <p className="rounded-panel border border-red-200 bg-red-50 p-3 text-sm text-red-800 md:col-span-2">{error}</p>}

      <div className="md:col-span-2">
        <button type="submit" className="gcm-btn gcm-btn-lg w-full md:w-auto" disabled={state === 'sending'}>
          {state === 'sending' ? <><Loader2 className="animate-spin" size={18} /> {progress}</> : 'Gửi tin bán xe'}
        </button>
      </div>
    </form>
  );
}
