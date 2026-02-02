var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsBoolean, IsOptional, IsString } from 'class-validator';
export class ConektaCustomerInfoDto {
    email;
    phone = '';
    name;
    corporate;
    customer_id;
    object;
    customer_custom_reference;
}
__decorate([
    IsString()
], ConektaCustomerInfoDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaCustomerInfoDto.prototype, "phone", void 0);
__decorate([
    IsString()
], ConektaCustomerInfoDto.prototype, "name", void 0);
__decorate([
    IsBoolean()
], ConektaCustomerInfoDto.prototype, "corporate", void 0);
__decorate([
    IsString()
], ConektaCustomerInfoDto.prototype, "customer_id", void 0);
__decorate([
    IsString()
], ConektaCustomerInfoDto.prototype, "object", void 0);
__decorate([
    IsOptional(),
    IsString()
], ConektaCustomerInfoDto.prototype, "customer_custom_reference", void 0);
