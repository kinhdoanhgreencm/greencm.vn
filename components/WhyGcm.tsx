import React from 'react';

// Lý do chọn GCM — mỗi ý lấy từ dịch vụ thật đang có trên website.
// Trình bày dạng danh sách chữ lớn (không thẻ, không icon): tên ý đậm, giải thích ngay dưới.
const REASONS = [
  {
    title: 'Thẩm định 160 điểm',
    body: 'Mọi xe VinFast cũ qua kiểm tra 160 hạng mục, đo tình trạng pin (SOH) và minh bạch lịch sử sử dụng trước khi đăng bán.',
  },
  {
    title: 'Một đầu mối, đủ dịch vụ',
    body: 'Xe VinFast mới, xe VinFast cũ, phụ kiện và trạm sạc đều do Green CM phụ trách, không phải đi nhiều nơi.',
  },
  {
    title: 'Đầu tư trạm sạc',
    body: 'Tư vấn nhượng quyền trạm sạc xe điện, khảo sát mặt bằng, làm hồ sơ pháp lý và lắp đặt.',
  },
  {
    title: 'Phủ khắp miền Nam',
    body: 'Phục vụ TP Hồ Chí Minh, Đồng Nai, Tây Ninh, Cần Thơ, Vĩnh Long, Đồng Tháp, An Giang và Cà Mau từ văn phòng Cái Răng.',
  },
];

const WhyGcm: React.FC = () => {
  return (
    <section className="gcm-section">
      <div className="gcm-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
        <div>
          <h2 className="gcm-h2">Khác biệt của GCM</h2>
          <p className="mt-4 text-md leading-relaxed text-ink">
            Green CM xây dựng hệ sinh thái quanh chiếc xe VinFast: từ lúc bạn chọn xe, lắp phụ kiện đến sạc pin mỗi ngày.
          </p>
        </div>
        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {REASONS.map((r) => (
            <li key={r.title} className="flex flex-col gap-2">
              <h3 className="text-[1.375rem] font-semibold leading-tight tracking-[-0.01em] text-navy">{r.title}</h3>
              <p className="text-md leading-relaxed text-ink-soft">{r.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyGcm;
