var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsOptional, IsString } from 'class-validator';
export class AddressDto {
    street = "";
    city = "";
    neighbor = "";
    zip = "";
    ext = "";
    int = "";
    state = "";
}
__decorate([
    IsString()
], AddressDto.prototype, "street", void 0);
__decorate([
    IsString()
], AddressDto.prototype, "city", void 0);
__decorate([
    IsString()
], AddressDto.prototype, "neighbor", void 0);
__decorate([
    IsString()
], AddressDto.prototype, "zip", void 0);
__decorate([
    IsString()
], AddressDto.prototype, "ext", void 0);
__decorate([
    IsString(),
    IsOptional()
], AddressDto.prototype, "int", void 0);
__decorate([
    IsString()
], AddressDto.prototype, "state", void 0);
