var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
export class ConektaResObjChargePaidDto {
    id;
    livemode;
    created_at;
    currency;
    payment_method;
    object;
    description;
    status;
    amount;
    paid_at;
    fee;
    customer_id;
    order_id;
}
__decorate([
    IsString()
], ConektaResObjChargePaidDto.prototype, "id", void 0);
__decorate([
    IsBoolean()
], ConektaResObjChargePaidDto.prototype, "livemode", void 0);
__decorate([
    IsNumber()
], ConektaResObjChargePaidDto.prototype, "created_at", void 0);
__decorate([
    IsString()
], ConektaResObjChargePaidDto.prototype, "currency", void 0);
__decorate([
    IsObject()
], ConektaResObjChargePaidDto.prototype, "payment_method", void 0);
__decorate([
    IsString()
], ConektaResObjChargePaidDto.prototype, "object", void 0);
__decorate([
    IsString()
], ConektaResObjChargePaidDto.prototype, "description", void 0);
__decorate([
    IsString()
], ConektaResObjChargePaidDto.prototype, "status", void 0);
__decorate([
    IsNumber()
], ConektaResObjChargePaidDto.prototype, "amount", void 0);
__decorate([
    IsNumber()
], ConektaResObjChargePaidDto.prototype, "paid_at", void 0);
__decorate([
    IsNumber()
], ConektaResObjChargePaidDto.prototype, "fee", void 0);
__decorate([
    IsString()
], ConektaResObjChargePaidDto.prototype, "customer_id", void 0);
__decorate([
    IsString()
], ConektaResObjChargePaidDto.prototype, "order_id", void 0);
export class ConektaResObjOrderPaidDto {
    livemode;
    amount;
    currency;
    payment_status;
    amount_refunded;
    customer_info;
    object;
    id;
    metadata;
    is_refundable;
    created_at;
    updated_at;
    line_items;
    charges;
}
__decorate([
    IsBoolean()
], ConektaResObjOrderPaidDto.prototype, "livemode", void 0);
__decorate([
    IsNumber()
], ConektaResObjOrderPaidDto.prototype, "amount", void 0);
__decorate([
    IsString()
], ConektaResObjOrderPaidDto.prototype, "currency", void 0);
__decorate([
    IsString()
], ConektaResObjOrderPaidDto.prototype, "payment_status", void 0);
__decorate([
    IsNumber()
], ConektaResObjOrderPaidDto.prototype, "amount_refunded", void 0);
__decorate([
    IsObject()
], ConektaResObjOrderPaidDto.prototype, "customer_info", void 0);
__decorate([
    IsString()
], ConektaResObjOrderPaidDto.prototype, "object", void 0);
__decorate([
    IsString()
], ConektaResObjOrderPaidDto.prototype, "id", void 0);
__decorate([
    IsObject()
], ConektaResObjOrderPaidDto.prototype, "metadata", void 0);
__decorate([
    IsBoolean()
], ConektaResObjOrderPaidDto.prototype, "is_refundable", void 0);
__decorate([
    IsNumber()
], ConektaResObjOrderPaidDto.prototype, "created_at", void 0);
__decorate([
    IsNumber()
], ConektaResObjOrderPaidDto.prototype, "updated_at", void 0);
__decorate([
    IsObject()
], ConektaResObjOrderPaidDto.prototype, "line_items", void 0);
__decorate([
    IsObject()
], ConektaResObjOrderPaidDto.prototype, "charges", void 0);
export class ConektaResPrevAttrDto {
    status;
}
__decorate([
    IsString()
], ConektaResPrevAttrDto.prototype, "status", void 0);
export class ConektaResDataDto {
    object;
    previous_attributes;
}
__decorate([
    ValidateNested(),
    Type(() => ConektaResObjChargePaidDto)
], ConektaResDataDto.prototype, "object", void 0);
__decorate([
    ValidateNested(),
    Type(() => ConektaResPrevAttrDto)
], ConektaResDataDto.prototype, "previous_attributes", void 0);
export class ConektaResDto {
    client_id;
    data;
    livemode;
    webhook_status;
    webhook_logs;
    id;
    object;
    type; // Assuming eConektaRes is a string
    created_at;
}
__decorate([
    IsOptional(),
    IsString()
], ConektaResDto.prototype, "client_id", void 0);
__decorate([
    ValidateNested(),
    Type(() => ConektaResDataDto)
], ConektaResDto.prototype, "data", void 0);
__decorate([
    IsBoolean()
], ConektaResDto.prototype, "livemode", void 0);
__decorate([
    IsString()
], ConektaResDto.prototype, "webhook_status", void 0);
__decorate([
    IsArray(),
    IsOptional()
], ConektaResDto.prototype, "webhook_logs", void 0);
__decorate([
    IsString()
], ConektaResDto.prototype, "id", void 0);
__decorate([
    IsString()
], ConektaResDto.prototype, "object", void 0);
__decorate([
    IsString()
], ConektaResDto.prototype, "type", void 0);
__decorate([
    IsNumber()
], ConektaResDto.prototype, "created_at", void 0);
export class ConektaSourcesDto {
    type;
    expires_at;
}
__decorate([
    IsString()
], ConektaSourcesDto.prototype, "type", void 0);
__decorate([
    IsNumber()
], ConektaSourcesDto.prototype, "expires_at", void 0);
export class ConektaDto {
    name;
    email;
    phone;
    payment_sources;
}
__decorate([
    IsString()
], ConektaDto.prototype, "name", void 0);
__decorate([
    IsString()
], ConektaDto.prototype, "email", void 0);
__decorate([
    IsString()
], ConektaDto.prototype, "phone", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => ConektaSourcesDto)
], ConektaDto.prototype, "payment_sources", void 0);
export class OxxoRecurrentSourcesDataDto {
    id;
    object;
    type;
    provider;
    reference;
    barcode;
    barcode_url;
    expires_at;
    created_at;
    parent_id;
}
__decorate([
    IsString()
], OxxoRecurrentSourcesDataDto.prototype, "id", void 0);
__decorate([
    IsString()
], OxxoRecurrentSourcesDataDto.prototype, "object", void 0);
__decorate([
    IsString()
], OxxoRecurrentSourcesDataDto.prototype, "type", void 0);
__decorate([
    IsString()
], OxxoRecurrentSourcesDataDto.prototype, "provider", void 0);
__decorate([
    IsString()
], OxxoRecurrentSourcesDataDto.prototype, "reference", void 0);
__decorate([
    IsString()
], OxxoRecurrentSourcesDataDto.prototype, "barcode", void 0);
__decorate([
    IsString()
], OxxoRecurrentSourcesDataDto.prototype, "barcode_url", void 0);
__decorate([
    IsNumber()
], OxxoRecurrentSourcesDataDto.prototype, "expires_at", void 0);
__decorate([
    IsNumber()
], OxxoRecurrentSourcesDataDto.prototype, "created_at", void 0);
__decorate([
    IsString()
], OxxoRecurrentSourcesDataDto.prototype, "parent_id", void 0);
export class OxxoRecurrentSourcesDto {
    object;
    has_more;
    total;
    data;
}
__decorate([
    IsString()
], OxxoRecurrentSourcesDto.prototype, "object", void 0);
__decorate([
    IsBoolean()
], OxxoRecurrentSourcesDto.prototype, "has_more", void 0);
__decorate([
    IsNumber()
], OxxoRecurrentSourcesDto.prototype, "total", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => OxxoRecurrentSourcesDataDto)
], OxxoRecurrentSourcesDto.prototype, "data", void 0);
export class ConektaRecurrentDto {
    corporate;
    created_at;
    livemode;
    name;
    email;
    phone;
    id;
    object;
    custom_id;
    payment_sources;
}
__decorate([
    IsBoolean()
], ConektaRecurrentDto.prototype, "corporate", void 0);
__decorate([
    IsNumber()
], ConektaRecurrentDto.prototype, "created_at", void 0);
__decorate([
    IsBoolean()
], ConektaRecurrentDto.prototype, "livemode", void 0);
__decorate([
    IsString()
], ConektaRecurrentDto.prototype, "name", void 0);
__decorate([
    IsString()
], ConektaRecurrentDto.prototype, "email", void 0);
__decorate([
    IsString()
], ConektaRecurrentDto.prototype, "phone", void 0);
__decorate([
    IsString()
], ConektaRecurrentDto.prototype, "id", void 0);
__decorate([
    IsString()
], ConektaRecurrentDto.prototype, "object", void 0);
__decorate([
    IsString()
], ConektaRecurrentDto.prototype, "custom_id", void 0);
__decorate([
    ValidateNested(),
    Type(() => OxxoRecurrentSourcesDto)
], ConektaRecurrentDto.prototype, "payment_sources", void 0);
/**
 *  Constants
 *  */
export const cConektaResPrevAttr = {
    status: '',
};
export const cConektaResObjChargePaid = {
    id: '',
    livemode: false,
    created_at: 0,
    currency: '',
    payment_method: {},
    object: '',
    description: '',
    status: '',
    amount: 0,
    paid_at: 0,
    fee: 0,
    customer_id: '',
    order_id: '',
};
export const cConektaResData = {
    object: cConektaResObjChargePaid,
    previous_attributes: cConektaResPrevAttr,
};
