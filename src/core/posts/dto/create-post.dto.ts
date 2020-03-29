import { CreateParagraphDto } from 'src/core/paragraphs/dto/create-paragraph.dto';
import { IsString, IsArray } from 'class-validator';

export class CreatePostDto {

  @IsString()
  title: string;

  @IsArray()
  paragraphs: CreateParagraphDto[];

}
