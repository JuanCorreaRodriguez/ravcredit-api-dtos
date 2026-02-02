var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsNumber, IsOptional, IsString } from 'class-validator';
export class ConektaPaymentMethodDto {
    service_name;
    barcode_url;
    store;
    auth_code;
    object;
    type;
    expires_at;
    store_name;
    reference;
    cashier_id;
    clabe;
}
__decorate([
    IsString()
], ConektaPaymentMethodDto.prototype, "service_name", void 0);
__decorate([
    IsString()
], ConektaPaymentMethodDto.prototype, "barcode_url", void 0);
__decorate([
    IsString()
], ConektaPaymentMethodDto.prototype, "store", void 0);
__decorate([
    IsNumber()
], ConektaPaymentMethodDto.prototype, "auth_code", void 0);
__decorate([
    IsString()
], ConektaPaymentMethodDto.prototype, "object", void 0);
__decorate([
    IsString()
], ConektaPaymentMethodDto.prototype, "type", void 0);
__decorate([
    IsNumber()
], ConektaPaymentMethodDto.prototype, "expires_at", void 0);
__decorate([
    IsString()
], ConektaPaymentMethodDto.prototype, "store_name", void 0);
__decorate([
    IsString()
], ConektaPaymentMethodDto.prototype, "reference", void 0);
__decorate([
    IsString()
], ConektaPaymentMethodDto.prototype, "cashier_id", void 0);
__decorate([
    IsOptional()
], ConektaPaymentMethodDto.prototype, "clabe", void 0);
