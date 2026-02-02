import {PartialType} from "@nestjs/mapped-types";
import {Transform} from "class-transformer";
import {IsEnum, IsNumber, IsOptional, IsString, MinLength} from 'class-validator';
import {eRoles} from "ravcredit-core";

export class UserDto {

    @IsString()
    @IsOptional()
    id: string = "";

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    username: string = "";

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    name: string = "";

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    password: string = "";

    @Transform(({value}) => value.trim())
    @IsString()
    @IsEnum(eRoles)
    role: eRoles = eRoles.User

    @IsNumber()
    @IsOptional()
    createdAt?: number

    @IsNumber()
    @IsOptional()
    lastLogin: number = new Date().getTime();
}

export class UpdateUserDto extends PartialType(UserDto) {
}
