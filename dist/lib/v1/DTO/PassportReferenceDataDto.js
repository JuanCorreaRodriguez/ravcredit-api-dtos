var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PassportAdditionalDto } from './PassportAdditionalDto.js';
export class PassportReferenceDataDto {
    name;
    email;
    amount;
    expirationDate;
    additional;
}
__decorate([
    IsString()
], PassportReferenceDataDto.prototype, "name", void 0);
__decorate([
    IsString()
], PassportReferenceDataDto.prototype, "email", void 0);
__decorate([
    IsNumber()
], PassportReferenceDataDto.prototype, "amount", void 0);
__decorate([
    IsString(),
    IsOptional()
], PassportReferenceDataDto.prototype, "expirationDate", void 0);
__decorate([
    Type(() => PassportAdditionalDto),
    ValidateNested({ each: true })
], PassportReferenceDataDto.prototype, "additional", void 0);
