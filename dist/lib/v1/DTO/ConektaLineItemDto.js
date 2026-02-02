var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
export class ConektaLineItemDto {
    name;
    description;
    unit_price;
    quantity;
    sku;
    tags;
    brand;
    type;
    object;
    id;
    parent_id;
    metadata;
    antifraud_info;
}
__decorate([
    IsString()
], ConektaLineItemDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaLineItemDto.prototype, "description", void 0);
__decorate([
    IsNumber()
], ConektaLineItemDto.prototype, "unit_price", void 0);
__decorate([
    IsNumber()
], ConektaLineItemDto.prototype, "quantity", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaLineItemDto.prototype, "sku", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true })
], ConektaLineItemDto.prototype, "tags", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaLineItemDto.prototype, "brand", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaLineItemDto.prototype, "type", void 0);
__decorate([
    IsString()
], ConektaLineItemDto.prototype, "object", void 0);
__decorate([
    IsString()
], ConektaLineItemDto.prototype, "id", void 0);
__decorate([
    IsString()
], ConektaLineItemDto.prototype, "parent_id", void 0);
__decorate([
    IsObject()
], ConektaLineItemDto.prototype, "metadata", void 0);
__decorate([
    IsObject()
], ConektaLineItemDto.prototype, "antifraud_info", void 0);
