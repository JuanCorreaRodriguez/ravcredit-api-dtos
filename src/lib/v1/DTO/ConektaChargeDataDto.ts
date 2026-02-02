import {Type} from "class-transformer";
import {IsBoolean, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import {ConektaChannelDto} from './ConektaChannelDto.js';
import {ConektaPaymentMethodDto} from './ConektaPaymentMethodDto.js';

export class ConektaChargeDataDto {

    @IsString()
    id: string;

    @IsBoolean()
    livemode: boolean;

    @IsNumber()
    created_at: number;

    @IsString()
    currency: string;

    @IsOptional()
    @IsString()
    failure_code: string | null;

    @IsOptional()
    @IsString()
    failure_message: string | null;

    @ValidateNested()
    @Type(() => ConektaChannelDto)
    channel: ConektaChannelDto;

    @ValidateNested()
    @Type(() => ConektaPaymentMethodDto)
    payment_method: ConektaPaymentMethodDto;

    @IsString()
    object: string;

    @IsString()
    device_fingerprint: string;

    @IsString()
    description: string;

    @IsBoolean()
    is_refundable: boolean;

    @IsOptional()
    @IsString()
    reference_id: string | null;

    @IsString()
    status: string;

    @IsNumber()
    amount: number;

    @IsNumber()
    paid_at: number;

    @IsString()
    customer_id: string;

    @IsString()
    order_id: string;

    @IsBoolean()
    is_button_premia: boolean;

    @IsOptional()
    @IsString()
    refunds: string | null;
}
