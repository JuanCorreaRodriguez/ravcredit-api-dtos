var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ConektaOrderDto } from './ConektaOrderDto.js';
export class ConektaOrdersResponseDto {
    next_page_url;
    previous_page_url;
    has_more;
    object;
    data;
}
__decorate([
    IsOptional(),
    IsString()
], ConektaOrdersResponseDto.prototype, "next_page_url", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaOrdersResponseDto.prototype, "previous_page_url", void 0);
__decorate([
    IsBoolean()
], ConektaOrdersResponseDto.prototype, "has_more", void 0);
__decorate([
    IsString()
], ConektaOrdersResponseDto.prototype, "object", void 0);
__decorate([
    IsArray(),
    ValidateNested(),
    Type(() => ConektaOrderDto)
], ConektaOrdersResponseDto.prototype, "data", void 0);
