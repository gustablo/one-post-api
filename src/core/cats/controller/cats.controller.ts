import { Controller, Get, Body, Req, Post, Param, BadRequestException, HttpStatus } from '@nestjs/common';
import { CatsService } from '../service/cats.service';
import { CreateCatDto } from '../dtos/create-cat.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

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
  async store(@Body() cat: CreateCatDto) {
    return this.catsService.store(cat);
  }

}
