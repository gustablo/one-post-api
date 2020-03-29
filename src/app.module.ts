import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CatsModule } from './core/cats/cats.module';
import { PostsModule } from './core/posts/posts.module';
import { ParagraphsModule } from './core/paragraphs/paragraphs.module';

@Module({
  imports: [DatabaseModule, CatsModule, PostsModule, ParagraphsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
