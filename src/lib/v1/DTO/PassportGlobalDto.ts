import {Type} from 'class-transformer';
import {IsNumber, IsOptional, ValidateNested} from 'class-validator';
import {CreatePassportDto} from './PassportCreateDto.js';
import {ContractDto} from './ContractDto.js';

export class GlobalPassportDTO {
    @Type(() => CreatePassportDto)
    @ValidateNested({each: true})
    passport: CreatePassportDto;

    @Type(() => ContractDto)
    @ValidateNested({each: true})
    contract: ContractDto;

    @IsNumber()
    @IsOptional()
    date: number;
}
