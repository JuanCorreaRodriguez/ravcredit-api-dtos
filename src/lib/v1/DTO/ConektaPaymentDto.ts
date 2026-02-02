import {IsEnum, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {ClientDto} from './ClientDto.js';
import {ContractDto} from './ContractDto.js';
import {ePaymentType} from "ravcredit-core";

export class PaymentConektaDto {

    @ValidateNested({each: true})
    @Type(() => ClientDto)
    client: ClientDto;

    @ValidateNested({each: true})
    @Type(() => ContractDto)
    contract: ContractDto;

    @IsEnum(ePaymentType)
    @IsString()
    @IsOptional()
    paymentType: ePaymentType;
}
