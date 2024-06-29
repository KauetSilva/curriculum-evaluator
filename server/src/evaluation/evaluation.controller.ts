import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EvaluationService } from './evaluation.service';

@Controller('evaluate')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: any) {
    const text = await this.evaluationService.extractTextFromPdf(file.buffer);
    const feedback = await this.evaluationService.evaluateCurriculum(text);
    console.log('testeeee', feedback);
    return { feedback };
  }
}
