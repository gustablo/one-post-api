import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {


  use(req: Request, res: Response, next: () => void) {

    console.log(req.body);
    // return req;
    // throw { req, res };
    // throw new BadRequestException('bad request man...');
    next();
  }
}
