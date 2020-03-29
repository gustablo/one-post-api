import { CreateParagraphDto } from 'src/core/paragraphs/dto/create-paragraph.dto';
import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePostDto {

  @IsString({ message: 'Título deve ser palavra' })
  title: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateParagraphDto)
  paragraphs: CreateParagraphDto[];

}
