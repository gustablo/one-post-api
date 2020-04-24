import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { usersProviders } from 'src/core/users/users.providers';
import { DatabaseModule } from 'src/database/database.module';
import { JwtStrategy } from './guard/jwt/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.jwtSecretKey,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ...usersProviders, JwtStrategy],
})
export class AuthModule {}
