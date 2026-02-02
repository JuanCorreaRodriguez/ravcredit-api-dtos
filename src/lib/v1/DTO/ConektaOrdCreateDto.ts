import {IsArray, IsString, ValidateNested} from 'class-validator';
import {OrdCreateCusInfoDto} from './OrdCreateCusInfoDto.js';
import {Type} from "class-transformer";
import {OrdCreateChargeDto} from './OrdCreateChargeDto.js';
import {OrdCreatLineItemDto} from './OrdCreatLineItemDto.js';

export class ConektaOrdCreateDto {
    @ValidateNested()
    @Type(() => OrdCreateCusInfoDto)
    customer_info: OrdCreateCusInfoDto;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => OrdCreateChargeDto)
    charges: OrdCreateChargeDto[];

    @IsString()
    currency: string;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => OrdCreatLineItemDto)
    line_items: OrdCreatLineItemDto[];
}
