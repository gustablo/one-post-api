import * as mongoose from 'mongoose';
import { ParagraphSchema } from './paragraph.schema';

export const PostSchema = new mongoose.Schema({

  title: String,

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  paragraphs: [{
    type: ParagraphSchema,
    ref: 'Paragraph',
  }],

});
