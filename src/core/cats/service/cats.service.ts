import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from '../interfaces/cat.interface';
import { CreateCatDto } from '../dtos/create-cat.dto';
import { GenericCrudService } from '../../../shared/generics/generic-crud';
@Injectable()
export class CatsService extends GenericCrudService<Cat> {

  constructor(@Inject('CAT_MODEL') private catModel: Model<Cat>) {
    super(catModel);
  }
}
