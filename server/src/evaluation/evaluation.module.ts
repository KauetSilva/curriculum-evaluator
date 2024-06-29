import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [EvaluationService],
  controllers: [EvaluationController],
})
export class EvaluationModule {}
