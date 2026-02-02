var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { OrdCreateCusInfoDto } from './OrdCreateCusInfoDto.js';
import { Type } from "class-transformer";
import { OrdCreateChargeDto } from './OrdCreateChargeDto.js';
import { OrdCreatLineItemDto } from './OrdCreatLineItemDto.js';
export class ConektaOrdCreateDto {
    customer_info;
    charges;
    currency;
    line_items;
}
__decorate([
    ValidateNested(),
    Type(() => OrdCreateCusInfoDto)
], ConektaOrdCreateDto.prototype, "customer_info", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => OrdCreateChargeDto)
], ConektaOrdCreateDto.prototype, "charges", void 0);
__decorate([
    IsString()
], ConektaOrdCreateDto.prototype, "currency", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => OrdCreatLineItemDto)
], ConektaOrdCreateDto.prototype, "line_items", void 0);
