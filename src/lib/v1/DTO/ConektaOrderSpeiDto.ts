import {Type} from "class-transformer";
import {ConektaOrdCreateDto} from './ConektaOrdCreateDto.js';
import {IsNumber, IsOptional, ValidateNested} from 'class-validator';
import {ClientDto} from './ClientDto.js';

export class ConektaOrderSpeiDto {
    @Type(() => ConektaOrdCreateDto)
    @ValidateNested({each: true})
    data: ConektaOrdCreateDto;

    @IsNumber()
    @IsOptional()
    date?: number;

    @Type(() => ClientDto)
    @ValidateNested({each: true})
    client: ClientDto;
}
