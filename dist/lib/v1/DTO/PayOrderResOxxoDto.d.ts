import { CustomerInfoDto } from './CustomerDto.js';
import { MetadataDto } from './PaymentLinkDto.js';
import { ChargesDto } from './PayOrderResAlternaDto.js';
export declare const OxxoPay = "OxxoPay";
export declare class OxxoLineItemsOrderDataDto {
    name: string;
    unit_price: number;
    quantity: number;
    object: string;
    id: string;
    parent_id: string;
    metadata: any;
    antifraud_info: any;
}
export declare class OxxoLineItemsOrderDto {
    object: string;
    has_more: boolean;
    total: number;
    data: OxxoLineItemsOrderDataDto;
}
export declare class OxxoPaymentOrderMethodDto {
    service_name: string;
    barcode_url: string;
    object: string;
    type: string;
    expires_at: number;
    store_name: string;
    reference: string;
}
export declare class PayOrderResOxxoDto {
    livemode: boolean;
    amount: number;
    currency: string;
    payment_status: string;
    amount_refunded: number;
    customer_info: CustomerInfoDto;
    object: string;
    id: string;
    metadata: MetadataDto;
    is_refundable: boolean;
    created_at: number;
    updated_at: number;
    line_items: OxxoLineItemsOrderDto;
    charges: ChargesDto;
    reference: string;
}
