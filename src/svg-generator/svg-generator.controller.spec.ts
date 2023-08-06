import { Test, TestingModule } from '@nestjs/testing';
import { SvgGeneratorController } from './svg-generator.controller';

describe('SvgGeneratorController', () => {
  let controller: SvgGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SvgGeneratorController],
    }).compile();

    controller = module.get<SvgGeneratorController>(SvgGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
