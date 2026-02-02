var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BusinessDeadlineDto } from "./BusinessDeadlineDto.js";
export class BusinessConfigDto {
    deadlines = [];
    downloadsClient = false;
    passportPaymentReference = false;
    dynamicPaymentReference = false;
    conektaPaymentReference = false;
    conektaPaymentLink = false;
    mobileVersion = "";
    adminVersion = "";
    mobileVersionPrev = "";
    apkUrl = "";
    version = "";
    apiVersion = "";
}
__decorate([
    IsArray(),
    Type(() => BusinessDeadlineDto),
    ValidateNested({ each: true })
], BusinessConfigDto.prototype, "deadlines", void 0);
__decorate([
    IsBoolean()
], BusinessConfigDto.prototype, "downloadsClient", void 0);
__decorate([
    IsBoolean(),
    IsOptional()
], BusinessConfigDto.prototype, "passportPaymentReference", void 0);
__decorate([
    IsBoolean(),
    IsOptional()
], BusinessConfigDto.prototype, "dynamicPaymentReference", void 0);
__decorate([
    IsBoolean(),
    IsOptional()
], BusinessConfigDto.prototype, "conektaPaymentReference", void 0);
__decorate([
    IsBoolean(),
    IsOptional()
], BusinessConfigDto.prototype, "conektaPaymentLink", void 0);
__decorate([
    IsOptional(),
    IsString()
], BusinessConfigDto.prototype, "mobileVersion", void 0);
__decorate([
    IsOptional(),
    IsString()
], BusinessConfigDto.prototype, "adminVersion", void 0);
__decorate([
    IsOptional(),
    IsString()
], BusinessConfigDto.prototype, "mobileVersionPrev", void 0);
__decorate([
    IsOptional(),
    IsString()
], BusinessConfigDto.prototype, "apkUrl", void 0);
__decorate([
    IsOptional(),
    IsString()
], BusinessConfigDto.prototype, "version", void 0);
__decorate([
    IsOptional(),
    IsString()
], BusinessConfigDto.prototype, "apiVersion", void 0);
