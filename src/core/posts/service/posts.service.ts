import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from '../interfaces/post.interface';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Category } from 'src/core/categories/interfaces/category.interface';
import { CreateCategoryDto } from '../../categories/dtos/category-create.dto';

@Injectable()
export class PostsService {

  constructor(
    @Inject('POST_MODEL') private postModel: Model<Post>,
    @Inject('CATEGORY_MODEL') private categoryModel: Model<Category>,
  ) {}

  async store(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);

    await this.storeCategories(createPostDto.categories);

    return createdPost.save();
  }

  async storeCategories(categories: CreateCategoryDto[]) {

    for (const category of categories) {
      const categoryExists = await this.categoryModel.findOne({ name: category.name });

      if (!categoryExists) {
        const createdCategory = new this.categoryModel(category);
        await createdCategory.save();
      }

    }

  }

  async index(): Promise<Post[]> {
    return this.postModel.find().sort({ _id: -1 }).exec();
  }

  async show(id: string): Promise<Post> {
    return this.postModel.findById(id);
  }

  async patchLike(id: string): Promise<number> {
    const post = await this.postModel.findById(id);

    const lastTotalLikes: number = post.get('likes');
    const newTotalLikes = lastTotalLikes + 1;

    post.set('likes', newTotalLikes);

    await post.save();

    return post.get('likes') as number;
  }

}
