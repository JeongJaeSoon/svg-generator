import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SvgGeneratorController } from './svg-generator/svg-generator.controller';
import { SvgGeneratorService } from './svg-generator/svg-generator.service';

@Module({
  imports: [],
  controllers: [AppController, SvgGeneratorController],
  providers: [AppService, SvgGeneratorService],
})
export class AppModule {}
