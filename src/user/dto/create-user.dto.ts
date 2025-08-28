
import { IsEmail, IsIn, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsIn(['admin', 'customer'])
    role: string; // e.g., 'admin', 'customer'
}
