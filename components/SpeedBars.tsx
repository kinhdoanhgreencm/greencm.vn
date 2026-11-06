import React from 'react';

// Ba dải xiên xanh GCM, dài 100% / 80% / 62%, đậm nhạt 100% / 45% / 20%,
// cạnh trái xiên dx/dy = 0,6 như nét logo. Yếu tố đồ hoạ duy nhất của hệ thống.
// Độ dày dải chỉnh bằng biến --t (mặc định 2.5rem).
const SpeedBars: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => {
  const bar = 'block h-[var(--t)] bg-sky [clip-path:polygon(calc(var(--t)*.6)_0,100%_0,100%_100%,0_100%)]';
  return (
    <div
      aria-hidden="true"
      className={`grid justify-items-end gap-[calc(var(--t)*.5)] [--t:2.5rem] ${className}`}
      style={style}
    >
      <span className={`${bar} w-full`}></span>
      <span className={`${bar} w-[80%] opacity-45`}></span>
      <span className={`${bar} w-[62%] opacity-20`}></span>
    </div>
  );
};

export default SpeedBars;
