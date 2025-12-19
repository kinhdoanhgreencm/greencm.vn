import { NextRequest, NextResponse } from 'next/server';

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
  | 'consultation';        // Tư vấn chung

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

    // TODO: In production, you would:
    // 1. Save to database (e.g., PostgreSQL, MongoDB)
    // 2. Send email notification to admin
    // 3. Send SMS/Zalo notification
    // 4. Integrate with CRM system
    // 5. Send auto-reply to customer

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

