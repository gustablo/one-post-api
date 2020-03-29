import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {

  constructor(
    private postService: PostsService,
  ) {}

  @Post()
  async store(@Body() createPostDto: CreatePostDto) {
    return this.postService.store(createPostDto);
  }

  @Get()
  async index() {
    return this.postService.index();
  }

  @Get('id')
  async show(@Param('id') id: string) {
    return this.postService.show(id);
  }
}
