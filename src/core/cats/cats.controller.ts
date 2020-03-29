import { Controller, Get, Body, Req, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {

  constructor(
    private catsService: CatsService
  ) { }

  @Get()
  async index() {
    return this.catsService.index();
  }

  @Post()
  async store(@Body() cat: CreateCatDto) {
    return this.catsService.store(cat);
  }

}
