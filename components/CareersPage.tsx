'use client';

import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, ChevronDown, ChevronUp, Send, CheckCircle, Users, Heart, Zap } from 'lucide-react';
import { JOB_OPENINGS } from '../constants';
import { JobOpening } from '../types';
import CustomerForm, { FormField } from './CustomerForm';
import PageHero from './PageHero';

const CareersPage: React.FC = () => {
  const [openJobId, setOpenJobId] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0">

      {/* 1. Page header */}
      <PageHero
        eyebrow="Tuyển dụng"
        title={<>Gia nhập đội ngũ GCM{' '}<br/><span className="text-ink-mute">Làm việc với xe điện VinFast</span></>}
        summary="Xem các vị trí đang tuyển bên dưới và gửi hồ sơ thẳng cho bộ phận tuyển dụng của GCM."
        crumbs={[{ href: '/tuyen-dung', label: 'Tuyển dụng' }]}
      >
        <button
          onClick={() => document.getElementById('jobs-list')?.scrollIntoView({ behavior: 'smooth' })}
          className="gcm-btn"
        >
          Xem vị trí đang tuyển
        </button>
      </PageHero>

      {/* 2. Culture & Benefits */}
      <section className="gcm-section">
        <div className="gcm-container">
           <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-3">
                 <span className="gcm-label">Văn hoá</span>
                 <h2 className="gcm-h2">Làm việc ở GCM</h2>
              </div>
              <p className="gcm-lead md:max-w-md md:text-right">Mỗi người trong đội được ghi nhận đúng việc mình làm và có đường để đi lên cùng công ty.</p>
           </div>

           <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="gcm-card flex flex-col gap-3 p-6">
                 <div className="gcm-icon-box">
                    <Zap size={20} />
                 </div>
                 <h3 className="gcm-h3">Làm việc với xe điện</h3>
                 <p className="text-sm leading-relaxed text-ink-soft">Đồng nghiệp trẻ, làm việc hằng ngày với ô tô điện VinFast và trạm sạc.</p>
              </div>
              <div className="gcm-card flex flex-col gap-3 p-6">
                 <div className="gcm-icon-box">
                    <DollarSign size={20} />
                 </div>
                 <h3 className="gcm-h3">Thu nhập</h3>
                 <p className="text-sm leading-relaxed text-ink-soft">Lương thưởng cạnh tranh. Lộ trình thăng tiến được nói rõ ngay khi nhận việc.</p>
              </div>
              <div className="gcm-card flex flex-col gap-3 p-6">
                 <div className="gcm-icon-box">
                    <Heart size={20} />
                 </div>
                 <h3 className="gcm-h3">Phúc lợi</h3>
                 <p className="text-sm leading-relaxed text-ink-soft">Đóng BHXH, BHYT đầy đủ; du lịch hằng năm, đào tạo chuyên môn và các buổi team building.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Job Listings */}
      <section id="jobs-list" className="gcm-section scroll-mt-20 bg-tint">
         <div className="gcm-container max-w-4xl">
            <div className="mb-8 flex flex-col gap-3">
               <span className="gcm-label">Cơ hội nghề nghiệp</span>
               <h2 className="gcm-h2">Vị trí đang tuyển</h2>
            </div>

            <div className="space-y-3">
               {JOB_OPENINGS.map((job) => (
                  <div key={job.id} className="gcm-card gcm-card-hover overflow-hidden">
                     <button
                        onClick={() => toggleJob(job.id)}
                        className="w-full flex items-center justify-between p-6 text-left"
                     >
                        <div className="flex-1">
                           <h3 className="gcm-h3 mb-2 text-lg">{job.title}</h3>
                           <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-soft">
                              <span className="flex items-center gap-1"><Briefcase size={16} /> {job.department}</span>
                              <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                              <span className="flex items-center gap-1 text-ocean font-semibold"><DollarSign size={16} /> {job.salary}</span>
                              <span className="gcm-badge">{job.type}</span>
                           </div>
                        </div>
                        <div className={`ml-4 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-control bg-tint-strong text-ocean transition-transform duration-300 ${openJobId === job.id ? 'rotate-180' : ''}`}>
                           <ChevronDown size={18} />
                        </div>
                     </button>

                     <div
                        className={`overflow-hidden transition-all duration-300 bg-surface ${openJobId === job.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                     >
                        <div className="p-6">
                           <div className="mb-6">
                              <h4 className="gcm-h3 mb-2">Mô tả công việc:</h4>
                              <p className="leading-[1.7] text-ink-soft">{job.description}</p>
                           </div>
                           <div className="mb-8">
                              <h4 className="gcm-h3 mb-2">Yêu cầu:</h4>
                              <ul className="space-y-2">
                                 {job.requirements.map((req, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-ink-soft">
                                       <CheckCircle size={18} className="text-ocean flex-shrink-0 mt-0.5" />
                                       <span>{req}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           <button
                             onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                             className="gcm-btn"
                           >
                              Ứng tuyển ngay
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Application Form */}
      <section id="apply-form" className="gcm-section scroll-mt-20">
         <div className="gcm-container max-w-2xl">
            <div className="mb-8 flex flex-col gap-3">
               <span className="gcm-label">Ứng tuyển</span>
               <h2 className="gcm-h2">Gửi hồ sơ ứng tuyển</h2>
               <p className="text-ink-soft">Để lại thông tin, bộ phận tuyển dụng sẽ gọi lại cho bạn.</p>
            </div>

            <div className="gcm-card p-6 md:p-8">
               <CustomerForm
                  formType="job-application"
                  fields={[
                     {
                        name: 'email',
                        label: 'Email',
                        type: 'email',
                        placeholder: 'example@email.com',
                     },
                     {
                        name: 'position',
                        label: 'Vị trí ứng tuyển',
                        type: 'select',
                        options: [
                           { value: '', label: 'Chọn vị trí' },
                           ...JOB_OPENINGS.map(job => ({
                              value: job.id,
                              label: job.title,
                           })),
                           { value: 'other', label: 'Vị trí khác' },
                        ],
                     },
                     {
                        name: 'cvLink',
                        label: 'Link CV / Portfolio (nếu có)',
                        type: 'text',
                        placeholder: 'Google Drive, LinkedIn...',
                     },
                     {
                        name: 'introduction',
                        label: 'Giới thiệu bản thân',
                        type: 'textarea',
                        placeholder: 'Nói ngắn gọn về kinh nghiệm và mong muốn của bạn...',
                     },
                  ]}
                  submitButtonText="Gửi hồ sơ"
                  submitButtonClassName="gcm-btn w-full"
                  showSuccessMessage={true}
               />
            </div>
         </div>
      </section>

    </div>
  );
};

export default CareersPage;
