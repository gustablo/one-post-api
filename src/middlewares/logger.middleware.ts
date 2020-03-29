import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {

    throw new BadRequestException('bad request man...');
  }
}