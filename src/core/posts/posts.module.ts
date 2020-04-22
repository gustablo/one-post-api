import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';

import { PostsController } from 'src/core/posts/controller/posts.controller';

import { PostsService } from 'src/core/posts/service/posts.service';

import { postsProviders } from 'src/core/posts/posts.providers';
import { categoriesProviders } from 'src/core/categories/categories.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders, ...categoriesProviders],
})
export class PostsModule { }
