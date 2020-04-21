import { Controller, Post, Get, Param, BadRequestException } from '@nestjs/common';
import { Category } from 'src/core/categories/interfaces/category.interface';
import { CategoriesService } from '../service/categories.service';
import { ApiTags } from '@nestjs/swagger';
import { existsById } from '../../../shared/validations/exists-id.validation';

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
    const categoryExists = await existsById('Category', id);

    if (!categoryExists)  {
      throw new BadRequestException('Categoria não econtrada');
    }

    return this.categoryService.showPosts(id);
  }

}
