import * as mongoose from 'mongoose';
import { ParagraphSchema } from './paragraph.schema';
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

  paragraphs: [{
    type: ParagraphSchema,
    ref: 'Paragraph',
  }],

});
