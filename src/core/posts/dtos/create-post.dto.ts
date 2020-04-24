import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsString, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';

import { CreateCategoryDto } from 'src/core/categories/dtos/category-create.dto';

export class CreatePostDto {

  @ApiProperty()
  @IsString({ message: 'Título deve ser palavra' })
  title: string;


  @ApiProperty()
  @IsString({ message: 'Texto deve ser palavra' })
  text: string;

  @ApiProperty({ type: [CreateCategoryDto] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCategoryDto)
  categories: CreateCategoryDto[];

}
