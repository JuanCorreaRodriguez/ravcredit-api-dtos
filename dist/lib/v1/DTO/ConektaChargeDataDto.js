var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ConektaChannelDto } from './ConektaChannelDto.js';
import { ConektaPaymentMethodDto } from './ConektaPaymentMethodDto.js';
export class ConektaChargeDataDto {
    id;
    livemode;
    created_at;
    currency;
    failure_code;
    failure_message;
    channel;
    payment_method;
    object;
    device_fingerprint;
    description;
    is_refundable;
    reference_id;
    status;
    amount;
    paid_at;
    customer_id;
    order_id;
    is_button_premia;
    refunds;
}
__decorate([
    IsString()
], ConektaChargeDataDto.prototype, "id", void 0);
__decorate([
    IsBoolean()
], ConektaChargeDataDto.prototype, "livemode", void 0);
__decorate([
    IsNumber()
], ConektaChargeDataDto.prototype, "created_at", void 0);
__decorate([
    IsString()
], ConektaChargeDataDto.prototype, "currency", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaChargeDataDto.prototype, "failure_code", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaChargeDataDto.prototype, "failure_message", void 0);
__decorate([
    ValidateNested(),
    Type(() => ConektaChannelDto)
], ConektaChargeDataDto.prototype, "channel", void 0);
__decorate([
    ValidateNested(),
    Type(() => ConektaPaymentMethodDto)
], ConektaChargeDataDto.prototype, "payment_method", void 0);
__decorate([
    IsString()
], ConektaChargeDataDto.prototype, "object", void 0);
__decorate([
    IsString()
], ConektaChargeDataDto.prototype, "device_fingerprint", void 0);
__decorate([
    IsString()
], ConektaChargeDataDto.prototype, "description", void 0);
__decorate([
    IsBoolean()
], ConektaChargeDataDto.prototype, "is_refundable", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaChargeDataDto.prototype, "reference_id", void 0);
__decorate([
    IsString()
], ConektaChargeDataDto.prototype, "status", void 0);
__decorate([
    IsNumber()
], ConektaChargeDataDto.prototype, "amount", void 0);
__decorate([
    IsNumber()
], ConektaChargeDataDto.prototype, "paid_at", void 0);
__decorate([
    IsString()
], ConektaChargeDataDto.prototype, "customer_id", void 0);
__decorate([
    IsString()
], ConektaChargeDataDto.prototype, "order_id", void 0);
__decorate([
    IsBoolean()
], ConektaChargeDataDto.prototype, "is_button_premia", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaChargeDataDto.prototype, "refunds", void 0);
