import React from 'react';

// Cạnh sóng cho đáy (hoặc đỉnh khi flip) một khối, như mép ảnh hero của mẫu Tidepost.
// fill nhận màu của khối kế tiếp để hai khối nối liền nhau.
type Props = {
  fill?: string;
  flip?: boolean;
  className?: string;
  variant?: 'soft' | 'deep';
};

const PATHS = {
  soft: 'M0 46C180 18 340 8 520 22s330 46 520 40 300-36 400-42V80H0Z',
  deep: 'M0 30c140 34 300 52 480 40s320-58 520-56 320 40 440 30V80H0Z',
};

const Wave: React.FC<Props> = ({ fill = '#F6F9FD', flip = false, className = '', variant = 'soft' }) => (
  <svg
    viewBox="0 0 1440 80"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={`gcm-wave ${flip ? 'top-[-1px] bottom-auto rotate-180' : ''} ${className}`}
  >
    <path d={PATHS[variant]} fill={fill} />
  </svg>
);

export default Wave;
