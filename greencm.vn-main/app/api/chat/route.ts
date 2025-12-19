import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '../../../constants';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    
    if (!apiKey) {
      console.warn("API Key not found in environment variables.");
      return NextResponse.json(
        { error: 'API Key not configured' },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });

    const response = await chat.sendMessage({ message });
    const text = response.text || "Tôi chưa hiểu ý bạn, vui lòng nói rõ hơn.";

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return NextResponse.json(
      { error: 'Đã có lỗi xảy ra. Vui lòng liên hệ hotline.' },
      { status: 500 }
    );
  }
}

