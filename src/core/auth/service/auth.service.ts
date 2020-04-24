import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';

import { AuthenticateDto } from 'src/core/auth/dtos/authenticate.dto';
import { User } from 'src/core/users/users';
import { Auth } from '../auth';

@Injectable()
export class AuthService {

    constructor(
        @Inject('USER_MODEL') private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    async authenticate(auth: AuthenticateDto): Promise<Auth> {
        const { email, password } = auth;

        const user = await this.userModel.findOne({ email }).select('+password').exec();

        if (!user) {
            throw new BadRequestException('Usuário não encontrado');
        }
        const comparePassword = await bcrypt.compare(password, user.get('password'));

        if (!comparePassword) {
            throw new BadRequestException('Senha inválida');
        }

        user.set('password', undefined);

        const generatedJwt = this.generateJwt(user);

        const response = { user, ...generatedJwt };
        return response;
    }

    generateJwt(user: User) {
        const payload = { username: user.email, sub: user._id };
        return {
          accessToken: this.jwtService.sign(payload),
        };
    }

}
