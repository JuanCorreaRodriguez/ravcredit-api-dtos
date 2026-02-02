var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { cNotificationContentDto, cNotificationDataDto } from '../util/Constants.js';
export class NotificationContentDto {
    title = "";
    body = "";
}
__decorate([
    IsString()
], NotificationContentDto.prototype, "title", void 0);
__decorate([
    IsString()
], NotificationContentDto.prototype, "body", void 0);
export class NotificationDataDto {
    route = "";
}
__decorate([
    IsString()
], NotificationDataDto.prototype, "route", void 0);
export class NotificationDto {
    id = "";
    token = "";
    notification = cNotificationContentDto;
    data = cNotificationDataDto;
}
__decorate([
    IsOptional(),
    IsString()
], NotificationDto.prototype, "id", void 0);
__decorate([
    IsString()
], NotificationDto.prototype, "token", void 0);
__decorate([
    ValidateNested(),
    Type(() => NotificationContentDto)
], NotificationDto.prototype, "notification", void 0);
__decorate([
    ValidateNested(),
    Type(() => NotificationDataDto)
], NotificationDto.prototype, "data", void 0);
