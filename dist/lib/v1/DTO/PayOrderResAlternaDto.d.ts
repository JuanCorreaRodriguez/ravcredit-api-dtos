import { CustomerInfoDto } from "./CustomerDto.js";
import { MetadataDto } from './PaymentLinkDto.js';
export declare enum eAlternaStores {
    '7Eleven' = "7 Eleven",
    'Ahorro' = "Farmacias del Ahorro",
    'CircleK' = "CIRCLE K",
    'Elektra' = "Tiendas Extra",
    'Benavides' = "Farmacia Benavides",
    'Soriana' = "Soriana",
    'Waldos' = "WALDO'S",
    'Eleczion' = "ELECZION",
    'Kiosko' = "Super Kiosko",
    'FBazar' = "Farmacias Bazar",
    'Wolworth' = "Wolworth",
    'DelSol' = "Del Sol",
    'Yepas' = "Yepas",
    'FDios' = "Farmacias De Dios",
    'FNosarco' = "Farmacias Nosarco",
    'FSantaCruz' = "Farmacias Santa Cruz",
    'FCentro' = "Farmacentro",
    'FGyM' = "Farmacias GyM",
    'FFcoAsis' = "Farmacias San Francisco de Asis",
    'FUnion' = "Farmacias Union",
    'FZapotlan' = "Farmacias Zapotlan",
    'Ftodo' = "Farmatodo",
    'AlSuper' = "Al Super"
}
export declare class AlternaLineItemsDataDto {
    line_item: string;
    parent_id: string;
    metadata: any;
    antifraud_info: any;
}
export declare class AlternaLineItemsDto {
    object: string;
    has_more: boolean;
    total: number;
    data: AlternaLineItemsDataDto[];
}
export declare class AlternaChargesDataMethodsDto {
    service_name: string;
    barcode_url: string;
    object: string;
    type: string;
    expires_at: number;
    store_names: string[];
    store_name: string;
    reference: string;
}
export declare class ChargesDataDto {
    id: string;
    livemode: boolean;
    created_at: number;
    currency: string;
    payment_method: AlternaChargesDataMethodsDto;
    object: string;
    description: string;
    status: string;
    amount: number;
    fee: number;
    customer_id: string;
    order_id: string;
}
export declare class ChargesDto {
    object: string;
    has_more: boolean;
    total: number;
    data: ChargesDataDto[];
}
export declare class PayOrderResAlternaDto {
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
    line_items: AlternaLineItemsDto;
    charges: ChargesDto;
}
/**
 "livemode": false,
 "amount": 23000,
 "currency": "MXN",
 "payment_status": "pending_payment",
 "amount_refunded": 0,
 "customer_info": {**
 "email": "jorge.martinez@conekta.com",**
 "phone": "+5218181818181",**
 "name": "Jorge Martínez",**
 "object": "customer_info"
 },
 "object": "order",
 "id": "ord_2tbtp8ubDPjNbrRDZ",
 "metadata": {
 "datos_extra": "1234"
 },
 "is_refundable": false,
 "created_at": 1680030285,
 "updated_at": 1680030285,
 "line_items": {
 "object": "list",
 "has_more": false,
 "total": 1,
 "data": [
 {
 line_item_2tbtp8ubDPjNbrRDX",
 "parent_id": "ord_2tbtp8ubDPjNbrRDZ",
 "metadata": {},
 "antifraud_info": {}
 }
 ]
 },
 "charges": {
 "object": "list",
 "has_more": false,
 "total": 1,
 "data": [
 {
 "id": "64233a4dd2d40c0018b967a6",
 "livemode": false,
 "created_at": 1680030285,
 "currency": "MXN",
 "payment_method": {
 "service_name": "Cash",
 "barcode_url": "https://barcodes.conekta.com/sandbox_reference.png",**
 "object": "cash_payment",
 "type": "cash",**
 "expires_at": 1680138259,**
 "store_names": [**
 "7 Eleven",
 "Farmacias del Ahorro",
 "CIRCLE K",
 "Tiendas Extra",
 "Farmacia Benavides"
 "Soriana"
 "WALDO'S",
 "ELECZION",
 "Super Kiosko"
 "Farmacias Bazar"
 "Wolworth",
 "Del Sol",
 "Yepas",
 "Farmacias De Dios",
 "Farmacias Nosarco",
 "Farmacias Santa Cruz",
 "Farmacentro",
 "Farmacias GyM",
 "Farmacias San Francisco de Asis",
 "Farmacias Union",
 "Farmacias Zapotlan",
 "Farmatodo",
 "Al Super"
 ],
 "store_name": "[\"7 Eleven\",\"Farmacias del Ahorro\",\"CIRCLE K\",\"Tiendas Extra\",\"Farmacia Benavides\",\"Soriana\",\"WALDO'S\",\"ELECZION\",\"Wolworth\",\"Del Sol\",\"Yepas\",\"Farmacias De Dios\",\"Farmacias Nosarco\",\"Farmacias Santa Cruz\",\"Farmacentro\",\"Farmacias GyM\",\"Farmacias San Francisco de Asis\",\"Farmacias Union\",\"Farmacias Zapotlan\",\"Farmatodo\",\"Super Kiosko\",\"Farmacias Bazar\",\"Al Super\"]",
 "reference": "7647156830217265"
 },
 "object": "charge",
 "description": "Payment from order",
 "status": "pending_payment",**
 "amount": 23000,**
 "fee": 987,**
 "customer_id": "",
 "order_id": "ord_2tbtp8ubDPjNbrRDZ"
 }
 ]
 }
 }

 */
