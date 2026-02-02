import {Type} from "class-transformer";
import {IsNumber, IsString, ValidateNested} from 'class-validator';
import {OrdCreateAntifraudInfoDto} from './OrdCreateAntifraudInfoDto.js';

export class OrdCreatLineItemDto {
    @ValidateNested()
    @Type(() => OrdCreateAntifraudInfoDto)
    antifraud_info: OrdCreateAntifraudInfoDto;

    @IsString()
    name: string;

    @IsNumber()
    quantity: number;

    @IsNumber()
    unit_price: number;
}
