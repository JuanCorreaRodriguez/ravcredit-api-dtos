var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ConektaCustomerInfoDto } from './ConektaCustomerInfoDto.js';
import { ConektaChannelDto } from './ConektaChannelDto.js';
import { ConektaChargesDto } from './ConektaChargesDto.js';
import { ConektaLineItemsDto } from './ConektaLineItemsDto.js';
import { ConektaCheckoutDto } from './ConektaCheckoutDto.js';
export class ConektaOrderDto {
    livemode;
    amount;
    currency;
    payment_status;
    amount_refunded;
    customer_info;
    shipping_contact;
    channel;
    fiscal_entity;
    object;
    id;
    metadata;
    is_refundable;
    created_at;
    updated_at;
    checkout;
    is_button_premia;
    line_items;
    shipping_lines;
    tax_lines;
    discount_lines;
    charges;
}
__decorate([
    IsBoolean()
], ConektaOrderDto.prototype, "livemode", void 0);
__decorate([
    IsNumber()
], ConektaOrderDto.prototype, "amount", void 0);
__decorate([
    IsString()
], ConektaOrderDto.prototype, "currency", void 0);
__decorate([
    IsString()
], ConektaOrderDto.prototype, "payment_status", void 0);
__decorate([
    IsNumber()
], ConektaOrderDto.prototype, "amount_refunded", void 0);
__decorate([
    ValidateNested(),
    Type(() => ConektaCustomerInfoDto)
], ConektaOrderDto.prototype, "customer_info", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaOrderDto.prototype, "shipping_contact", void 0);
__decorate([
    ValidateNested(),
    Type(() => ConektaChannelDto)
], ConektaOrderDto.prototype, "channel", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaOrderDto.prototype, "fiscal_entity", void 0);
__decorate([
    IsString()
], ConektaOrderDto.prototype, "object", void 0);
__decorate([
    IsString()
], ConektaOrderDto.prototype, "id", void 0);
__decorate([
    IsObject()
], ConektaOrderDto.prototype, "metadata", void 0);
__decorate([
    IsBoolean()
], ConektaOrderDto.prototype, "is_refundable", void 0);
__decorate([
    IsNumber()
], ConektaOrderDto.prototype, "created_at", void 0);
__decorate([
    IsNumber()
], ConektaOrderDto.prototype, "updated_at", void 0);
__decorate([
    ValidateNested(),
    Type(() => ConektaCheckoutDto)
], ConektaOrderDto.prototype, "checkout", void 0);
__decorate([
    IsBoolean()
], ConektaOrderDto.prototype, "is_button_premia", void 0);
__decorate([
    ValidateNested(),
    Type(() => ConektaLineItemsDto)
], ConektaOrderDto.prototype, "line_items", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaOrderDto.prototype, "shipping_lines", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaOrderDto.prototype, "tax_lines", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaOrderDto.prototype, "discount_lines", void 0);
__decorate([
    ValidateNested(),
    Type(() => ConektaChargesDto)
], ConektaOrderDto.prototype, "charges", void 0);
