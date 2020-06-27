import { Controller, Post, Body, Get, Param, UsePipes, Patch, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags, ApiParam } from '@nestjs/swagger';

import { PostsService } from 'src/core/posts/service/posts.service';

import { CreatePostDto } from 'src/core/posts/dtos/create-post.dto';

import { ValidationPipe } from 'src/shared/validations/validation.pipe';

import { JwtAuthGuard } from 'src/core/auth/guard/jwt/jwt-auth.guard';

@ApiTags('posts')
@Controller('posts')
export class PostsController {

  constructor(
    private postService: PostsService,
  ) {}

  @ApiBody({ type: CreatePostDto })
  @Post()
  @UsePipes(new ValidationPipe())
  // @UseGuards(JwtAuthGuard)
  async store(@Body() createPostDto: CreatePostDto) {
    return this.postService.store(createPostDto);
  }

  @Get()
  async index() {
    return this.postService.index();
  }

  @ApiParam({ name: 'id', type: String })
  @Get(':title')
  async show(@Param('title') title: string) {
    return this.postService.show(title);
  }

  @Patch(':id/likes')
  async patchLike(@Param('id') id: string) {
    return this.postService.patchLike(id);
  }
}
