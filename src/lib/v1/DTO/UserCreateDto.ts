import {IsEnum, IsOptional, IsString, MinLength, IsNumber} from 'class-validator';
import {eRoles} from 'ravcredit-lib';
import { Transform } from "class-transformer";

export class UserCreateDto {

  @IsString()
  @IsOptional()
    // @IsUUID()
  id: string;

  @Transform(({value}) => value.trim())
  @IsString()
  @MinLength(1)
  username: string;

  @Transform(({value}) => value.trim())
  @IsString()
  @MinLength(1)
  name: string;

  @Transform(({value}) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;

  @Transform(({value}) => value.trim())
  @IsString()
  @IsEnum(eRoles)
  role: eRoles

  @IsNumber()
  @IsOptional()
  createdAt: number

  @IsNumber()
  @IsOptional()
  lastLogin: number

}
