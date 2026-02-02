var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PassportProviders } from './PassportDto.js';
import { PassportReferenceDataDto } from './PassportReferenceDataDto.js';
export class CreatePassportDto {
    type;
    data;
    references;
}
__decorate([
    IsString()
], CreatePassportDto.prototype, "type", void 0);
__decorate([
    Type(() => PassportReferenceDataDto),
    ValidateNested({ each: true })
], CreatePassportDto.prototype, "data", void 0);
__decorate([
    IsOptional(),
    Type(() => PassportProviders),
    ValidateNested({ each: true })
], CreatePassportDto.prototype, "references", void 0);
