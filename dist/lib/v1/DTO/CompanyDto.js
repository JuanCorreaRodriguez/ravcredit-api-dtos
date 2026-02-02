var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDto } from './AddressDto.js';
export class CompanyDto {
    name = "";
    id = "";
    rfc = "";
    taxRegime = "";
    address = new AddressDto();
}
__decorate([
    IsString()
], CompanyDto.prototype, "name", void 0);
__decorate([
    IsString()
], CompanyDto.prototype, "id", void 0);
__decorate([
    IsString()
], CompanyDto.prototype, "rfc", void 0);
__decorate([
    IsString()
], CompanyDto.prototype, "taxRegime", void 0);
__decorate([
    ValidateNested(),
    Type(() => AddressDto)
], CompanyDto.prototype, "address", void 0);
