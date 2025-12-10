'use client';

import React, { useState, FormEvent } from 'react';
import { Loader2, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { FormType } from '../app/api/forms/route';

export interface CustomerFormProps {
  formType: FormType;
  title?: string;
  description?: string;
  fields: FormField[];
  onSubmit?: (data: any) => void;
  submitButtonText?: string;
  submitButtonClassName?: string;
  className?: string;
  showSuccessMessage?: boolean;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'tel' | 'email' | 'number' | 'date' | 'datetime-local' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  gridCols?: 1 | 2; // For grid layout
  validation?: (value: string) => string | null; // Custom validation
}

interface FormState {
  [key: string]: string;
  name: string;
  phone: string;
  email: string;
}

const CustomerForm: React.FC<CustomerFormProps> = ({
  formType,
  title,
  description,
  fields,
  onSubmit,
  submitButtonText = 'Gửi Yêu Cầu',
  submitButtonClassName = 'w-full bg-gcm-green text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-colors shadow-lg',
  className = '',
  showSuccessMessage = true,
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateField = (name: string, value: string, field: FormField): string | null => {
    if (field.required && !value.trim()) {
      return `${field.label} là bắt buộc`;
    }

    if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Email không hợp lệ';
    }

    if (field.type === 'tel' && value) {
      const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
      const cleanPhone = value.replace(/\s+/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        return 'Số điện thoại không hợp lệ';
      }
    }

    if (field.validation) {
      return field.validation(value);
    }

    return null;
  };

  const handleChange = (name: string, value: string, field: FormField) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (name: string, value: string, field: FormField) => {
    const error = validateField(name, value, field);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    fields.forEach(field => {
      const value = formData[field.name] || '';
      const error = validateField(field.name, value, field);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    // Always validate name and phone
    if (!formData.name.trim()) {
      newErrors.name = 'Họ tên là bắt buộc';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Số điện thoại là bắt buộc';
    } else {
      const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
      const cleanPhone = formData.phone.replace(/\s+/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phone = 'Số điện thoại không hợp lệ';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      setSubmitMessage('Vui lòng kiểm tra lại thông tin đã nhập.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const submissionData = {
        formType,
        ...formData,
      };

      // Call custom onSubmit if provided
      if (onSubmit) {
        await onSubmit(submissionData);
      }

      // Send to API
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Có lỗi xảy ra khi gửi form');
      }

      setSubmitStatus('success');
      setSubmitMessage(result.message || 'Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ lại sớm nhất.');

      // Reset form after successful submission
      if (showSuccessMessage) {
        setTimeout(() => {
          setFormData({ name: '', phone: '', email: '' });
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setFormData({ name: '', phone: '', email: '' });
      }

    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage(error.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau hoặc liên hệ hotline: 0941 498 894');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    const value = formData[field.name] || '';
    const error = errors[field.name];
    const hasError = !!error;

    const baseInputClassName = `w-full p-3 bg-gray-50 rounded-xl border ${
      hasError ? 'border-red-500' : 'border-gray-200 focus:border-gcm-green'
    } outline-none transition-colors`;

    const fieldElement = (
      <div className={field.gridCols === 2 ? 'col-span-2 md:col-span-1' : ''}>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        {field.type === 'textarea' ? (
          <textarea
            name={field.name}
            value={value}
            onChange={(e) => handleChange(field.name, e.target.value, field)}
            onBlur={(e) => handleBlur(field.name, e.target.value, field)}
            placeholder={field.placeholder}
            required={field.required}
            className={`${baseInputClassName} h-24 resize-none`}
          />
        ) : field.type === 'select' ? (
          <select
            name={field.name}
            value={value}
            onChange={(e) => handleChange(field.name, e.target.value, field)}
            onBlur={(e) => handleBlur(field.name, e.target.value, field)}
            required={field.required}
            className={baseInputClassName}
          >
            {field.placeholder && <option value="">{field.placeholder}</option>}
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={field.type}
            name={field.name}
            value={value}
            onChange={(e) => handleChange(field.name, e.target.value, field)}
            onBlur={(e) => handleBlur(field.name, e.target.value, field)}
            placeholder={field.placeholder}
            required={field.required}
            className={baseInputClassName}
          />
        )}
        {hasError && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle size={12} />
            {error}
          </p>
        )}
      </div>
    );

    return fieldElement;
  };

  return (
    <div className={className}>
      {title && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          {description && <p className="text-gray-500 text-sm">{description}</p>}
        </div>
      )}

      {submitStatus === 'success' && showSuccessMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
          <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
          <p className="text-green-800 text-sm font-medium">{submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
          <XCircle className="text-red-600 flex-shrink-0" size={20} />
          <p className="text-red-800 text-sm font-medium">{submitMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Always include name and phone fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
              Họ tên <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value, { name: 'name', label: 'Họ tên', type: 'text', required: true })}
              onBlur={(e) => handleBlur('name', e.target.value, { name: 'name', label: 'Họ tên', type: 'text', required: true })}
              placeholder="Nguyễn Văn A"
              required
              className={`w-full p-3 bg-gray-50 rounded-xl border ${
                errors.name ? 'border-red-500' : 'border-gray-200 focus:border-gcm-green'
              } outline-none transition-colors`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value, { name: 'phone', label: 'Số điện thoại', type: 'tel', required: true })}
              onBlur={(e) => handleBlur('phone', e.target.value, { name: 'phone', label: 'Số điện thoại', type: 'tel', required: true })}
              placeholder="09xxxxxxx"
              required
              className={`w-full p-3 bg-gray-50 rounded-xl border ${
                errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-gcm-green'
              } outline-none transition-colors`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Render additional fields */}
        {fields.length > 0 && (
          <div className={`grid grid-cols-1 ${fields.some(f => f.gridCols === 2) ? 'md:grid-cols-2' : ''} gap-4`}>
            {fields.map((field) => (
              <React.Fragment key={field.name}>
                {renderField(field)}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${submitButtonClassName} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={20} />
                Đang gửi...
              </span>
            ) : (
              submitButtonText
            )}
          </button>
          {submitStatus === 'success' && !showSuccessMessage && (
            <p className="text-center text-xs text-gray-400 mt-3">
              GCM sẽ liên hệ lại xác nhận trong vòng 5 phút.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;

