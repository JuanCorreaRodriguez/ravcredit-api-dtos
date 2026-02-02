var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ArrayMinSize, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AddressDto } from './AddressDto.js';
import { WeekScheduleDto } from './WeekScheduleDto.js';
import { cAddressDto, cWeekScheduleDTO } from '../util/Constants.js';
export class BusinessInfoDto {
    version = "";
    name = "";
    address = cAddressDto;
    phones = [];
    email = "";
    schedule = cWeekScheduleDTO;
    desc = "";
}
__decorate([
    IsOptional(),
    IsString()
], BusinessInfoDto.prototype, "version", void 0);
__decorate([
    IsString()
], BusinessInfoDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    Type(() => AddressDto)
], BusinessInfoDto.prototype, "address", void 0);
__decorate([
    ArrayMinSize(1),
    Type(() => String)
], BusinessInfoDto.prototype, "phones", void 0);
__decorate([
    IsString()
], BusinessInfoDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    Type(() => WeekScheduleDto),
    ValidateNested({ each: true })
], BusinessInfoDto.prototype, "schedule", void 0);
__decorate([
    IsOptional(),
    IsString()
], BusinessInfoDto.prototype, "desc", void 0);
