import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegisterRepository } from 'src/register/register.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly RegisterRepository:RegisterRepository,  private jwtService: JwtService) {}
  async login(createAuthDto: CreateAuthDto) {
    const user = await this.RegisterRepository.searchEmail(createAuthDto.email)

    if(!user) {
      throw new UnauthorizedException("acces dined")
    }

    const isPasswordCorrect = await bcrypt.compare(
      createAuthDto.password,
      user.password
    )

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Access denied: Incorrect password');
    }

    const payload = {name:user.name, email:user.email, id:user.id, password:user.password };

    const {password, ...data} = user

    return {
      data,
      accesToken: await this.jwtService.signAsync(payload)
    }
  }
}
