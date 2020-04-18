import { Module } from '@nestjs/common';
import { ParagraphsController } from './controller/paragraphs.controller';
import { ParagraphsService } from './service/paragraphs.service';
import { DatabaseModule } from '../../database/database.module';
import { paragraphsProviders } from './paragraphs.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ParagraphsController],
  providers: [ParagraphsService, ...paragraphsProviders],
})
export class ParagraphsModule {}
