import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';

import { UsersService } from 'src/core/users/service/users.service'
import { User } from 'src/core/users/users';
import { CreateUserDto } from 'src/core/users/dtos/create-user.dto';

import { ValidationPipe } from 'src/shared/validations/validation.pipe';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @ApiBody({ type: CreateUserDto })
    @UsePipes(new ValidationPipe())
    @Post()
    async store(@Body() user: CreateUserDto): Promise<User> {
        return this.usersService.store(user);
    }
}
