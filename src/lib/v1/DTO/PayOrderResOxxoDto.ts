import {CustomerInfoDto} from './CustomerDto.js';
import {IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import {MetadataDto} from './PaymentLinkDto.js';
import {
  cChargesDto,
  cCustomerInfoDto,
  cMetadataDto,
  cOxxoLineItemsOrderDataDto,
  cOxxoLineItemsOrderDto
} from '../util/Constants.js';
import {Type} from 'class-transformer';
import {ChargesDto} from './PayOrderResAlternaDto.js';

export const OxxoPay = 'OxxoPay';

export class OxxoLineItemsOrderDataDto {
    @IsString()
    name: string = "";

    @IsNumber()
    unit_price: number = 0;

    @IsNumber()
    quantity: number = 0;

    @IsString()
    object: string = "";

    @IsString()
    id: string = "";

    @IsString()
    parent_id: string = "";

    @IsOptional()
    metadata: any;

    @IsOptional()
    antifraud_info: any;
}

export class OxxoLineItemsOrderDto {
    @IsString()
    object: string = "";

    @IsBoolean()
    has_more: boolean = false;

    @IsNumber()
    total: number = 0;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => OxxoLineItemsOrderDataDto)
    data: OxxoLineItemsOrderDataDto = cOxxoLineItemsOrderDataDto;
}

export class OxxoPaymentOrderMethodDto {
    @IsString()
    service_name: string = "";

    @IsString()
    barcode_url: string = "";

    @IsString()
    object: string = "";

    @IsString()
    type: string = "";

    @IsNumber()
    expires_at: number = 0;

    @IsString()
    store_name: string = "";

    @IsString()
    reference: string = "";
}

export class PayOrderResOxxoDto {
    @IsBoolean()
    livemode: boolean = false;

    @IsNumber()
    amount: number = 0;

    @IsString()
    currency: string = "";

    @IsString()
    payment_status: string = "";

    @IsNumber()
    amount_refunded: number = 0;

    @ValidateNested()
    @Type(() => CustomerInfoDto)
    customer_info: CustomerInfoDto = cCustomerInfoDto;

    @IsString()
    object: string = "";

    @IsString()
    id: string = "";

    @ValidateNested()
    @Type(() => MetadataDto)
    metadata: MetadataDto = cMetadataDto;

    @IsBoolean()
    is_refundable: boolean = false;

    @IsNumber()
    created_at: number = 0;

    @IsNumber()
    updated_at: number = 0;

    @ValidateNested()
    @Type(() => OxxoLineItemsOrderDto)
    line_items: OxxoLineItemsOrderDto = cOxxoLineItemsOrderDto;

    @ValidateNested()
    @Type(() => ChargesDto)
    charges: ChargesDto = cChargesDto;

    @IsString()
    reference: string = "";
}

//
// export interface iOxxoLineItemsOrderData {
//   'name': string
//   'unit_price': number
//   'quantity': number
//   'object': string
//   'id': string
//   'parent_id': string
//   'metadata': any,
//   'antifraud_info': any
// }
//
// export interface iOxxoLineItemsOrder { //
//   'object': 'list',
//   'has_more': false,
//   'total': 1,
//   'data': iOxxoLineItemsOrderData[]
// }
//
// export interface iOxxoPaymentOrderMethod {
//   'service_name': string;
//   'barcode_url': string;
//   'object': string;
//   'type': string;
//   'expires_at': number;
//   'store_name': string;
//   'reference': string;
// }
//
// export interface iPayOrderResOxxo {
//   'livemode': boolean,
//   'amount': number,
//   'currency': string,
//   'payment_status': string,
//   'amount_refunded': number,
//   'customer_info': iCustomerInfo,
//   'object': string,
//   'id': string,
//   'metadata': iMetadata,
//   'is_refundable': boolean,
//   'created_at': number,
//   'updated_at': number,
//   'line_items': iOxxoLineItemsOrder,
//   'charges': iCharges,
//   'reference': 'CUSTOM_REFERENCE_RETURNED',
// }


// export interface iPaymentOrderResponse {
//   "livemode": false,
//   "amount": 23000,
//   "currency": "MXN",
//   "payment_status": "pending_payment",
//   "amount_refunded": 0,
//   "customer_info": {
//     "email": "jorge.martinez@conekta.com", //
//     "phone": "+5218181818181", //
//     "name": "Jorge Martínez", //
//     "object": "customer_info"
//   },
//   "object": "order",
//   "id": "ord_2tV2HyVSTfdrsXqqV",
//   "metadata": {
//     "datos_extra": "1234"
//   },
//   "is_refundable": false,
//   "created_at": 1678214375,
//   "updated_at": 1678214375,
//   "line_items": { //
//     "object": "list",
//     "has_more": false,
//     "total": 1,
//     "data": [{
//       "name": "Nombre del Producto o Servicio", //
//       "unit_price": 23000, //
//       "quantity": 1, //
//       "object": "line_item",
//       "id": "line_item_2tV2HyVSTfdrsXqqT",
//       "parent_id": "ord_2tV2HyVSTfdrsXqqV",
//       "metadata": {},
//       "antifraud_info": {}
//     }
//     ]
//   },
//   "charges": {
//     "object": "list",
//     "has_more": false,
//     "total": 1,
//     "data": [{
//       "id": "640784e7a8a54c00178ea732",
//       "livemode": false,
//       "created_at": 1678214375,
//       "currency": "MXN",
//       "payment_method": {
//         "service_name": "OxxoPay",
//         "barcode_url": "https://barcodes.conekta.com/sandbox_reference.png", //
//         "object": "cash_payment",
//         "type": "oxxo",
//         "expires_at": 1678300709, //
//         "store_name": "OXXO", //
//         "reference": "98000014505724" //
//       },
//       "object": "charge",
//       "description": "Payment from order",
//       "status": "pending_payment", //
//       "amount": 23000,//
//       "fee": 1041,//
//       "customer_id": "",
//       "order_id": "ord_2tV2HyVSTfdrsXqqV"//
//     }
//     ]
//   }
// }

// try{
//   Customer customer = Customer.create(
//     new JSONObject("{"
//       + "'name': 'Fulanito',"
//       + "'email': 'fulanito@test.com',"
//       + "'phone': '+5218181818181',"
//       + "'payment_sources':[ {"
//       + "'type': 'oxxo_recurrent',"
//       + "}]"
//       + "}"
//     )
//   );
// }catch (Conekta::Error e) {
//   System.out.println(e.details.get(0).message);
// }

//Respuesta json de API
