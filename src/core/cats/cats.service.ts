import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from '../../interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
  ) {}

  async store(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async index(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
