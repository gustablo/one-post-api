import { Document } from 'mongoose';

export interface Paragraph extends Document {

  readonly text: string;
  readonly img: string;

}
