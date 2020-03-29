import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>

      mongoose.connect('mongodb+srv://gustavo_penero:<gPinheir0>@cluster0-tlzyp.mongodb.net/blog?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: 'gustavo_penero',
        pass: 'gPinheir0',
      }),

  },
];
