import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CatsModule } from './core/cats/cats.module';
import { PostsModule } from './core/posts/posts.module';
import { ParagraphsModule } from './core/paragraphs/paragraphs.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, CatsModule, PostsModule, ParagraphsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
