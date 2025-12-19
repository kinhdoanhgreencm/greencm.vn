import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<void> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found in environment variables.");
      return;
    }
    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat session", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
    if (!chatSession) return "Xin lỗi, hệ thống chat đang bảo trì. Vui lòng thử lại sau.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "Tôi chưa hiểu ý bạn, vui lòng nói rõ hơn.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Đã có lỗi xảy ra. Vui lòng liên hệ hotline.";
  }
};
