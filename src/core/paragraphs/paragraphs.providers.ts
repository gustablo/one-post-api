import { Connection } from 'mongoose';
import { ParagraphSchema } from '../../database/schemas/paragraph.schema';

export const paragraphsProviders = [
  {
    provide: 'PARAGRAPH_MODEL',
    useFactory: (connection: Connection) => connection.model('Paragraph', ParagraphSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
