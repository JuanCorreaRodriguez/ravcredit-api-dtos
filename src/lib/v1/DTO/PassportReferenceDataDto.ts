import {IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {PassportAdditionalDto} from './PassportAdditionalDto.js';

export class PassportReferenceDataDto {

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsNumber()
    amount: number;

    @IsString()
    @IsOptional()
    expirationDate: string;

    @Type(() => PassportAdditionalDto)
    @ValidateNested({each: true})
    additional: PassportAdditionalDto;
}
