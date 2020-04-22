import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CatsModule } from './core/cats/cats.module';
import { PostsModule } from './core/posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './core/categories/categories.module';
import { UsersModule } from './core/users/users.module';
import { CommentsModule } from './core/comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    CatsModule,
    PostsModule,
    CategoriesModule,
    UsersModule,
    CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
