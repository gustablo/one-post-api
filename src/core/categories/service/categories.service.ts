import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Category } from '../category';
import { Post } from '../../posts/post';

@Injectable()
export class CategoriesService {

  constructor(
    @Inject('CATEGORY_MODEL') private categoryModel: Model<Category>,
    @Inject('POST_MODEL') private postModel: Model<Post>,
  ) {}

  async index(): Promise<Category[]> {
    return this.categoryModel.find();
  }

  async showPosts(id: string) {
    const category = await this.categoryModel.findById(id);

    const postsByCategoryId = await this.postModel.find({ categories:  { $elemMatch: { name: category.name } } });

    return postsByCategoryId;
  }

}
