var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsDateString, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
/**
 * Credit DTO
 * */
export class IDCCreditPropertiesDTO {
    start_date;
    principal_disbursed;
    expected_disbursed;
    amount_commission_opening;
}
__decorate([
    IsString()
], IDCCreditPropertiesDTO.prototype, "start_date", void 0);
__decorate([
    IsNumber()
], IDCCreditPropertiesDTO.prototype, "principal_disbursed", void 0);
__decorate([
    IsNumber()
], IDCCreditPropertiesDTO.prototype, "expected_disbursed", void 0);
__decorate([
    IsNumber()
], IDCCreditPropertiesDTO.prototype, "amount_commission_opening", void 0);
export class IDCCreditConfigDTO {
    contract;
    credit_type;
    interest_rate;
    installments;
    periodicity;
    interest_base;
    commission_opening;
    financed_amount;
    interest_arrears;
}
__decorate([
    IsString()
], IDCCreditConfigDTO.prototype, "contract", void 0);
__decorate([
    IsString()
], IDCCreditConfigDTO.prototype, "credit_type", void 0);
__decorate([
    IsNumber()
], IDCCreditConfigDTO.prototype, "interest_rate", void 0);
__decorate([
    IsNumber()
], IDCCreditConfigDTO.prototype, "installments", void 0);
__decorate([
    IsString()
], IDCCreditConfigDTO.prototype, "periodicity", void 0);
__decorate([
    IsString()
], IDCCreditConfigDTO.prototype, "interest_base", void 0);
__decorate([
    IsNumber()
], IDCCreditConfigDTO.prototype, "commission_opening", void 0);
__decorate([
    IsNumber()
], IDCCreditConfigDTO.prototype, "financed_amount", void 0);
__decorate([
    IsNumber()
], IDCCreditConfigDTO.prototype, "interest_arrears", void 0);
export class IDCCreditDTO {
    id;
    group;
    company;
    client;
    created_at;
    currency;
    status;
    properties;
    product;
    enabled;
    config;
    amount;
    type;
    identifier;
    start_at;
}
__decorate([
    IsNumber()
], IDCCreditDTO.prototype, "id", void 0);
__decorate([
    IsNumber()
], IDCCreditDTO.prototype, "group", void 0);
__decorate([
    IsNumber()
], IDCCreditDTO.prototype, "company", void 0);
__decorate([
    IsNumber()
], IDCCreditDTO.prototype, "client", void 0);
__decorate([
    IsDateString()
], IDCCreditDTO.prototype, "created_at", void 0);
__decorate([
    IsString()
], IDCCreditDTO.prototype, "currency", void 0);
__decorate([
    IsString()
], IDCCreditDTO.prototype, "status", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCCreditPropertiesDTO)
], IDCCreditDTO.prototype, "properties", void 0);
__decorate([
    IsNumber()
], IDCCreditDTO.prototype, "product", void 0);
__decorate([
    IsString()
], IDCCreditDTO.prototype, "enabled", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCCreditConfigDTO)
], IDCCreditDTO.prototype, "config", void 0);
__decorate([
    IsNumber()
], IDCCreditDTO.prototype, "amount", void 0);
__decorate([
    IsString()
], IDCCreditDTO.prototype, "type", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCCreditDTO.prototype, "identifier", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCCreditDTO.prototype, "start_at", void 0);
/* Credit payment */
export class IDCPaymentDto {
    operation;
    account;
    date;
    amount;
    external_id;
    dst_account;
    extras;
    reference;
}
__decorate([
    IsNumber()
], IDCPaymentDto.prototype, "operation", void 0);
__decorate([
    IsString()
], IDCPaymentDto.prototype, "account", void 0);
__decorate([
    IsString()
], IDCPaymentDto.prototype, "date", void 0);
__decorate([
    IsNumber()
], IDCPaymentDto.prototype, "amount", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCPaymentDto.prototype, "external_id", void 0);
__decorate([
    IsString()
], IDCPaymentDto.prototype, "dst_account", void 0);
__decorate([
    IsOptional(),
    IsObject()
], IDCPaymentDto.prototype, "extras", void 0);
__decorate([
    IsString()
], IDCPaymentDto.prototype, "reference", void 0);
