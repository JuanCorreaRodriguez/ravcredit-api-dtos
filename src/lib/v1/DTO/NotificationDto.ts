import {IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {cNotificationContentDto, cNotificationDataDto} from '../util/Constants.js';

export class NotificationContentDto {
    @IsString()
    title: string = "";

    @IsString()
    body: string = "";
}

export class NotificationDataDto {
    @IsString()
    route: string = "";
}

export class NotificationDto {
    @IsOptional()
    @IsString()
    id?: string = "";

    @IsString()
    token: string = "";

    @ValidateNested()
    @Type(() => NotificationContentDto)
    notification: NotificationContentDto = cNotificationContentDto;

    @ValidateNested()
    @Type(() => NotificationDataDto)
    data: NotificationDataDto = cNotificationDataDto;
}

