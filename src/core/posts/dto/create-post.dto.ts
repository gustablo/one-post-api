import { CreateParagraphDto } from 'src/core/paragraphs/dto/create-paragraph.dto';
import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {

  @ApiProperty()
  @IsString({ message: 'Título deve ser palavra' })
  title: string;

  @ApiProperty({ type: [CreateParagraphDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateParagraphDto)
  paragraphs: CreateParagraphDto[];

}
