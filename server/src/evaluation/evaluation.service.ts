import { Injectable } from '@nestjs/common';
import * as pdfParse from 'pdf-parse';
import axios from 'axios';

@Injectable()
export class EvaluationService {
  private readonly geminiApiKey = process.env.GEMINI_API_KEY as string;
  private readonly geminiApiUrl =
    'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';

  constructor() {}

  async evaluateCurriculum(curriculum: any): Promise<string> {
    try {
      const geminiResponse = await this.generateGeminiResponse(curriculum);
      if (
        geminiResponse &&
        geminiResponse.candidates &&
        geminiResponse.candidates.length > 0
      ) {
        const generatedText =
          geminiResponse.candidates[0]?.content.parts[0].text;
        return generatedText ? generatedText.trim() : '';
      } else {
        throw new Error('Empty or invalid response from Gemini API');
      }
    } catch (error) {
      console.error('Error evaluating curriculum:', error);
      throw error;
    }
  }

  async extractTextFromPdf(buffer: Buffer): Promise<string> {
    const data = await pdfParse(buffer);
    return data.text;
  }

  private async generateGeminiResponse(prompt: string): Promise<any> {
    const apiUrl = `${this.geminiApiUrl}?key=${this.geminiApiKey}`;

    try {
      const response = await axios.post(apiUrl, {
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `Olá, quero que você se comporte como um recrutador e avalie esse curriculo: ${prompt} No final quero que você pontue de 0 a 100.`,
              },
            ],
          },
        ],
      });

      return response.data;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw error;
    }
  }
}
