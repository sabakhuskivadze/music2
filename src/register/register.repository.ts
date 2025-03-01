import { Inject, Injectable } from "@nestjs/common";
import { CreateRegisterDto } from "./dto/create-register.dto";
import { UpdateRegisterDto } from "./dto/update-register.dto";
import { Repository } from "typeorm";
import { Register } from "./entities/register.entity";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class RegisterRepository {
    constructor( @InjectRepository(Register) private readonly repository:Repository<Register>){}
    async create(createRegisterDto: CreateRegisterDto) {
       const user = this.repository.create(createRegisterDto)

       return await this.repository.save(user)
      }
    
      async findAll() {
        return await this.repository
        .createQueryBuilder("register")
        .getMany()
      }
    
      async findOne(id: number) {
        return await this.repository
        .createQueryBuilder("register")
        .where("register.id =:id",{id})
        .getOne()
      }
    
      async update(id: number, updateRegisterDto: UpdateRegisterDto) {
        return await this.repository
        .createQueryBuilder("register")
        .update()
        .where("register.id = :id",{id})
        .set(updateRegisterDto)
        .execute()
      }
    
      async remove(id: number) {
        return await this.repository.softDelete(id)
      }
}