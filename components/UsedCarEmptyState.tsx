'use client';

import React from 'react';
import { Car } from 'lucide-react';
import CustomerForm from './CustomerForm';
import { NEW_CARS_FAMILY, NEW_CARS_SERVICE } from '../constants';

interface UsedCarEmptyStateProps {
  hasActiveFilters?: boolean;
}

const UsedCarEmptyState: React.FC<UsedCarEmptyStateProps> = ({ hasActiveFilters = false }) => {
  return (
    <div className="gcm-card mx-auto max-w-3xl p-6 text-center md:p-10">
      <div>
        <div className="gcm-icon-box mx-auto mb-5">
          <Car size={20} />
        </div>
        <h2 className="gcm-h2 mb-3">
          {hasActiveFilters ? 'Chưa có xe khớp với tìm kiếm của bạn' : 'Xe sắp về'}
        </h2>
        <p className="mx-auto mb-8 max-w-xl leading-relaxed text-ink-soft">
          {hasActiveFilters
            ? 'Hiện chưa có xe nào khớp với bộ lọc bạn chọn. Để lại yêu cầu, GCM sẽ liên hệ ngay khi có xe phù hợp về.'
            : 'GCM đang chuẩn bị đợt xe VinFast cũ đã kiểm định đầu tiên. Để lại yêu cầu bên dưới, chúng tôi sẽ liên hệ ngay khi có xe phù hợp với nhu cầu của bạn.'}
        </p>

        <div className="mx-auto max-w-xl text-left">
          <CustomerForm
            formType="find-car"
            fields={[
              {
                name: 'carInterest',
                label: 'Dòng xe quan tâm',
                type: 'select',
                gridCols: 2,
                options: [
                  { value: '', label: 'Chọn dòng xe' },
                  ...([...NEW_CARS_FAMILY, ...NEW_CARS_SERVICE].map((car) => ({ value: car.id, label: car.name }))),
                  { value: 'lux-a-2', label: 'VinFast Lux A 2.0' },
                  { value: 'lux-sa-2', label: 'VinFast Lux SA 2.0' },
                ],
              },
              {
                name: 'budget',
                label: 'Tài chính dự kiến',
                type: 'select',
                gridCols: 2,
                options: [
                  { value: '', label: 'Chọn mức giá' },
                  { value: 'under-300', label: 'Dưới 300 triệu' },
                  { value: '300-500', label: '300 - 500 triệu' },
                  { value: '500-800', label: '500 - 800 triệu' },
                  { value: '800-1200', label: '800 triệu - 1,2 tỷ' },
                  { value: 'over-1200', label: 'Trên 1,2 tỷ' },
                ],
              },
              {
                name: 'specialRequirements',
                label: 'Yêu cầu đặc biệt',
                type: 'textarea',
                placeholder: 'Ví dụ: VF5, màu trắng, ODO dưới 20.000km, mua đứt pin',
              },
            ]}
            submitButtonText="Đặt tìm xe"
            submitButtonClassName="gcm-btn w-full"
            showSuccessMessage={true}
          />
        </div>
      </div>
    </div>
  );
};

export default UsedCarEmptyState;
