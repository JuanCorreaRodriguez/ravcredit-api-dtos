var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PartialType } from "@nestjs/mapped-types";
import { Transform } from "class-transformer";
import { IsEnum, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { eRoles } from 'ravcredit-lib';
export class UserDto {
    id = "";
    username = "";
    name = "";
    password = "";
    role = eRoles.User;
    createdAt;
    lastLogin = new Date().getTime();
}
__decorate([
    IsString(),
    IsOptional()
], UserDto.prototype, "id", void 0);
__decorate([
    Transform(({ value }) => value.trim()),
    IsString(),
    MinLength(1)
], UserDto.prototype, "username", void 0);
__decorate([
    Transform(({ value }) => value.trim()),
    IsString(),
    MinLength(1)
], UserDto.prototype, "name", void 0);
__decorate([
    Transform(({ value }) => value.trim()),
    IsString(),
    MinLength(6)
], UserDto.prototype, "password", void 0);
__decorate([
    Transform(({ value }) => value.trim()),
    IsString(),
    IsEnum(eRoles)
], UserDto.prototype, "role", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UserDto.prototype, "createdAt", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UserDto.prototype, "lastLogin", void 0);
export class UpdateUserDto extends PartialType(UserDto) {
}
