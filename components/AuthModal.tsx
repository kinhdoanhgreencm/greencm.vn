'use client';

import React from 'react';
import { X, Mail, Lock, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Container - Dark theme like main UI */}
      <div className="relative bg-gcm-dark w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl animate-slide-down border border-white/10">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
        >
          <X size={20} className="text-gray-300" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
               <img src="/logo.png" alt="GCM" width={128} height={32} className="h-8 w-auto" />
            </div>
            <h2 className="text-2xl font-bold text-white">Chào mừng trở lại!</h2>
            <p className="text-gray-400 text-sm mt-1">Đăng nhập để quản lý xe và dịch vụ của bạn</p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 bg-white/10 border border-white/20 hover:bg-white/15 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Tiếp tục với Google</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-3 px-4 rounded-xl transition-all duration-200">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Tiếp tục với Facebook</span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gcm-dark text-gray-400">Hoặc đăng nhập bằng Email</span>
            </div>
          </div>

          {/* Traditional Login Form */}
          <form className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-500" />
              </div>
              <input 
                type="email" 
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gcm-green focus:ring-1 focus:ring-gcm-green transition-all"
                placeholder="Email của bạn"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-500" />
              </div>
              <input 
                type="password" 
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gcm-green focus:ring-1 focus:ring-gcm-green transition-all"
                placeholder="Mật khẩu"
              />
            </div>
            
            <div className="flex items-center justify-between text-sm">
               <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded text-gcm-green focus:ring-gcm-green bg-white/10 border-white/20" />
                  <span className="text-gray-400">Ghi nhớ</span>
               </label>
               <a href="#" className="text-gcm-green font-bold hover:underline">Quên mật khẩu?</a>
            </div>

            <button className="w-full bg-gcm-green hover:bg-green-400 text-black font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group">
              Đăng Nhập
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-400">
            Chưa có tài khoản?{' '}
            <a href="#" className="text-gcm-green font-bold hover:underline transition-colors">Đăng ký ngay</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
