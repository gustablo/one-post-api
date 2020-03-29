import { Test, TestingModule } from '@nestjs/testing';
import { ParagraphsController } from './paragraphs.controller';

describe('Paragraphs Controller', () => {
  let controller: ParagraphsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParagraphsController],
    }).compile();

    controller = module.get<ParagraphsController>(ParagraphsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
