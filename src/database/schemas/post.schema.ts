import * as mongoose from 'mongoose';
import { CategorySchema } from './category.schema';

export const PostSchema = new mongoose.Schema({

  title: String,

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  categories: [{
    type: CategorySchema,
    ref: 'Category',
  }],

  likes: {
    type: Number,
    default: 0,
  },

  text: String,

});
