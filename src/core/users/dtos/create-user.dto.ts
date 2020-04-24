import { IsString, IsEmail, Min, MinLength } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}
