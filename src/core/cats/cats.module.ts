import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsController } from './controller/cats.controller';
import { CatsService } from './service/cats.service';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../../database/database.module';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...catsProviders,
  ],
})
export class CatsModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({
    //     path: 'cats',
    //     method: RequestMethod.ALL
    //   });
  }
}
