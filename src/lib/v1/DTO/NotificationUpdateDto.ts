import {NotificationDto} from "./NotificationDto.js";
import {PartialType} from '@nestjs/mapped-types';

export class DynamicUpdateNotificationDto extends PartialType(NotificationDto) {
}
