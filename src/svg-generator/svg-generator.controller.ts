import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { SvgGeneratorService } from './svg-generator.service';

@Controller('svg')
export class SvgGeneratorController {
  constructor(private readonly svgGeneratorService: SvgGeneratorService) {}

  @Get()
  getSvg(@Query() query: any, @Res() res: Response): void {
    const color = query.color || '3498db';
    const name = query.name || 'no_name';

    const generatedSvg = this.svgGeneratorService.generateSVG(color, name);

    res.type('image/svg+xml').send(generatedSvg);
  }
}
