import { CreateParagraphDto } from '../../paragraphs/dtos/create-paragraph.dto';
import { IsString, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryDto } from '../../categories/dtos/category-create.dto';

export class CreatePostDto {

  @ApiProperty()
  @IsString({ message: 'Título deve ser palavra' })
  title: string;

  @ApiProperty({ type: [CreateParagraphDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateParagraphDto)
  paragraphs: CreateParagraphDto[];

  @ApiProperty({ type: [CreateCategoryDto] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCategoryDto)
  categories: CreateCategoryDto[];

}
