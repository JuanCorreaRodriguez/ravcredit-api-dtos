var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Type } from "class-transformer";
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { OrdCreateAntifraudInfoDto } from './OrdCreateAntifraudInfoDto.js';
export class OrdCreatLineItemDto {
    antifraud_info;
    name;
    quantity;
    unit_price;
}
__decorate([
    ValidateNested(),
    Type(() => OrdCreateAntifraudInfoDto)
], OrdCreatLineItemDto.prototype, "antifraud_info", void 0);
__decorate([
    IsString()
], OrdCreatLineItemDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], OrdCreatLineItemDto.prototype, "quantity", void 0);
__decorate([
    IsNumber()
], OrdCreatLineItemDto.prototype, "unit_price", void 0);
