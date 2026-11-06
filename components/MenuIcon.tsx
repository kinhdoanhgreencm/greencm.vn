import React from 'react';

// Icon menu mobile: ba thanh xiên song song cạnh xiên của logo (skewX -31° ≈ dx/dy 0,6),
// ngắn dần như dải tốc độ, thanh cuối màu Sky. Khi mở, hai thanh trên và dưới xoay thành dấu X.
const MenuIcon: React.FC<{ open: boolean }> = ({ open }) => {
  const bar = 'origin-center [transform-box:fill-box] transition-[transform,opacity,fill] duration-300 ease-[cubic-bezier(.2,.8,.2,1)]';
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7 overflow-visible" aria-hidden="true">
      <rect
        x="3" y="6" width="22" height="3" rx="0.5"
        className={`${bar} fill-white`}
        style={{ transform: open ? 'translateY(5.5px) rotate(45deg)' : 'skewX(-31deg)' }}
      />
      <rect
        x="7" y="12.5" width="18" height="3" rx="0.5"
        className={`${bar} fill-white`}
        style={{ transform: open ? 'skewX(-31deg) scaleX(0)' : 'skewX(-31deg)', opacity: open ? 0 : 1 }}
      />
      <rect
        x={open ? 3 : 11} y="19" width={open ? 22 : 14} height="3" rx="0.5"
        className={`${bar} ${open ? 'fill-white' : 'fill-[#00D26A]'}`}
        style={{ transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'skewX(-31deg)' }}
      />
    </svg>
  );
};

export default MenuIcon;
