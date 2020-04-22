import { Document } from 'mongoose';
import { Category } from '../categories/category';
import { Paragraph } from '../paragraphs/paragraphs';

export interface Post extends Document {

  readonly title: string;
  readonly createdAt: Date;
  readonly paragraphs: Paragraph[];
  readonly categories: Category[];

}
