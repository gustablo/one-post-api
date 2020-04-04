import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({

  name: {
    type: String,
    enum: ['JAVASCRIPT', 'PHP', 'NODE_JS'],
    required:  true,
  },

});
