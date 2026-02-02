var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsEnum, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { Transform } from "class-transformer";
import { eRoles } from "ravcredit-core";
export class UserCreateDto {
    // @IsUUID()
    id;
    username;
    name;
    password;
    role;
    createdAt;
    lastLogin;
}
__decorate([
    IsString(),
    IsOptional()
    // @IsUUID()
], UserCreateDto.prototype, "id", void 0);
__decorate([
    Transform(({ value }) => value.trim()),
    IsString(),
    MinLength(1)
], UserCreateDto.prototype, "username", void 0);
__decorate([
    Transform(({ value }) => value.trim()),
    IsString(),
    MinLength(1)
], UserCreateDto.prototype, "name", void 0);
__decorate([
    Transform(({ value }) => value.trim()),
    IsString(),
    MinLength(6)
], UserCreateDto.prototype, "password", void 0);
__decorate([
    Transform(({ value }) => value.trim()),
    IsString(),
    IsEnum(eRoles)
], UserCreateDto.prototype, "role", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UserCreateDto.prototype, "createdAt", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UserCreateDto.prototype, "lastLogin", void 0);
