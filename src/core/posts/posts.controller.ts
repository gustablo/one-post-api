import { Controller, Post, Body, Get, Param, UsePipes } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ValidationPipe } from '../../shared/validation.pipe';
import { ApiBody, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {

  constructor(
    private postService: PostsService,
  ) {}

  @ApiBody({ type: CreatePostDto })
  @Post()
  @UsePipes(new ValidationPipe())
  async store(@Body() createPostDto: CreatePostDto) {
    return this.postService.store(createPostDto);
  }

  @Get()
  async index() {
    return this.postService.index();
  }

  @ApiParam({ name: 'id', type: String })
  @Get('id')
  async show(@Param('id') id: string) {
    return this.postService.show(id);
  }
}
