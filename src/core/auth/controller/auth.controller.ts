import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';

import { AuthService } from 'src/core/auth/service/auth.service';
import { AuthenticateDto } from 'src/core/auth/dtos/authenticate.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @ApiBody({type: AuthenticateDto})
    @Post()
    async authenticate(@Body() auth: AuthenticateDto) {
        return this.authService.authenticate(auth);
    }

}
