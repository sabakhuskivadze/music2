import { IsEmail, IsString } from "class-validator";
export class CreateRegisterDto {
    @IsString()
    name:string

    @IsString()
    @IsEmail()
    email:string

    @IsString()
    password:string
}
