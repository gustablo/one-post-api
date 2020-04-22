import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

import { CategoriesEnum } from 'src/core/categories/enums/categories.enum';

export class CreateCategoryDto {

  @ApiProperty()
  @IsString({ message: 'Categoria deve ser informada' })
  @IsEnum(CategoriesEnum, { message: 'Tipo de categoria inválida' })
  @IsNotEmpty({ message: 'Nome da categoria deve ser informada' })
  name: string;

}
