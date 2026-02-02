import {Type} from 'class-transformer';
import {IsArray, IsBoolean, IsNumber, IsString, ValidateNested} from 'class-validator';
import {ConektaChargeDataDto} from './ConektaChargeDataDto.js';

export class ConektaChargesDto {
    @IsString()
    object: string;

    @IsBoolean()
    has_more: boolean;

    @IsNumber()
    total: number;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => ConektaChargeDataDto)
    data: ConektaChargeDataDto[];
}
