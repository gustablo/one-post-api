import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateParagraphDto {

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  text?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  img?: string;
}
