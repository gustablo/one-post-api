import { Document } from 'mongoose';
import { Category } from '../../categories/interfaces/category.interface';
import { Paragraph } from '../../paragraphs/interfaces/paragraph.interface';

export interface Post extends Document {

  readonly title: string;
  readonly createdAt: Date;
  readonly paragraphs: Paragraph[];
  readonly categories: Category[];

}
