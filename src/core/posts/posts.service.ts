import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from '../../interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {

  constructor(
    @Inject('POST_MODEL') private postModel: Model<Post>,
  ) {}

  async store(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);

    return createdPost.save();
  }

  async index(): Promise<Post[]> {
    return this.postModel.find().exec();
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
