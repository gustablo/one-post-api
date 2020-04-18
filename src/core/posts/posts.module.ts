import { Module } from '@nestjs/common';
import { PostsController } from './controller/posts.controller';
import { PostsService } from './service/posts.service';
import { DatabaseModule } from '../../database/database.module';
import { postsProviders } from './posts.providers';
import { categoriesProviders } from '../categories/categories.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders, ...categoriesProviders],
})
export class PostsModule { }
