import {Type} from "class-transformer";
import {IsArray, IsBoolean, IsOptional, IsString, ValidateNested} from 'class-validator';
import {ConektaOrderDto} from './ConektaOrderDto.js';

export class ConektaOrdersResponseDto {
    @IsOptional()
    @IsString()
    next_page_url: string | null;

    @IsOptional()
    @IsString()
    previous_page_url: string | null;

    @IsBoolean()
    has_more: boolean;

    @IsString()
    object: string;

    @IsArray()
    @ValidateNested()
    @Type(() => ConektaOrderDto)
    data: ConektaOrderDto[];
}
