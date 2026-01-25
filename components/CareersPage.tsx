'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, MapPin, DollarSign, ChevronDown, ChevronUp, Send, CheckCircle, Users, Heart, Zap } from 'lucide-react';
import { JOB_OPENINGS } from '../constants';
import { JobOpening } from '../types';
import CustomerForm, { FormField } from './CustomerForm';

const CareersPage: React.FC = () => {
  const [openJobId, setOpenJobId] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  return (
    <div className="pt-20 bg-white min-h-screen pb-24 md:pb-0">
      
      {/* 1. Hero Section */}
      <section className="relative h-[500px] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image - Optimized with Next.js Image and priority */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80"
            alt="Tuyển dụng GCM - Gia nhập đội ngũ kiến tạo tương lai di chuyển xanh, cơ hội phát triển không giới hạn - Môi trường làm việc chuyên nghiệp, năng động"
            fill
            priority={true}
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <span className="text-gcm-green font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in">Tuyển Dụng</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Gia Nhập Đội Ngũ GCM<br/>
            <span className="text-gray-300">Kiến Tạo Tương Lai Di Chuyển Xanh</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Môi trường làm việc chuyên nghiệp, năng động và cơ hội phát triển không giới hạn.
          </p>
          <button 
            onClick={() => document.getElementById('jobs-list')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gcm-green text-black font-bold py-4 px-10 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,210,106,0.4)]"
          >
            Xem Vị Trí Đang Tuyển
          </button>
        </div>
      </section>

      {/* 2. Culture & Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gcm-dark mb-4">Tại Sao Chọn GCM?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Chúng tôi không chỉ xây dựng một công ty, chúng tôi xây dựng một gia đình nơi mỗi thành viên đều được trân trọng và phát triển.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-3xl text-center hover:shadow-xl transition-all group">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-gcm-green shadow-sm group-hover:scale-110 transition-transform">
                    <Zap size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Môi Trường Năng Động</h3>
                 <p className="text-gray-500 text-sm">Làm việc với những người trẻ, đam mê và tiên phong trong lĩnh vực ô tô điện công nghệ cao.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl text-center hover:shadow-xl transition-all group">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                    <DollarSign size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Thu Nhập Hấp Dẫn</h3>
                 <p className="text-gray-500 text-sm">Lương thưởng cạnh tranh, chế độ đãi ngộ tốt và lộ trình thăng tiến rõ ràng.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl text-center hover:shadow-xl transition-all group">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 shadow-sm group-hover:scale-110 transition-transform">
                    <Heart size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Phúc Lợi Toàn Diện</h3>
                 <p className="text-gray-500 text-sm">BHXH, BHYT đầy đủ, du lịch hàng năm, đào tạo chuyên sâu và nhiều hoạt động team building.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Job Listings */}
      <section id="jobs-list" className="py-20 bg-gray-50">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gcm-dark mb-10 text-center">Vị Trí Đang Tuyển Dụng</h2>
            
            <div className="space-y-4">
               {JOB_OPENINGS.map((job) => (
                  <div key={job.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:border-gcm-green transition-colors">
                     <button 
                        onClick={() => toggleJob(job.id)}
                        className="w-full flex items-center justify-between p-6 text-left"
                     >
                        <div className="flex-1">
                           <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                           <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1"><Briefcase size={16} /> {job.department}</span>
                              <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                              <span className="flex items-center gap-1 text-gcm-green font-bold"><DollarSign size={16} /> {job.salary}</span>
                              <span className="bg-gray-100 px-2 py-0.5 rounded text-xs uppercase font-bold tracking-wide">{job.type}</span>
                           </div>
                        </div>
                        <div className={`p-2 rounded-full bg-gray-100 transition-transform duration-300 ${openJobId === job.id ? 'rotate-180' : ''}`}>
                           <ChevronDown size={20} />
                        </div>
                     </button>
                     
                     <div 
                        className={`overflow-hidden transition-all duration-300 bg-gray-50 ${openJobId === job.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                     >
                        <div className="p-8 border-t border-gray-100">
                           <div className="mb-6">
                              <h4 className="font-bold text-lg mb-2">Mô tả công việc:</h4>
                              <p className="text-gray-600 leading-relaxed">{job.description}</p>
                           </div>
                           <div className="mb-8">
                              <h4 className="font-bold text-lg mb-2">Yêu cầu:</h4>
                              <ul className="space-y-2">
                                 {job.requirements.map((req, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                                       <CheckCircle size={18} className="text-gcm-green flex-shrink-0 mt-0.5" />
                                       <span>{req}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           <button 
                             onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                             className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gcm-green hover:text-black transition-colors"
                           >
                              Ứng Tuyển Ngay
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Application Form */}
      <section id="apply-form" className="py-20 bg-white">
         <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-10">
               <h2 className="text-3xl font-bold text-gcm-dark mb-4">Gửi Hồ Sơ Ứng Tuyển</h2>
               <p className="text-gray-500">Hãy để lại thông tin, bộ phận tuyển dụng sẽ liên hệ với bạn sớm nhất.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
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
                        label: 'Link CV / Portfolio (Nếu có)',
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
                  submitButtonText="GỬI HỒ SƠ"
                  submitButtonClassName="w-full bg-gcm-green text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-colors shadow-lg"
                  showSuccessMessage={true}
               />
            </div>
         </div>
      </section>

    </div>
  );
};

export default CareersPage;
