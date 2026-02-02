var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsBoolean, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ConektaLineItemDto } from './ConektaLineItemDto.js';
export class ConektaLineItemsDto {
    object;
    has_more;
    total;
    data;
}
__decorate([
    IsString()
], ConektaLineItemsDto.prototype, "object", void 0);
__decorate([
    IsBoolean()
], ConektaLineItemsDto.prototype, "has_more", void 0);
__decorate([
    IsNumber()
], ConektaLineItemsDto.prototype, "total", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => ConektaLineItemDto)
], ConektaLineItemsDto.prototype, "data", void 0);
