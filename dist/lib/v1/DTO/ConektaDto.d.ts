export declare class ConektaResObjChargePaidDto {
    id: string;
    livemode: boolean;
    created_at: number;
    currency: string;
    payment_method: any;
    object: string;
    description: string;
    status: string;
    amount: number;
    paid_at: number;
    fee: number;
    customer_id: string;
    order_id: string;
}
export declare class ConektaResObjOrderPaidDto {
    livemode: boolean;
    amount: number;
    currency: string;
    payment_status: string;
    amount_refunded: number;
    customer_info: any;
    object: string;
    id: string;
    metadata: any;
    is_refundable: boolean;
    created_at: number;
    updated_at: number;
    line_items: any;
    charges: any;
}
export declare class ConektaResPrevAttrDto {
    status: string;
}
export declare class ConektaResDataDto {
    object: ConektaResObjChargePaidDto;
    previous_attributes: ConektaResPrevAttrDto;
}
export declare class ConektaResDto {
    client_id?: string;
    data: ConektaResDataDto;
    livemode: boolean;
    webhook_status: string;
    webhook_logs: any[];
    id: string;
    object: string;
    type: string;
    created_at: number;
}
export declare class ConektaSourcesDto {
    type: string;
    expires_at: number;
}
export declare class ConektaDto {
    name: string;
    email: string;
    phone: string;
    payment_sources: ConektaSourcesDto[];
}
export declare class OxxoRecurrentSourcesDataDto {
    id: string;
    object: string;
    type: string;
    provider: string;
    reference: string;
    barcode: string;
    barcode_url: string;
    expires_at: number;
    created_at: number;
    parent_id: string;
}
export declare class OxxoRecurrentSourcesDto {
    object: string;
    has_more: boolean;
    total: number;
    data: OxxoRecurrentSourcesDataDto[];
}
export declare class ConektaRecurrentDto {
    corporate: boolean;
    created_at: number;
    livemode: boolean;
    name: string;
    email: string;
    phone: string;
    id: string;
    object: string;
    custom_id: string;
    payment_sources: OxxoRecurrentSourcesDto;
}
/**
 *  Constants
 *  */
export declare const cConektaResPrevAttr: ConektaResPrevAttrDto;
export declare const cConektaResObjChargePaid: ConektaResObjChargePaidDto;
export declare const cConektaResData: ConektaResDataDto;
