import { Injectable, Inject } from '@nestjs/common';

import { User } from 'src/core/users/users';

import { Model } from 'mongoose';
import { CreateUserDto } from 'src/core/users/dtos/create-user.dto';

@Injectable()
export class UsersService {
    
    constructor(
        @Inject('USER_MODEL') private userModel: Model<User>
    ) {}

    async store(user: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(user);

        await createdUser.save();
        return createdUser;
    }

}
