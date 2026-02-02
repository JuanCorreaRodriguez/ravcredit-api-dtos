var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { cDayScheduleDTO } from '../util/Constants.js';
export class DayScheduleDTO {
    close = "";
    open = "";
}
__decorate([
    IsString(),
    IsOptional()
], DayScheduleDTO.prototype, "close", void 0);
__decorate([
    IsString(),
    IsOptional()
], DayScheduleDTO.prototype, "open", void 0);
export class WeekScheduleDto {
    monday = cDayScheduleDTO;
    tuesday = cDayScheduleDTO;
    wednesday = cDayScheduleDTO;
    thursday = cDayScheduleDTO;
    friday = cDayScheduleDTO;
    saturday = cDayScheduleDTO;
    sunday = cDayScheduleDTO;
}
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => DayScheduleDTO)
], WeekScheduleDto.prototype, "monday", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => DayScheduleDTO)
], WeekScheduleDto.prototype, "tuesday", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => DayScheduleDTO)
], WeekScheduleDto.prototype, "wednesday", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => DayScheduleDTO)
], WeekScheduleDto.prototype, "thursday", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => DayScheduleDTO)
], WeekScheduleDto.prototype, "friday", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => DayScheduleDTO)
], WeekScheduleDto.prototype, "saturday", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => DayScheduleDTO)
], WeekScheduleDto.prototype, "sunday", void 0);
