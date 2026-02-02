import { IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class AuthAdminDto {

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  username: string = "";

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string = "";
}

export class LoginFuncDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  password: string = "";
}

