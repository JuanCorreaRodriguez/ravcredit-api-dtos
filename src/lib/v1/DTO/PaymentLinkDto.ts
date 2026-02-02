import {IsArray, IsBoolean, IsNumber, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {CustomerInfoDto} from './CustomerDto.js';

export class LineItemsDto {
    @IsString()
    name: string;

    @IsNumber()
    unit_price: number;

    @IsNumber()
    quantity: number;
}

export class OrderTemplateDto {
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => LineItemsDto)
    line_items: LineItemsDto[];

    @IsString() // Assuming eCurrencies is a string
    currency: string;

    @ValidateNested()
    @Type(() => CustomerInfoDto)
    customer_info: CustomerInfoDto;
}

export class MetadataDto {
    @IsString()
    datos_extra: string;
}

export class PaymentMethodsDto {
    @IsString()
    type: string;

    @IsNumber()
    expires_at: number;
}

export class PaymentChargesDto {
    @ValidateNested()
    @Type(() => PaymentMethodsDto)
    payment_method: PaymentMethodsDto;
}

export class PaymentOrderObjectDto {
    @IsString() // Assuming eCurrencies is a string
    currency: string;

    @ValidateNested()
    @Type(() => CustomerInfoDto)
    customer_info: CustomerInfoDto;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => LineItemsDto)
    line_items: LineItemsDto[];

    @ValidateNested()
    @Type(() => MetadataDto)
    metadata: MetadataDto;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => PaymentChargesDto)
    charges: PaymentChargesDto[];
}

export class PaymentLinkObjectDto {
    @IsString()
    name: string;

    @IsString()
    type: string;

    @IsBoolean()
    recurrent: boolean;

    @IsNumber()
    expired_at: number;

    @IsArray()
    @IsString({each: true})
    allowed_payment_methods: string[];

    @IsBoolean()
    needs_shipping_contact: boolean;

    @ValidateNested()
    @Type(() => OrderTemplateDto)
    order_template: OrderTemplateDto;
}

//
// export interface iLineItems {
//   name: string; // "Red Wine",
//   unit_price: number; // 1000,
//   quantity: number; // 10
// }
//
// export interface iOrderTemplate {
//   line_items: iLineItems[],
//   currency: eCurrencies// "MXN",
//   customer_info: CustomerInfoDto
// }

//
// export interface iMetadata {
//   datos_extra: string;
// }
//
// export interface iPaymentMethods {
//   type: string;
//   expires_at: number;
// }
//
// export interface iCharges {
//   payment_method: iPaymentMethods;
// }
//
// export interface iPaymentOrderObject {
//   currency: eCurrencies;// "MXN",
//   customer_info: CustomerInfoDto;
//   line_items: iLineItems[];
//   metadata: iMetadata;
//   charges: iCharges[];
// }
//
// export interface iPaymentLinkObject {
//   name: string; // "Payment Link Name",
//   type: string; // "PaymentLink",
//   recurrent: boolean; // false,
//   expired_at: number; // 1597635007,
//   allowed_payment_methods: string[];// ["cash", "card", "bank_transfer"],
//   needs_shipping_contact: boolean;// false,
//   order_template: iOrderTemplate;
// }

// Example CustomerInfo
// {
//   "customer_id": "cus_2nYSnP4EDiREgGte9"
// }
