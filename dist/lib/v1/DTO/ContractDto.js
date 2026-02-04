var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Validate, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { AddressDto } from './AddressDto.js';
import { DeviceDto } from './DeviceDto.js';
import { FinancialDto } from './FinancialDto.js';
import { IsStringOrNumber } from "../core/Validators.js";
import { CompanyDto } from './CompanyDto.js';
import { oAssetDto } from './AssetDto.js';
import { eContractStatus, eVerificationStep } from "ravcredit-core";
import { MediaIdentityDto } from "./ClientDto.js";
export class ContractDto {
    id;
    client;
    address;
    device;
    financial;
    createdAt;
    lastPayment;
    by;
    status;
    active;
    dynamicAccount;
}
__decorate([
    IsString()
], ContractDto.prototype, "id", void 0);
__decorate([
    IsString()
], ContractDto.prototype, "client", void 0);
__decorate([
    ValidateNested(),
    Type(() => AddressDto)
], ContractDto.prototype, "address", void 0);
__decorate([
    ValidateNested(),
    Type(() => DeviceDto)
], ContractDto.prototype, "device", void 0);
__decorate([
    ValidateNested(),
    Type(() => FinancialDto)
], ContractDto.prototype, "financial", void 0);
__decorate([
    IsNumber()
], ContractDto.prototype, "createdAt", void 0);
__decorate([
    IsNumber()
], ContractDto.prototype, "lastPayment", void 0);
__decorate([
    IsString()
], ContractDto.prototype, "by", void 0);
__decorate([
    IsBoolean(),
    IsOptional()
], ContractDto.prototype, "status", void 0);
__decorate([
    IsBoolean()
], ContractDto.prototype, "active", void 0);
__decorate([
    IsOptional(),
    Validate(IsStringOrNumber)
], ContractDto.prototype, "dynamicAccount", void 0);
export class ContractV2Dto extends ContractDto {
    company = new CompanyDto();
    contract_status = eContractStatus.APPROVED; // Or your default enum value
    asset = new oAssetDto();
    amortization_id;
    mediaSelfie = new MediaIdentityDto();
    mediaAddress = new MediaIdentityDto();
    mediaWithDevice = new MediaIdentityDto();
    mediaSelfieBack = new MediaIdentityDto();
    identityVerification = eVerificationStep.IDLE;
}
__decorate([
    ValidateNested(),
    Type(() => CompanyDto)
], ContractV2Dto.prototype, "company", void 0);
__decorate([
    IsEnum(eContractStatus)
], ContractV2Dto.prototype, "contract_status", void 0);
__decorate([
    ValidateNested(),
    Type(() => oAssetDto)
], ContractV2Dto.prototype, "asset", void 0);
__decorate([
    IsOptional(),
    IsString()
], ContractV2Dto.prototype, "amortization_id", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => MediaIdentityDto)
], ContractV2Dto.prototype, "mediaSelfie", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => MediaIdentityDto)
], ContractV2Dto.prototype, "mediaAddress", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => MediaIdentityDto)
], ContractV2Dto.prototype, "mediaWithDevice", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => MediaIdentityDto)
], ContractV2Dto.prototype, "mediaSelfieBack", void 0);
__decorate([
    IsOptional(),
    IsEnum(eVerificationStep)
], ContractV2Dto.prototype, "identityVerification", void 0);
export class ContractDto2 {
    id;
    client;
    address;
    device;
    financial;
    createdAt;
    lastPayment;
    photo;
    by;
    active = true;
}
__decorate([
    Transform(({ value }) => value.trim()),
    IsString()
], ContractDto2.prototype, "id", void 0);
__decorate([
    Transform(({ value }) => value.trim()),
    IsString()
], ContractDto2.prototype, "client", void 0);
__decorate([
    ValidateNested({ each: true }),
    Type(() => AddressDto)
], ContractDto2.prototype, "address", void 0);
__decorate([
    ValidateNested({ each: true }),
    Type(() => DeviceDto)
], ContractDto2.prototype, "device", void 0);
__decorate([
    Type(() => FinancialDto),
    ValidateNested({ each: true })
], ContractDto2.prototype, "financial", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], ContractDto2.prototype, "createdAt", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], ContractDto2.prototype, "lastPayment", void 0);
__decorate([
    IsString(),
    IsOptional()
], ContractDto2.prototype, "photo", void 0);
__decorate([
    IsString()
], ContractDto2.prototype, "by", void 0);
__decorate([
    IsOptional(),
    IsBoolean()
], ContractDto2.prototype, "active", void 0);
export class PaymentVerificationDTO {
    id;
}
__decorate([
    IsString()
], PaymentVerificationDTO.prototype, "id", void 0);
