import {Type} from "class-transformer";
import {IsBoolean, IsNumber, IsObject, IsOptional, IsString, ValidateNested} from 'class-validator';
import {ConektaCustomerInfoDto} from './ConektaCustomerInfoDto.js';
import {ConektaChannelDto} from './ConektaChannelDto.js';
import {ConektaChargesDto} from './ConektaChargesDto.js';
import {ConektaLineItemsDto} from './ConektaLineItemsDto.js';
import {ConektaCheckoutDto} from './ConektaCheckoutDto.js';

export class ConektaOrderDto {
    @IsBoolean()
    livemode: boolean;

    @IsNumber()
    amount: number;

    @IsString()
    currency: string;

    @IsString()
    payment_status: string;

    @IsNumber()
    amount_refunded: number;

    @ValidateNested()
    @Type(() => ConektaCustomerInfoDto)
    customer_info: ConektaCustomerInfoDto;

    @IsOptional()
    @IsString()
    shipping_contact: string | null;

    @ValidateNested()
    @Type(() => ConektaChannelDto)
    channel: ConektaChannelDto;

    @IsOptional()
    @IsString()
    fiscal_entity: string | null;

    @IsString()
    object: string;

    @IsString()
    id: string;

    @IsObject()
    metadata: object;

    @IsBoolean()
    is_refundable: boolean;

    @IsNumber()
    created_at: number;

    @IsNumber()
    updated_at: number;

    @ValidateNested()
    @Type(() => ConektaCheckoutDto)
    checkout: ConektaCheckoutDto;

    @IsBoolean()
    is_button_premia: boolean;

    @ValidateNested()
    @Type(() => ConektaLineItemsDto)
    line_items: ConektaLineItemsDto;

    @IsOptional()
    @IsString()
    shipping_lines: string | null;

    @IsOptional()
    @IsString()
    tax_lines: string | null;

    @IsOptional()
    @IsString()
    discount_lines: string | null;

    @ValidateNested()
    @Type(() => ConektaChargesDto)
    charges: ConektaChargesDto;
}
