var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CustomerInfoDto } from './CustomerDto.js';
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { MetadataDto } from './PaymentLinkDto.js';
import { cChargesDto, cCustomerInfoDto, cMetadataDto, cOxxoLineItemsOrderDataDto, cOxxoLineItemsOrderDto } from '../util/Constants.js';
import { Type } from 'class-transformer';
import { ChargesDto } from './PayOrderResAlternaDto.js';
export const OxxoPay = 'OxxoPay';
export class OxxoLineItemsOrderDataDto {
    name = "";
    unit_price = 0;
    quantity = 0;
    object = "";
    id = "";
    parent_id = "";
    metadata;
    antifraud_info;
}
__decorate([
    IsString()
], OxxoLineItemsOrderDataDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], OxxoLineItemsOrderDataDto.prototype, "unit_price", void 0);
__decorate([
    IsNumber()
], OxxoLineItemsOrderDataDto.prototype, "quantity", void 0);
__decorate([
    IsString()
], OxxoLineItemsOrderDataDto.prototype, "object", void 0);
__decorate([
    IsString()
], OxxoLineItemsOrderDataDto.prototype, "id", void 0);
__decorate([
    IsString()
], OxxoLineItemsOrderDataDto.prototype, "parent_id", void 0);
__decorate([
    IsOptional()
], OxxoLineItemsOrderDataDto.prototype, "metadata", void 0);
__decorate([
    IsOptional()
], OxxoLineItemsOrderDataDto.prototype, "antifraud_info", void 0);
export class OxxoLineItemsOrderDto {
    object = "";
    has_more = false;
    total = 0;
    data = cOxxoLineItemsOrderDataDto;
}
__decorate([
    IsString()
], OxxoLineItemsOrderDto.prototype, "object", void 0);
__decorate([
    IsBoolean()
], OxxoLineItemsOrderDto.prototype, "has_more", void 0);
__decorate([
    IsNumber()
], OxxoLineItemsOrderDto.prototype, "total", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => OxxoLineItemsOrderDataDto)
], OxxoLineItemsOrderDto.prototype, "data", void 0);
export class OxxoPaymentOrderMethodDto {
    service_name = "";
    barcode_url = "";
    object = "";
    type = "";
    expires_at = 0;
    store_name = "";
    reference = "";
}
__decorate([
    IsString()
], OxxoPaymentOrderMethodDto.prototype, "service_name", void 0);
__decorate([
    IsString()
], OxxoPaymentOrderMethodDto.prototype, "barcode_url", void 0);
__decorate([
    IsString()
], OxxoPaymentOrderMethodDto.prototype, "object", void 0);
__decorate([
    IsString()
], OxxoPaymentOrderMethodDto.prototype, "type", void 0);
__decorate([
    IsNumber()
], OxxoPaymentOrderMethodDto.prototype, "expires_at", void 0);
__decorate([
    IsString()
], OxxoPaymentOrderMethodDto.prototype, "store_name", void 0);
__decorate([
    IsString()
], OxxoPaymentOrderMethodDto.prototype, "reference", void 0);
export class PayOrderResOxxoDto {
    livemode = false;
    amount = 0;
    currency = "";
    payment_status = "";
    amount_refunded = 0;
    customer_info = cCustomerInfoDto;
    object = "";
    id = "";
    metadata = cMetadataDto;
    is_refundable = false;
    created_at = 0;
    updated_at = 0;
    line_items = cOxxoLineItemsOrderDto;
    charges = cChargesDto;
    reference = "";
}
__decorate([
    IsBoolean()
], PayOrderResOxxoDto.prototype, "livemode", void 0);
__decorate([
    IsNumber()
], PayOrderResOxxoDto.prototype, "amount", void 0);
__decorate([
    IsString()
], PayOrderResOxxoDto.prototype, "currency", void 0);
__decorate([
    IsString()
], PayOrderResOxxoDto.prototype, "payment_status", void 0);
__decorate([
    IsNumber()
], PayOrderResOxxoDto.prototype, "amount_refunded", void 0);
__decorate([
    ValidateNested(),
    Type(() => CustomerInfoDto)
], PayOrderResOxxoDto.prototype, "customer_info", void 0);
__decorate([
    IsString()
], PayOrderResOxxoDto.prototype, "object", void 0);
__decorate([
    IsString()
], PayOrderResOxxoDto.prototype, "id", void 0);
__decorate([
    ValidateNested(),
    Type(() => MetadataDto)
], PayOrderResOxxoDto.prototype, "metadata", void 0);
__decorate([
    IsBoolean()
], PayOrderResOxxoDto.prototype, "is_refundable", void 0);
__decorate([
    IsNumber()
], PayOrderResOxxoDto.prototype, "created_at", void 0);
__decorate([
    IsNumber()
], PayOrderResOxxoDto.prototype, "updated_at", void 0);
__decorate([
    ValidateNested(),
    Type(() => OxxoLineItemsOrderDto)
], PayOrderResOxxoDto.prototype, "line_items", void 0);
__decorate([
    ValidateNested(),
    Type(() => ChargesDto)
], PayOrderResOxxoDto.prototype, "charges", void 0);
__decorate([
    IsString()
], PayOrderResOxxoDto.prototype, "reference", void 0);
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
