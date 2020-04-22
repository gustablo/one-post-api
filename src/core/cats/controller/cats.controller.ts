import { Controller, Get, Body, Req, Post, Param, BadRequestException, HttpStatus, UsePipes } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { CatsService } from 'src/core/cats/service/cats.service';

import { CreateCatDto } from 'src/core/cats/dtos/create-cat.dto';

import { ValidationPipe } from 'src/shared/validations/validation.pipe';

@ApiTags('cats')
@Controller('cats')
export class CatsController {

  constructor(
    private catsService: CatsService
  ) { }

  @Get()
  @ApiBearerAuth()
  async index() {
    return this.catsService.index();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async store(@Body() cat: CreateCatDto) {
    return this.catsService.store(cat);
  }

}
