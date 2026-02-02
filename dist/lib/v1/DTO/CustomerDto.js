var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
export class CustomerDto {
    livemode;
    name;
    email;
    phone;
    id;
    object;
    created_at;
    corporate;
    custom_reference;
}
__decorate([
    IsBoolean()
], CustomerDto.prototype, "livemode", void 0);
__decorate([
    IsString()
], CustomerDto.prototype, "name", void 0);
__decorate([
    IsString()
], CustomerDto.prototype, "email", void 0);
__decorate([
    IsString()
], CustomerDto.prototype, "phone", void 0);
__decorate([
    IsString()
], CustomerDto.prototype, "id", void 0);
__decorate([
    IsString()
], CustomerDto.prototype, "object", void 0);
__decorate([
    IsNumber()
], CustomerDto.prototype, "created_at", void 0);
__decorate([
    IsBoolean()
], CustomerDto.prototype, "corporate", void 0);
__decorate([
    IsString()
], CustomerDto.prototype, "custom_reference", void 0);
export class CustomerInfoDto {
    customer_id;
    name;
    email;
    phone;
}
__decorate([
    IsString()
], CustomerInfoDto.prototype, "customer_id", void 0);
__decorate([
    IsOptional(),
    IsString()
], CustomerInfoDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString()
], CustomerInfoDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    IsString()
], CustomerInfoDto.prototype, "phone", void 0);
