import { IsOptional, IsString, IsEmail, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Geçerli bir email girin' })
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Password en az 6 karakter olmalı' })
  password?: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsString()
  profile?: string;
}
