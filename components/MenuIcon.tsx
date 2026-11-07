import React from 'react';

// Icon menu mobile theo nét chữ của logo GCM: ba thanh dày đầu bo như nét chữ, thanh giữa ngắn và lệch phải
// giống gạch ngang của chữ G. Khi mở, thanh trên và dưới xoay thành dấu X, thanh giữa thu lại.
const MenuIcon: React.FC<{ open: boolean }> = ({ open }) => {
  const bar = 'fill-navy origin-center [transform-box:fill-box] transition-[transform,opacity] duration-300 ease-[cubic-bezier(.2,.8,.2,1)]';
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 overflow-visible" aria-hidden="true">
      <rect x="2" y="4" width="20" height="3.2" rx="1.6" className={bar}
        style={{ transform: open ? 'translateY(6.4px) rotate(45deg)' : 'none' }} />
      <rect x="11" y="10.4" width="11" height="3.2" rx="1.6" className={bar}
        style={{ transform: open ? 'scaleX(0)' : 'none', opacity: open ? 0 : 1 }} />
      <rect x="2" y="16.8" width="20" height="3.2" rx="1.6" className={bar}
        style={{ transform: open ? 'translateY(-6.4px) rotate(-45deg)' : 'none' }} />
    </svg>
  );
};

export default MenuIcon;
