import { Paragraph } from '../interfaces/paragraph.interface';
import { Document } from 'mongoose';

export interface Post extends Document {

  readonly title: string;
  readonly createdAt: Date;
  readonly paragraphs: Paragraph[];

}
