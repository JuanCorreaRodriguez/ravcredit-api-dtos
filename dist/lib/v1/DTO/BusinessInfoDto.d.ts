import { AddressDto } from './AddressDto.js';
import { WeekScheduleDto } from './WeekScheduleDto.js';
export declare class BusinessInfoDto {
    version: string;
    name: string;
    address: AddressDto;
    phones: string[];
    email: string;
    schedule: WeekScheduleDto;
    desc: string;
}
