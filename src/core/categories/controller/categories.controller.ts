import { Controller, Post, Get, Param, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Category } from 'src/core/categories/category';

import { CategoriesService } from 'src/core/categories/service/categories.service';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {

  constructor(
    private readonly categoryService: CategoriesService,
  ) {}

  @Get()
  async index(): Promise<Category[]> {
    return this.categoryService.index();
  }

  @Get(':id/posts')
  async showPosts(@Param('id') id: string) {
    return this.categoryService.showPosts(id);
  }

}
