import { IsString, IsOptional } from 'class-validator';

export class CreateParagraphDto {

  @IsString()
  @IsOptional()
  text?: string;

  @IsString()
  @IsOptional()
  img?: string;
}
