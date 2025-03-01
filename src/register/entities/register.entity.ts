import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("register")
export class Register {
    @PrimaryGeneratedColumn()
    id:number 

    @Column()
    name:string

    @Column({unique:true})
    email:string

    @Column()
    password:string
}

