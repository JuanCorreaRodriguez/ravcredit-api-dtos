var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { AmortizationStatus } from "ravcredit-core";
export class AmortizationItemDto {
    installmentNumber = 0;
    id = "";
    dueDate = "";
    initialBalance = 0;
    expectedPayment = 0;
    actualPayment = 0;
    principalDue = 0;
    principalPaid = 0;
    expectedPrincipalTax = 0;
    paidPrincipalTax = 0;
    interest = 0;
    interestPaid = 0;
    expectedInterestTax = 0;
    paidInterestTax = 0;
    totalPayment = 0;
    capital = 0;
    finalBalance = 0;
    status = AmortizationStatus.PENDING;
}
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "installmentNumber", void 0);
__decorate([
    IsString()
], AmortizationItemDto.prototype, "id", void 0);
__decorate([
    IsString()
], AmortizationItemDto.prototype, "dueDate", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "initialBalance", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "expectedPayment", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "actualPayment", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "principalDue", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "principalPaid", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "expectedPrincipalTax", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "paidPrincipalTax", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "interest", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "interestPaid", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "expectedInterestTax", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "paidInterestTax", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "totalPayment", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "capital", void 0);
__decorate([
    IsNumber()
], AmortizationItemDto.prototype, "finalBalance", void 0);
__decorate([
    IsEnum(AmortizationStatus)
], AmortizationItemDto.prototype, "status", void 0);
export class AmortizationDto {
    id = "";
    client_id = "";
    items = [];
}
__decorate([
    IsString(),
    IsOptional()
], AmortizationDto.prototype, "id", void 0);
__decorate([
    IsString()
], AmortizationDto.prototype, "client_id", void 0);
__decorate([
    IsArray()
], AmortizationDto.prototype, "items", void 0);
