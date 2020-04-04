import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty, IsIn } from 'class-validator';
import { CategoriesEnum } from '../../../enums/categories.enum';

export class CategoryCreateDTO {

  @ApiProperty()
  @IsString({ message: 'Categoria deve ser informada' })
  @IsEnum(CategoriesEnum, { message: 'Tipo de categoria inválida' })
  @IsNotEmpty({ message: 'Nome da categoria deve ser informada' })
  name: string;

}
