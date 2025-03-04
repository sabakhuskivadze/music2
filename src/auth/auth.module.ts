import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RegisterRepository } from 'src/register/register.repository';
import { RegisterModule } from 'src/register/register.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [RegisterModule,
    JwtModule.register({
      global: true,
      secret: "sd",
      signOptions: { expiresIn: '60s' },
    }),], 
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
