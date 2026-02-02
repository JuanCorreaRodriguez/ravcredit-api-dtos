var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CustomerInfoDto } from "./CustomerDto.js";
import { MetadataDto } from './PaymentLinkDto.js';
import { cAlternaChargesDataMethodsDto, cAlternaLineItemsDto, cChargesDto, cCustomerInfoDto, cMetadataDto } from '../util/Constants.js';
export var eAlternaStores;
(function (eAlternaStores) {
    eAlternaStores["7Eleven"] = "7 Eleven";
    eAlternaStores["Ahorro"] = "Farmacias del Ahorro";
    eAlternaStores["CircleK"] = "CIRCLE K";
    eAlternaStores["Elektra"] = "Tiendas Extra";
    eAlternaStores["Benavides"] = "Farmacia Benavides";
    eAlternaStores["Soriana"] = "Soriana";
    eAlternaStores["Waldos"] = "WALDO'S";
    eAlternaStores["Eleczion"] = "ELECZION";
    eAlternaStores["Kiosko"] = "Super Kiosko";
    eAlternaStores["FBazar"] = "Farmacias Bazar";
    eAlternaStores["Wolworth"] = "Wolworth";
    eAlternaStores["DelSol"] = "Del Sol";
    eAlternaStores["Yepas"] = "Yepas";
    eAlternaStores["FDios"] = "Farmacias De Dios";
    eAlternaStores["FNosarco"] = "Farmacias Nosarco";
    eAlternaStores["FSantaCruz"] = "Farmacias Santa Cruz";
    eAlternaStores["FCentro"] = "Farmacentro";
    eAlternaStores["FGyM"] = "Farmacias GyM";
    eAlternaStores["FFcoAsis"] = "Farmacias San Francisco de Asis";
    eAlternaStores["FUnion"] = "Farmacias Union";
    eAlternaStores["FZapotlan"] = "Farmacias Zapotlan";
    eAlternaStores["Ftodo"] = "Farmatodo";
    eAlternaStores["AlSuper"] = "Al Super";
})(eAlternaStores || (eAlternaStores = {}));
export class AlternaLineItemsDataDto {
    line_item = "";
    parent_id = "";
    metadata;
    antifraud_info;
}
__decorate([
    IsString()
], AlternaLineItemsDataDto.prototype, "line_item", void 0);
__decorate([
    IsString()
], AlternaLineItemsDataDto.prototype, "parent_id", void 0);
__decorate([
    IsOptional()
], AlternaLineItemsDataDto.prototype, "metadata", void 0);
__decorate([
    IsOptional()
], AlternaLineItemsDataDto.prototype, "antifraud_info", void 0);
export class AlternaLineItemsDto {
    object = "";
    has_more = false;
    total = 0;
    data = [];
}
__decorate([
    IsString()
], AlternaLineItemsDto.prototype, "object", void 0);
__decorate([
    IsBoolean()
], AlternaLineItemsDto.prototype, "has_more", void 0);
__decorate([
    IsNumber()
], AlternaLineItemsDto.prototype, "total", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => AlternaLineItemsDataDto)
], AlternaLineItemsDto.prototype, "data", void 0);
export class AlternaChargesDataMethodsDto {
    service_name = "";
    barcode_url = "";
    object = "";
    type = "";
    expires_at = 0;
    store_names = [];
    store_name = "";
    reference = "";
}
__decorate([
    IsString()
], AlternaChargesDataMethodsDto.prototype, "service_name", void 0);
__decorate([
    IsString()
], AlternaChargesDataMethodsDto.prototype, "barcode_url", void 0);
__decorate([
    IsString()
], AlternaChargesDataMethodsDto.prototype, "object", void 0);
__decorate([
    IsString()
], AlternaChargesDataMethodsDto.prototype, "type", void 0);
__decorate([
    IsNumber()
], AlternaChargesDataMethodsDto.prototype, "expires_at", void 0);
__decorate([
    IsArray(),
    IsString({ each: true })
], AlternaChargesDataMethodsDto.prototype, "store_names", void 0);
__decorate([
    IsString()
], AlternaChargesDataMethodsDto.prototype, "store_name", void 0);
__decorate([
    IsString()
], AlternaChargesDataMethodsDto.prototype, "reference", void 0);
export class ChargesDataDto {
    id = "";
    livemode = false;
    created_at = 0;
    currency = "";
    payment_method = cAlternaChargesDataMethodsDto;
    object = "";
    description = "";
    status = "";
    amount = 0;
    fee = 0;
    customer_id = "";
    order_id = "";
}
__decorate([
    IsString()
], ChargesDataDto.prototype, "id", void 0);
__decorate([
    IsBoolean()
], ChargesDataDto.prototype, "livemode", void 0);
__decorate([
    IsNumber()
], ChargesDataDto.prototype, "created_at", void 0);
__decorate([
    IsString()
], ChargesDataDto.prototype, "currency", void 0);
__decorate([
    ValidateNested(),
    Type(() => AlternaChargesDataMethodsDto)
], ChargesDataDto.prototype, "payment_method", void 0);
__decorate([
    IsString()
], ChargesDataDto.prototype, "object", void 0);
__decorate([
    IsString()
], ChargesDataDto.prototype, "description", void 0);
__decorate([
    IsString()
], ChargesDataDto.prototype, "status", void 0);
__decorate([
    IsNumber()
], ChargesDataDto.prototype, "amount", void 0);
__decorate([
    IsNumber()
], ChargesDataDto.prototype, "fee", void 0);
__decorate([
    IsString()
], ChargesDataDto.prototype, "customer_id", void 0);
__decorate([
    IsString()
], ChargesDataDto.prototype, "order_id", void 0);
export class ChargesDto {
    object = "";
    has_more = false;
    total = 0;
    data = [];
}
__decorate([
    IsString()
], ChargesDto.prototype, "object", void 0);
__decorate([
    IsBoolean()
], ChargesDto.prototype, "has_more", void 0);
__decorate([
    IsNumber()
], ChargesDto.prototype, "total", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => ChargesDataDto)
], ChargesDto.prototype, "data", void 0);
export class PayOrderResAlternaDto {
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
    line_items = cAlternaLineItemsDto;
    charges = cChargesDto;
}
__decorate([
    IsBoolean()
], PayOrderResAlternaDto.prototype, "livemode", void 0);
__decorate([
    IsNumber()
], PayOrderResAlternaDto.prototype, "amount", void 0);
__decorate([
    IsString()
], PayOrderResAlternaDto.prototype, "currency", void 0);
__decorate([
    IsString()
], PayOrderResAlternaDto.prototype, "payment_status", void 0);
__decorate([
    IsNumber()
], PayOrderResAlternaDto.prototype, "amount_refunded", void 0);
__decorate([
    ValidateNested(),
    Type(() => CustomerInfoDto)
], PayOrderResAlternaDto.prototype, "customer_info", void 0);
__decorate([
    IsString()
], PayOrderResAlternaDto.prototype, "object", void 0);
__decorate([
    IsString()
], PayOrderResAlternaDto.prototype, "id", void 0);
__decorate([
    ValidateNested(),
    Type(() => MetadataDto)
], PayOrderResAlternaDto.prototype, "metadata", void 0);
__decorate([
    IsBoolean()
], PayOrderResAlternaDto.prototype, "is_refundable", void 0);
__decorate([
    IsNumber()
], PayOrderResAlternaDto.prototype, "created_at", void 0);
__decorate([
    IsNumber()
], PayOrderResAlternaDto.prototype, "updated_at", void 0);
__decorate([
    ValidateNested(),
    Type(() => AlternaLineItemsDto)
], PayOrderResAlternaDto.prototype, "line_items", void 0);
__decorate([
    ValidateNested(),
    Type(() => ChargesDto)
], PayOrderResAlternaDto.prototype, "charges", void 0);
//
// export interface iAlternaLineItemsData {
//   line_item: string,
//   "parent_id": string
//   "metadata": any,
//   "antifraud_info": any
// }
//
// export interface iAlternaLineItems {
//   "object": string;
//   "has_more": boolean;
//   "total": number;
//   "data": iAlternaLineItemsData[];
// }
//
// export interface iAlternaChargesDataMethods {
//   "service_name": string
//   "barcode_url": string
//   "object": string
//   "type": string
//   "expires_at": number
//   "store_names": string[],
//   "store_name": string
//   "reference": string
// }
//
// export interface iChargesData {
//   "id": string
//   "livemode": boolean
//   "created_at": number
//   "currency": string
//   "payment_method": iAlternaChargesDataMethods,
//   "object": string
//   "description": string
//   "status": string
//   "amount": number
//   "fee": number
//   "customer_id": string
//   "order_id": string
// }
//
//
// export interface iCharges {
//   "object": string,
//   "has_more": boolean
//   "total": number
//   "data": iChargesData[]
// }
//
// export interface iPayOrderResAlterna {
//   "livemode": boolean,
//   "amount": number
//   "currency": string
//   "payment_status": string
//   "amount_refunded": number
//   "customer_info": iCustomerInfo,
//   "object": string
//   "id": string
//   "metadata": iMetadata,
//   "is_refundable": boolean
//   "created_at": number
//   "updated_at": number
//   "line_items": iAlternaLineItems,
//   "charges": iCharges
// }
//
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
