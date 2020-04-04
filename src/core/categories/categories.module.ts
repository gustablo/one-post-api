import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { categoriesProviders } from './categories.providers';
import { DatabaseModule } from '../../database/database.module';
import { postsProviders } from '../posts/posts.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [CategoriesService, ...categoriesProviders, ...postsProviders],
})
export class CategoriesModule {}
