import { Document } from 'mongoose';

import { Category } from 'src/core/categories/category';

export interface Post extends Document {

  readonly title: string;
  readonly createdAt: Date;
  readonly paragraphs: Paragraph[];
  readonly categories: Category[];

}

export interface Paragraph {
  readonly text: String,
  readonly img: String,
}
