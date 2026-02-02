import {IsArray, IsBoolean, IsNumber, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {ConektaLineItemDto} from './ConektaLineItemDto.js';

export class ConektaLineItemsDto {
    @IsString()
    object: string;

    @IsBoolean()
    has_more: boolean;

    @IsNumber()
    total: number;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => ConektaLineItemDto)
    data: ConektaLineItemDto[];
}
