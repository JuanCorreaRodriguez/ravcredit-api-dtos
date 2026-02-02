var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Validate, ValidateNested } from 'class-validator';
import { ScoreDto, ScoreNoHitDto } from "./ScoreDto.js";
import { eIdentityTypes, eVerificationStep } from 'ravcredit-lib';
import { IsStringOrNumber } from '../core/Validators.js';
export class ClientPaymentsDto {
    date = 0;
    dayPayment = 0;
    amount = 0;
    id = "";
}
__decorate([
    IsNumber()
], ClientPaymentsDto.prototype, "date", void 0);
__decorate([
    IsNumber()
], ClientPaymentsDto.prototype, "dayPayment", void 0);
__decorate([
    IsNumber()
], ClientPaymentsDto.prototype, "amount", void 0);
__decorate([
    IsString()
], ClientPaymentsDto.prototype, "id", void 0);
export class UserReferenceDto {
    name = "";
    phone = "";
    relationship = "";
}
__decorate([
    IsString()
], UserReferenceDto.prototype, "name", void 0);
__decorate([
    IsString()
], UserReferenceDto.prototype, "phone", void 0);
__decorate([
    IsString()
], UserReferenceDto.prototype, "relationship", void 0);
export class ClientReferencesDto {
    date;
    amount;
    id;
    url;
    type;
}
__decorate([
    IsOptional(),
    IsNumber()
], ClientReferencesDto.prototype, "date", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], ClientReferencesDto.prototype, "amount", void 0);
__decorate([
    IsString()
], ClientReferencesDto.prototype, "id", void 0);
__decorate([
    IsOptional(),
    IsString()
], ClientReferencesDto.prototype, "url", void 0);
__decorate([
    IsOptional(),
    IsString()
], ClientReferencesDto.prototype, "type", void 0);
export class ClientDto {
    id;
    name;
    username;
    email;
    phone;
    curp;
    contract;
    password;
    createdAt;
    lastLogin;
    payments;
    reference;
    references;
    token;
    userReferences;
    notifications;
    contractUrl;
    exists;
    contract_temporary;
    status;
    conekta_id;
    passport_id;
    dynamic_id;
    dynamic_account;
    dynamic_ref;
    score;
}
__decorate([
    IsString(),
    IsOptional()
], ClientDto.prototype, "id", void 0);
__decorate([
    IsString()
], ClientDto.prototype, "name", void 0);
__decorate([
    Validate(IsStringOrNumber)
], ClientDto.prototype, "username", void 0);
__decorate([
    IsString()
], ClientDto.prototype, "email", void 0);
__decorate([
    IsString()
], ClientDto.prototype, "phone", void 0);
__decorate([
    IsString()
], ClientDto.prototype, "curp", void 0);
__decorate([
    IsString(),
    IsOptional()
], ClientDto.prototype, "contract", void 0);
__decorate([
    IsString(),
    IsOptional()
], ClientDto.prototype, "password", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], ClientDto.prototype, "createdAt", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], ClientDto.prototype, "lastLogin", void 0);
__decorate([
    IsArray(),
    IsOptional()
], ClientDto.prototype, "payments", void 0);
__decorate([
    IsOptional()
], ClientDto.prototype, "reference", void 0);
__decorate([
    IsArray(),
    IsOptional()
], ClientDto.prototype, "references", void 0);
__decorate([
    IsOptional(),
    IsString()
], ClientDto.prototype, "token", void 0);
__decorate([
    IsArray()
], ClientDto.prototype, "userReferences", void 0);
__decorate([
    IsOptional(),
    IsArray()
], ClientDto.prototype, "notifications", void 0);
__decorate([
    IsString(),
    IsOptional()
], ClientDto.prototype, "contractUrl", void 0);
__decorate([
    IsOptional()
], ClientDto.prototype, "exists", void 0);
__decorate([
    IsOptional()
], ClientDto.prototype, "contract_temporary", void 0);
__decorate([
    IsString()
], ClientDto.prototype, "status", void 0);
__decorate([
    IsString(),
    IsOptional()
], ClientDto.prototype, "conekta_id", void 0);
__decorate([
    IsString(),
    IsOptional()
], ClientDto.prototype, "passport_id", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], ClientDto.prototype, "dynamic_id", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], ClientDto.prototype, "dynamic_account", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], ClientDto.prototype, "dynamic_ref", void 0);
__decorate([
    IsOptional()
], ClientDto.prototype, "score", void 0);
export class CurpDto {
    curp = "";
}
__decorate([
    IsString()
], CurpDto.prototype, "curp", void 0);
export class MediaIdentityDto {
    url = "";
    name = eIdentityTypes.SELFIE; // Replace with your default if needed
    active = false;
    metadata = null;
    uploaded = 0;
}
__decorate([
    IsString()
], MediaIdentityDto.prototype, "url", void 0);
__decorate([
    IsEnum(eIdentityTypes)
], MediaIdentityDto.prototype, "name", void 0);
__decorate([
    IsBoolean()
], MediaIdentityDto.prototype, "active", void 0);
__decorate([
    IsOptional()
], MediaIdentityDto.prototype, "metadata", void 0);
__decorate([
    IsNumber()
], MediaIdentityDto.prototype, "uploaded", void 0);
export class oClientV2Dto extends ClientDto {
    score = new ScoreDto();
    seller_id = "";
    scoreNoHit = new ScoreNoHitDto();
    study_degree = "";
    mediaSelfie = new MediaIdentityDto();
    mediaAddress = new MediaIdentityDto();
    mediaWithDevice = new MediaIdentityDto();
    mediaSelfieBack = new MediaIdentityDto();
    identityVerification = eVerificationStep.IDLE;
}
__decorate([
    ValidateNested(),
    Type(() => ScoreDto)
], oClientV2Dto.prototype, "score", void 0);
__decorate([
    IsOptional(),
    IsString()
], oClientV2Dto.prototype, "seller_id", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => ScoreNoHitDto)
], oClientV2Dto.prototype, "scoreNoHit", void 0);
__decorate([
    IsOptional(),
    IsString()
], oClientV2Dto.prototype, "study_degree", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => MediaIdentityDto)
], oClientV2Dto.prototype, "mediaSelfie", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => MediaIdentityDto)
], oClientV2Dto.prototype, "mediaAddress", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => MediaIdentityDto)
], oClientV2Dto.prototype, "mediaWithDevice", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => MediaIdentityDto)
], oClientV2Dto.prototype, "mediaSelfieBack", void 0);
__decorate([
    IsOptional(),
    IsEnum(eVerificationStep)
], oClientV2Dto.prototype, "identityVerification", void 0);
export class UpdateNotificationSimpleDto {
    token = "";
    id = "";
}
__decorate([
    IsString()
], UpdateNotificationSimpleDto.prototype, "token", void 0);
__decorate([
    IsString()
], UpdateNotificationSimpleDto.prototype, "id", void 0);
export class NotificationSubscription {
    token = [];
}
__decorate([
    IsString()
], NotificationSubscription.prototype, "token", void 0);
