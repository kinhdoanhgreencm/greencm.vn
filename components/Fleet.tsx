'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { NEW_CARS_FAMILY, NEW_CARS_SERVICE } from '../constants';

type Tab = 'family' | 'service';

const TABS: { id: Tab; label: string }[] = [
  { id: 'family', label: 'Xe gia đình' },
  { id: 'service', label: 'Xe dịch vụ' },
];

const Fleet: React.FC = () => {
  const [tab, setTab] = useState<Tab>('family');
  const cars = tab === 'family' ? NEW_CARS_FAMILY : NEW_CARS_SERVICE;

  return (
    <section className="gcm-section">
      <div className="gcm-container">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="gcm-label mb-3.5">Ô tô VinFast</p>
            <h2 className="gcm-h2">Các dòng xe VinFast</h2>
          </div>
          <div className="flex gap-1 self-start rounded-panel border border-line bg-surface p-1" role="tablist" aria-label="Nhóm xe">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`whitespace-nowrap rounded-control px-4 py-2 text-sm font-semibold transition-colors ${
                  tab === t.id ? 'bg-tint-strong text-ocean-deep' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <Link
              key={car.id}
              href="/oto-vinfast"
              className="group gcm-card gcm-card-hover flex flex-col overflow-hidden"
            >
              <div className="gcm-photo aspect-[16/9] rounded-none">
                <Image
                  src={car.image}
                  alt={`${car.name} - Xe điện VinFast tại GCM`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="gcm-h3">{car.name}</h3>
                    <span className="gcm-badge self-start">{car.seats} chỗ</span>
                  </div>
                  <span className="gcm-arrow-box"><ArrowUpRight size={16} /></span>
                </div>
                <dl className="mt-auto grid grid-cols-2 gap-3 pt-4">
                  <div>
                    <dt className="text-xs text-ink-mute">Giá từ</dt>
                    <dd className="text-md font-semibold tabular text-ocean">{car.displayPrice}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-mute">Quãng đường</dt>
                    <dd className="text-md font-semibold tabular text-ink">{car.range}</dd>
                  </div>
                </dl>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
