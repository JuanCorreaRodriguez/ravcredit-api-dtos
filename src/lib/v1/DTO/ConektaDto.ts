import {IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';

export class ConektaResObjChargePaidDto {
    @IsString()
    id: string;

    @IsBoolean()
    livemode: boolean;

    @IsNumber()
    created_at: number;

    @IsString()
    currency: string;

    @IsObject()
    payment_method: any;

    @IsString()
    object: string;

    @IsString()
    description: string;

    @IsString()
    status: string;

    @IsNumber()
    amount: number;

    @IsNumber()
    paid_at: number;

    @IsNumber()
    fee: number;

    @IsString()
    customer_id: string;

    @IsString()
    order_id: string;
}

export class ConektaResObjOrderPaidDto {
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

    @IsObject()
    customer_info: any;

    @IsString()
    object: string;

    @IsString()
    id: string;

    @IsObject()
    metadata: any;

    @IsBoolean()
    is_refundable: boolean;

    @IsNumber()
    created_at: number;

    @IsNumber()
    updated_at: number;

    @IsObject()
    line_items: any;

    @IsObject()
    charges: any;
}

export class ConektaResPrevAttrDto {
    @IsString()
    status: string;
}

export class ConektaResDataDto {
    @ValidateNested()
    @Type(() => ConektaResObjChargePaidDto)
    object: ConektaResObjChargePaidDto;

    @ValidateNested()
    @Type(() => ConektaResPrevAttrDto)
    previous_attributes: ConektaResPrevAttrDto;
}

export class ConektaResDto {
    @IsOptional()
    @IsString()
    client_id?: string;

    @ValidateNested()
    @Type(() => ConektaResDataDto)
    data: ConektaResDataDto;

    @IsBoolean()
    livemode: boolean;

    @IsString()
    webhook_status: string;

    @IsArray()
    @IsOptional()
    webhook_logs: any[];

    @IsString()
    id: string;

    @IsString()
    object: string;

    @IsString()
    type: string; // Assuming eConektaRes is a string

    @IsNumber()
    created_at: number;
}

export class ConektaSourcesDto {
    @IsString()
    type: string;

    @IsNumber()
    expires_at: number;
}

export class ConektaDto {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => ConektaSourcesDto)
    payment_sources: ConektaSourcesDto[];
}

export class OxxoRecurrentSourcesDataDto {
    @IsString()
    id: string;

    @IsString()
    object: string;

    @IsString()
    type: string;

    @IsString()
    provider: string;

    @IsString()
    reference: string;

    @IsString()
    barcode: string;

    @IsString()
    barcode_url: string;

    @IsNumber()
    expires_at: number;

    @IsNumber()
    created_at: number;

    @IsString()
    parent_id: string;
}

export class OxxoRecurrentSourcesDto {
    @IsString()
    object: string;

    @IsBoolean()
    has_more: boolean;

    @IsNumber()
    total: number;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => OxxoRecurrentSourcesDataDto)
    data: OxxoRecurrentSourcesDataDto[];
}

export class ConektaRecurrentDto {
    @IsBoolean()
    corporate: boolean;

    @IsNumber()
    created_at: number;

    @IsBoolean()
    livemode: boolean;

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    id: string;

    @IsString()
    object: string;

    @IsString()
    custom_id: string;

    @ValidateNested()
    @Type(() => OxxoRecurrentSourcesDto)
    payment_sources: OxxoRecurrentSourcesDto;
}

/**
 *  Constants
 *  */


export const cConektaResPrevAttr: ConektaResPrevAttrDto = {
    status: '',
};

export const cConektaResObjChargePaid: ConektaResObjChargePaidDto = {
    id: '',
    livemode: false,
    created_at: 0,
    currency: '',
    payment_method: {},
    object: '',
    description: '',
    status: '',
    amount: 0,
    paid_at: 0,
    fee: 0,
    customer_id: '',
    order_id: '',
};

export const cConektaResData: ConektaResDataDto = {
    object: cConektaResObjChargePaid,
    previous_attributes: cConektaResPrevAttr,
};
