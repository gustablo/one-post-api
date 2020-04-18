import { Controller, Post, Get, Param } from '@nestjs/common';
import { Category } from 'src/core/categories/interfaces/category.interface';
import { CategoriesService } from '../service/categories.service';
import { ApiTags } from '@nestjs/swagger';

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
