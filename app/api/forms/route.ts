import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Types for different form types
export type FormType = 
  | 'test-drive'           // Đăng ký lái thử
  | 'quote-request'        // Yêu cầu báo giá
  | 'cost-estimate'        // Dự toán chi phí
  | 'rental-booking'       // Đặt thuê xe
  | 'sell-car'             // Đăng ký bán xe / Định giá
  | 'find-car'             // Tìm xe theo yêu cầu
  | 'spa-booking'          // Đặt lịch spa
  | 'limo-quote'           // Báo giá Limo Green
  | 'job-application'     // Ứng tuyển
  | 'consultation'         // Tư vấn chung
  | 'contact';             // Liên hệ

export interface FormSubmission {
  formType: FormType;
  name: string;
  phone: string;
  email?: string;
  // Additional fields based on form type
  [key: string]: any;
}

export async function POST(request: NextRequest) {
  try {
    const data: FormSubmission = await request.json();

    // Validate required fields
    if (!data.formType || !data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Thiếu thông tin bắt buộc. Vui lòng điền đầy đủ họ tên và số điện thoại.' },
        { status: 400 }
      );
    }

    // Validate phone number format (Vietnamese phone numbers)
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    const cleanPhone = data.phone.replace(/\s+/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam.' },
        { status: 400 }
      );
    }

    // Log the submission (in production, you would save to database or send to CRM)
    console.log('Form Submission Received:', {
      formType: data.formType,
      name: data.name,
      phone: cleanPhone,
      email: data.email,
      timestamp: new Date().toISOString(),
      data: data,
    });

    // Format email content based on form type
    const getEmailContent = () => {
      const baseContent = `
        <h2>Thông Tin Khách Hàng Mới</h2>
        <p><strong>Loại Form:</strong> ${data.formType}</p>
        <p><strong>Họ Tên:</strong> ${data.name}</p>
        <p><strong>Số Điện Thoại:</strong> ${cleanPhone}</p>
        <p><strong>Email:</strong> ${data.email || 'Không cung cấp'}</p>
        <p><strong>Thời Gian:</strong> ${new Date().toLocaleString('vi-VN')}</p>
      `;

      if (data.formType === 'contact') {
        return `
          ${baseContent}
          <h3>Nội Dung Tin Nhắn</h3>
          <p><strong>Chủ Đề:</strong> ${data.subject || 'Không xác định'}</p>
          <p><strong>Tin Nhắn:</strong></p>
          <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${(data.message || '').replace(/\n/g, '<br>')}</p>
        `;
      }

      return `
        ${baseContent}
        <h3>Thông Tin Bổ Sung</h3>
        <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${JSON.stringify(data, null, 2)}</pre>
      `;
    };

    // Send email via Resend
    try {
      await resend.emails.send({
        from: 'GCM <onboarding@resend.dev>',
        to: 'kinhdoanhgreencm@gmail.com',
        replyTo: data.email || 'onboarding@resend.dev',
        subject: `[${data.formType.toUpperCase()}] Yêu cầu từ ${data.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; color: #333; }
                h2, h3 { color: #00D26A; }
                p { margin: 10px 0; }
                strong { color: #333; }
                a { color: #00D26A; text-decoration: none; }
                .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
              </style>
            </head>
            <body>
              ${getEmailContent()}
              <div class="footer">
                <p>Email này được gửi từ hệ thống liên hệ của GCM (Green Car Management).</p>
                <p>Vui lòng trả lời email hoặc gọi khách hàng qua số điện thoại: <strong>${cleanPhone}</strong></p>
              </div>
            </body>
          </html>
        `
      });

      console.log('Email sent successfully to kinhdoanhgreencm@gmail.com');
    } catch (emailError) {
      console.error('Error sending email via Resend:', emailError);
      // Continue even if email fails - customer's submission was received
    }

    // TODO: In production, you would also:
    // 1. Save to database (e.g., PostgreSQL, MongoDB)
    // 2. Send SMS/Zalo notification to admin
    // 3. Integrate with CRM system
    // 4. Send auto-reply to customer email

    // For now, we'll return success
    return NextResponse.json(
      { 
        success: true,
        message: 'Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.',
        submissionId: `GCM-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Đã có lỗi xảy ra khi xử lý yêu cầu. Vui lòng thử lại sau hoặc liên hệ hotline: 0969 99 11 77' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve form submissions (for admin panel)
export async function GET(request: NextRequest) {
  // In production, add authentication here
  const searchParams = request.nextUrl.searchParams;
  const formType = searchParams.get('formType');
  
  // TODO: Fetch from database
  return NextResponse.json(
    { message: 'This endpoint will return form submissions from database' },
    { status: 200 }
  );
}

