import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { RegisterRepository } from './register.repository';

@Injectable()
export class RegisterService {
  constructor(private readonly Repository:RegisterRepository){}
  async create(createRegisterDto: CreateRegisterDto) {
    return await this.Repository.create(createRegisterDto)
  }

  async findAll() {
    return await this.Repository.findAll()
  }

  async findOne(id: number) {
    return await this.Repository.findOne(id)
  }

  async update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return await this.Repository.update(id,updateRegisterDto)
  }

  async remove(id: number) {
    return await this.Repository.remove(id)
  }
}
