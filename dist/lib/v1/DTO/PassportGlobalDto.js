var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { CreatePassportDto } from './PassportCreateDto.js';
import { ContractDto } from './ContractDto.js';
export class GlobalPassportDTO {
    passport;
    contract;
    date;
}
__decorate([
    Type(() => CreatePassportDto),
    ValidateNested({ each: true })
], GlobalPassportDTO.prototype, "passport", void 0);
__decorate([
    Type(() => ContractDto),
    ValidateNested({ each: true })
], GlobalPassportDTO.prototype, "contract", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], GlobalPassportDTO.prototype, "date", void 0);
