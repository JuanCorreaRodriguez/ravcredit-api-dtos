var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PassportReferenceDataDto } from './PassportReferenceDataDto.js';
export class PassportProviders {
    reference;
    centerId;
}
export class PassportReferenceCentersDto {
    name;
    logo;
}
__decorate([
    IsString()
], PassportReferenceCentersDto.prototype, "name", void 0);
__decorate([
    IsString()
], PassportReferenceCentersDto.prototype, "logo", void 0);
export class PassportReferenceDto {
    reference;
    centers;
    centerId;
    barcode;
}
__decorate([
    IsString()
], PassportReferenceDto.prototype, "reference", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => PassportReferenceCentersDto)
], PassportReferenceDto.prototype, "centers", void 0);
__decorate([
    IsNumber()
], PassportReferenceDto.prototype, "centerId", void 0);
__decorate([
    IsString()
], PassportReferenceDto.prototype, "barcode", void 0);
export class PassportReferenceResDto {
    type;
    data;
    message;
    references;
}
__decorate([
    IsString()
], PassportReferenceResDto.prototype, "type", void 0);
__decorate([
    ValidateNested(),
    Type(() => PassportReferenceDataDto)
], PassportReferenceResDto.prototype, "data", void 0);
__decorate([
    IsString()
], PassportReferenceResDto.prototype, "message", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => PassportReferenceDto)
], PassportReferenceResDto.prototype, "references", void 0);
export class PassportContract {
    id;
    client;
}
__decorate([
    IsString()
], PassportContract.prototype, "id", void 0);
__decorate([
    IsString()
], PassportContract.prototype, "client", void 0);
export class PassportApiResponseDto {
    reference;
    id;
    contract;
}
__decorate([
    IsOptional(),
    ValidateNested({ each: true }),
    Type(() => PassportReferenceResDto)
], PassportApiResponseDto.prototype, "reference", void 0);
__decorate([
    IsString()
], PassportApiResponseDto.prototype, "id", void 0);
__decorate([
    ValidateNested({ each: true }),
    Type(() => PassportContract)
], PassportApiResponseDto.prototype, "contract", void 0);
// export interface iPassportAdditional {
//   client: string;
//   clientID: string;
//   credit: string;
// }
//
// export interface iPassportReferenceData {
//   name: string;
//   email: string;
//   amount: number;
//   expirationDate: string;
//   additional: iPassportAdditional;
// }
//
// export interface iPassportReference {
//   type: string;
//   data: iPassportReferenceData;
// }
//
// export interface iPassportResponseData {
//   name: string;
//   email: string;
//   amount: number;
//   expirationDate: string;
//   additional: iPassportAdditional;
// }
//
// export interface iPassportReferenceCenters {
//   name: string;
//   logo: string;
// }
//
// export interface iPassportReference {
//   reference: string
//   centers: iPassportReferenceCenters[],
//   centerId: number,
//   barcode: string
// }
//
// export interface iPassportResponse {
//   type: string;
//   data: iPassportResponseData;
//   message: string;
//   references: iPassportReference[];
// }
//
// export interface iPassportApiResponse {
//   response: any,
//   id: string
//   contract: {
//     id: string
//     client: string
//   },
// }
