import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException
} from "@nestjs/common";
import { validate, ValidationError } from "class-validator";
import { plainToClass } from "class-transformer";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const messageErrors = this.joinErrors(errors);

      throw new BadRequestException(messageErrors);
    }
    return value;
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private joinErrors(errors: ValidationError[]) {
    return errors.map(err => {
      if (err.constraints) {
        const keys = Object.keys(err.constraints);

        for (const key of keys) {
          return err.constraints[key];
        }
      }
      if (err.children) {
        const constraints = this.findDeepChildrens(err);

        const keys = Object.keys(constraints);

        for (const key of keys) {
          return constraints[key];
        }
      }
    });
  }

  private findDeepChildrens(error) {
    if (!error.children.length) return error.constraints;

    return this.findDeepChildrens(error.children[0]);
  }
}
