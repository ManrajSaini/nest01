import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UserDTO {
    @IsEmail()
    email: string;

    @IsNumber()
    age: string;

    @IsString()
    name: number;

    @IsOptional()
    @IsString()
    country: number;
}