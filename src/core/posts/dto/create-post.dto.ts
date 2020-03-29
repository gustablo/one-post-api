import { CreateParagraphDto } from 'src/core/paragraphs/dto/create-paragraph.dto';

export interface CreatePostDto {

  title: string;
  paragraphs: CreateParagraphDto[];

}
