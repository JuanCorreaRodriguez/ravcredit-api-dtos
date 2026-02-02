var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsBoolean, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CustomerInfoDto } from './CustomerDto.js';
export class LineItemsDto {
    name;
    unit_price;
    quantity;
}
__decorate([
    IsString()
], LineItemsDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], LineItemsDto.prototype, "unit_price", void 0);
__decorate([
    IsNumber()
], LineItemsDto.prototype, "quantity", void 0);
export class OrderTemplateDto {
    line_items;
    currency;
    customer_info;
}
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => LineItemsDto)
], OrderTemplateDto.prototype, "line_items", void 0);
__decorate([
    IsString() // Assuming eCurrencies is a string
], OrderTemplateDto.prototype, "currency", void 0);
__decorate([
    ValidateNested(),
    Type(() => CustomerInfoDto)
], OrderTemplateDto.prototype, "customer_info", void 0);
export class MetadataDto {
    datos_extra;
}
__decorate([
    IsString()
], MetadataDto.prototype, "datos_extra", void 0);
export class PaymentMethodsDto {
    type;
    expires_at;
}
__decorate([
    IsString()
], PaymentMethodsDto.prototype, "type", void 0);
__decorate([
    IsNumber()
], PaymentMethodsDto.prototype, "expires_at", void 0);
export class PaymentChargesDto {
    payment_method;
}
__decorate([
    ValidateNested(),
    Type(() => PaymentMethodsDto)
], PaymentChargesDto.prototype, "payment_method", void 0);
export class PaymentOrderObjectDto {
    currency;
    customer_info;
    line_items;
    metadata;
    charges;
}
__decorate([
    IsString() // Assuming eCurrencies is a string
], PaymentOrderObjectDto.prototype, "currency", void 0);
__decorate([
    ValidateNested(),
    Type(() => CustomerInfoDto)
], PaymentOrderObjectDto.prototype, "customer_info", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => LineItemsDto)
], PaymentOrderObjectDto.prototype, "line_items", void 0);
__decorate([
    ValidateNested(),
    Type(() => MetadataDto)
], PaymentOrderObjectDto.prototype, "metadata", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => PaymentChargesDto)
], PaymentOrderObjectDto.prototype, "charges", void 0);
export class PaymentLinkObjectDto {
    name;
    type;
    recurrent;
    expired_at;
    allowed_payment_methods;
    needs_shipping_contact;
    order_template;
}
__decorate([
    IsString()
], PaymentLinkObjectDto.prototype, "name", void 0);
__decorate([
    IsString()
], PaymentLinkObjectDto.prototype, "type", void 0);
__decorate([
    IsBoolean()
], PaymentLinkObjectDto.prototype, "recurrent", void 0);
__decorate([
    IsNumber()
], PaymentLinkObjectDto.prototype, "expired_at", void 0);
__decorate([
    IsArray(),
    IsString({ each: true })
], PaymentLinkObjectDto.prototype, "allowed_payment_methods", void 0);
__decorate([
    IsBoolean()
], PaymentLinkObjectDto.prototype, "needs_shipping_contact", void 0);
__decorate([
    ValidateNested(),
    Type(() => OrderTemplateDto)
], PaymentLinkObjectDto.prototype, "order_template", void 0);
//
// export interface iLineItems {
//   name: string; // "Red Wine",
//   unit_price: number; // 1000,
//   quantity: number; // 10
// }
//
// export interface iOrderTemplate {
//   line_items: iLineItems[],
//   currency: eCurrencies// "MXN",
//   customer_info: CustomerInfoDto
// }
//
// export interface iMetadata {
//   datos_extra: string;
// }
//
// export interface iPaymentMethods {
//   type: string;
//   expires_at: number;
// }
//
// export interface iCharges {
//   payment_method: iPaymentMethods;
// }
//
// export interface iPaymentOrderObject {
//   currency: eCurrencies;// "MXN",
//   customer_info: CustomerInfoDto;
//   line_items: iLineItems[];
//   metadata: iMetadata;
//   charges: iCharges[];
// }
//
// export interface iPaymentLinkObject {
//   name: string; // "Payment Link Name",
//   type: string; // "PaymentLink",
//   recurrent: boolean; // false,
//   expired_at: number; // 1597635007,
//   allowed_payment_methods: string[];// ["cash", "card", "bank_transfer"],
//   needs_shipping_contact: boolean;// false,
//   order_template: iOrderTemplate;
// }
// Example CustomerInfo
// {
//   "customer_id": "cus_2nYSnP4EDiREgGte9"
// }
