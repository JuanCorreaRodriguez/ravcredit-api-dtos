import { CustomerInfoDto } from './CustomerDto.js';
export declare class LineItemsDto {
    name: string;
    unit_price: number;
    quantity: number;
}
export declare class OrderTemplateDto {
    line_items: LineItemsDto[];
    currency: string;
    customer_info: CustomerInfoDto;
}
export declare class MetadataDto {
    datos_extra: string;
}
export declare class PaymentMethodsDto {
    type: string;
    expires_at: number;
}
export declare class PaymentChargesDto {
    payment_method: PaymentMethodsDto;
}
export declare class PaymentOrderObjectDto {
    currency: string;
    customer_info: CustomerInfoDto;
    line_items: LineItemsDto[];
    metadata: MetadataDto;
    charges: PaymentChargesDto[];
}
export declare class PaymentLinkObjectDto {
    name: string;
    type: string;
    recurrent: boolean;
    expired_at: number;
    allowed_payment_methods: string[];
    needs_shipping_contact: boolean;
    order_template: OrderTemplateDto;
}
