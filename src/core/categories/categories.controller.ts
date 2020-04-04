import { Controller, Post, Get, Param } from '@nestjs/common';
import { Category } from 'src/interfaces/category.interface';
import { CategoriesService } from './categories.service';

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
