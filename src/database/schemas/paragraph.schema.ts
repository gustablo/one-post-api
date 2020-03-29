import * as mongoose from 'mongoose';

export const ParagraphSchema = new mongoose.Schema({

  text: String,
  img: String,

});
