import { Module } from '@nestjs/common';

import { CategoriesController } from 'src/core/categories/controller/categories.controller';

import { CategoriesService } from 'src/core/categories/service/categories.service';

import { categoriesProviders } from 'src/core/categories/categories.providers';
import { postsProviders } from 'src/core/posts/posts.providers';

import { DatabaseModule } from 'src/database/database.module';


@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [CategoriesService, ...categoriesProviders, ...postsProviders],
})
export class CategoriesModule {}
