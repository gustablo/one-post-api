import { Document } from 'mongoose';
import { Category } from './category.interface';
import { Paragraph } from './paragraph.interface';

export interface Post extends Document {

  readonly title: string;
  readonly createdAt: Date;
  readonly paragraphs: Paragraph[];
  readonly categories: Category[];

}
