import {IsArray, IsBoolean, IsNumber, IsOptional, IsString, Validate, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {
  cIDCAccountConfigDto,
  cIDCAccountPropsDto,
  cIDCClientQueryDto,
  cIDCDataPiiDto,
  cIDCMntryCycleDto,
  cIDCMntryPymtAllDto,
  cIDCMntryPymtAllPaidTotalDto,
  cIDCMntryPymtDueDto,
  cIDCMntryPymtDueTaxDto,
  cIDCMntryPymtOpenDto,
  cIDCMntryPymtPaidDto,
  cIDCMntryPymtPymtDto,
  cIDCMsgDto,
  cIDCOxxoRefItemDto,
  cIDCOxxoRefPymtMthDto,
  cIDCRefCustInfoDto,
  cIDCRefItemsDto,
  cIDCRefPymtMethodDto,
  cIDCTxnRowExtrasDto
} from "../util/Constants.js";
import {IsStringOrNumber} from '../core/Validators.js';

export class IDCDataPiiDto {
    @IsString()
    icc: string | number = "";

    @IsString()
    rfc: string = "";

    @IsString()
    city: string = "";

    @IsString()
    curp: string = "";

    @IsString()
    imei: string | number = "";

    @IsString()
    name: string = "";

    @IsString()
    term: string | number = "";

    @IsString()
    brand: string = "";

    @IsString()
    email: string = "";

    @IsString()
    model: string = "";

    @IsString()
    phone: string | number = "";

    @IsOptional()
    score: any;

    @IsString()
    state: string = "";

    @IsString()
    amount: string | number = "";

    @IsString()
    colony: string = "";

    @IsOptional()
    estado: any;

    @IsString()
    gender: string = "";

    @IsString()
    period: string = "";

    @IsString()
    street: string = "";

    @IsString()
    num_ext: string | number = "";

    @IsString()
    num_int: string = "";

    @IsString()
    zipcode: string | number = "";

    @IsString()
    financed: string | number = "";

    @IsString()
    house_is: string = "";

    @IsString()
    lastname: string = "";

    @IsString()
    type_job: string = "";

    @IsString()
    birthdate: string = "";

    @IsString()
    birthstate: string = "";

    @IsString()
    dicio_data: string = "";

    @IsOptional()
    dicio_step: any;

    @IsString()
    secondname: string = "";

    @IsString()
    nationality: string = "";

    @IsString()
    seller_name: string = "";

    @IsString()
    down_payment: string | number = "";

    @IsString()
    municipality: string = "";

    @IsString()
    score_no_hit: string = "";

    @IsString()
    study_degree: string = "";

    @IsString()
    branch_office: string | number = "";

    @IsOptional()
    identity_data: any;

    @IsString()
    interest_rate: string | bigint = "";

    @IsString()
    marital_status: string = "";

    @IsString()
    monthly_income: string | number = "";

    @IsString()
    motherlastname: string = "";

    @IsString()
    score_rcc_fico: string = "";

    @IsOptional()
    identity_selfie: any;

    @IsString()
    amount_by_period: string | bigint = "";

    @IsOptional()
    identity_id_back: any;

    @IsOptional()
    identity_id_front: any;

    @IsString()
    economic_dependents: string = "";

    @IsOptional()
    identity_id_request: any;

    @IsOptional()
    identity_verification: any;

    @IsString()
    is_address_ine_currently_live: string | boolean = "";
}

export class IDCAccountPropsDto {
    @IsString()
    clabe: string | number = "";

    @IsString()
    pagaqui: string | number = "";

    @IsString()
    start_date: string = "";

    @IsNumber()
    expected_disbursed: number = 0;

    @IsString()
    reference_pagaaqui: string = "";

    @IsNumber()
    principal_disbursed: number = 0;

    @IsNumber()
    amount_commission_opening: number = 0;
}

export class IDCAccountConfigDto {
    @IsString()
    contract: string = "";

    @IsString()
    credit_type: string = "";

    @IsString()
    periodicity: string = "";

    @IsNumber()
    installments: number = 0;

    @IsString()
    interest_base: string = "";

    @IsNumber()
    interest_rate: number = 0;

    @IsNumber()
    interest_arrears: number = 0;

    @IsNumber()
    commission_opening: number = 0;
}

export class IDCAccountDto {
    @IsNumber()
    id: number = 0;

    @IsNumber()
    group: number = 0;

    @IsNumber()
    company: number = 0;

    @IsNumber()
    client: number = 0;

    @IsString()
    created_at: string = "";

    @IsString()
    currency: string | number = "";

    @IsString()
    status: string = "";

    @ValidateNested()
    @Type(() => IDCAccountPropsDto)
    properties: IDCAccountPropsDto = cIDCAccountPropsDto;

    @IsNumber()
    product: number = 0;

    @IsString()
    enabled: string | number = "";

    @ValidateNested()
    @Type(() => IDCAccountConfigDto)
    config: IDCAccountConfigDto = cIDCAccountConfigDto;

    @IsNumber()
    amount: number = 0;

    @IsString()
    type: string = "";

    @IsString()
    identifier: string = "";

    @IsString()
    start_at: string = "";

    @IsOptional()
    el: any;

    @IsString()
    client_id: string | number = "";
}

export class IDCTxnRowExtrasDto {
    @IsString()
    reference: string = "";

    @IsString()
    transaction: string = "";
}

export class IDCTxnRowDto {
    @IsString()
    id: string = "";

    @IsString()
    created_at: string = "";

    @IsNumber()
    seq: number = 0;

    @IsString()
    created: string = "";

    @IsString()
    last4: string = "";

    @IsOptional()
    response: any;

    @IsString()
    transaction_id: string = "";

    @IsString()
    contrapart: string = "";

    @IsString()
    reference: string = "";

    @IsOptional()
    external_reference: any;

    @ValidateNested()
    @Type(() => IDCTxnRowExtrasDto)
    extras: IDCTxnRowExtrasDto = cIDCTxnRowExtrasDto;

    @IsString()
    name: string = "";

    @IsNumber()
    debit: number = 0;

    @IsNumber()
    credit: number = 0;

    @IsNumber()
    amount: number = 0;
}

// export interface IDCTxnRow {
//   id: string,
//   created_at: string,
//   seq: number,
//   created: string,
//   last4: string,
//   response: any,
//   transaction_id: string,
//   contrapart: string,
//   reference: string,
//   external_reference: any,
//   extras: IDCTxnRowExtras,
//   name: string,
//   debit: number,
//   credit: number,
//   amount: number
// }

export class IDCTxnHeaderDto {
    @IsString()
    name: string = "";

    @IsString()
    type: string = "";

    @IsOptional()
    @IsString()
    label?: string = "";

    @IsOptional()
    @IsString()
    money?: string = "";

    @IsOptional()
    @IsString()
    format?: string = "";
}

// export interface IDCTxnHeader {
//   name: string,
//   type: string,
//   label?: string,
//   money?: string,
//   format?: string
// }

export class IDCTxnDto {
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => IDCTxnRowDto)
    rows: IDCTxnRowDto[] = [];

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => IDCTxnHeaderDto)
    headers: IDCTxnHeaderDto[] = [];
}

// export interface IDCTxn {
//   rows: IDCTxnRow[],
//   headers: IDCTxnHeader[]
// }

export class IDCMntryCycleDto {
    @IsString()
    date: string = "";

    @IsNumber()
    late: number = 0;

    @IsNumber()
    paid: number = 0;

    @IsOptional()
    @IsString()
    @IsBoolean()
    past: string | boolean = "";

    @IsString()
    @IsNumber()
    cycle: string | number = "";

    @IsNumber()
    amount: number = 0;

    @IsOptional()
    detail: any;

    @IsString()
    status: string = "";
}

// export interface IDCMntryCycle {
//   date: string,
//   late: number,
//   paid: number,
//   past: string | boolean,
//   cycle: string | number,
//   amount: number,
//   detail: any,
//   status: string
// }

export class IDCMntryPymtAllPaidTotalDto {
    @IsString()
    amount: string = "";

    @IsString()
    cycles: string = "";
}

// export interface IDCMntryPymtAllPaidTotal {
//   amount: string,
//   cycles: string
// }

export class IDCMntryPymtAllDto {
    @IsNumber()
    late: number = 0;

    @IsNumber()
    total: number = 0;

    @IsNumber()
    va_cp: number = 0;

    @IsNumber()
    actual: number = 0;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => IDCMntryCycleDto)
    cycles: IDCMntryCycleDto[] = [];

    @IsNumber()
    vencido: number = 0;

    @ValidateNested()
    @Type(() => IDCMntryPymtAllPaidTotalDto)
    paid_total: IDCMntryPymtAllPaidTotalDto = cIDCMntryPymtAllPaidTotalDto;

    @IsNumber()
    total_amount: number = 0;
}

// export interface IDCMntryPymtAll {
//   late: number,
//   total: number,
//   va_cp: number,
//   actual: number,
//   cycles: IDCMntryCycle[],
//   vencido: number,
//   paid_total: IDCMntryPymtAllPaidTotal,
//   total_amount: number
// }

export class IDCMntryPymtDueDto {
    @IsNumber()
    total: number = 0;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => IDCMntryCycleDto)
    cycles: IDCMntryCycleDto[] = [];

    @ValidateNested()
    @Type(() => IDCMntryCycleDto)
    new_cycle: IDCMntryCycleDto = cIDCMntryCycleDto;

    @ValidateNested()
    @Type(() => IDCMntryCycleDto)
    old_cycle: IDCMntryCycleDto = cIDCMntryCycleDto;

    @IsNumber()
    total_amount: number = 0;
}

// export interface IDCMntryPymtDue {
//   total: number,
//   cycles: IDCMntryCycle[],
//   new_cycle: IDCMntryCycle,
//   old_cycle: IDCMntryCycle,
//   total_amount: number
// }

export class IDCMntryPymtOpenDto extends IDCMntryPymtDueDto {
}

export class IDCMntryPymtPaidDto {
    @IsNumber()
    total: number = 0;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => IDCMntryCycleDto)
    cycles: IDCMntryCycleDto[] | any[] = [];

    @IsOptional()
    new_cycle: any;

    @IsOptional()
    old_cycle: any;

    @IsNumber()
    total_amount: number = 0;
}

// export interface IDCMntryPymtPaid {
//   total: number,
//   cycles: IDCMntryCycle[] | any[],
//   new_cycle: any,
//   old_cycle: any,
//   total_amount: number
// }

export class IDCMntryPymtDueTaxDto {
    @IsNumber()
    expected: number = 0;
}

// export interface IDCMntryPymtDueTax {
//   expected: number;
// }

export class IDCMntryPymtPymtDto {
    @IsNumber()
    paid: number = 0;

    @IsNumber()
    expected: number = 0;
}

// export interface IDCMntryPymtPymt {
//   paid: number,
//   expected: number
// }

export class IDCMntryPymtCalDto {
    @ValidateNested()
    @Type(() => IDCMntryPymtDueDto)
    due: IDCMntryPymtDueDto = cIDCMntryPymtDueDto;

    @IsString()
    date: string = "";

    @IsString()
    past: string = "";

    @IsNumber()
    cycle: number = 0;

    @IsNumber()
    balance: number = 0;

    @ValidateNested()
    @Type(() => IDCMntryPymtDueTaxDto)
    due_tax: IDCMntryPymtDueTaxDto = cIDCMntryPymtDueTaxDto;

    @ValidateNested()
    @Type(() => IDCMntryPymtPymtDto)
    payment: IDCMntryPymtPymtDto = cIDCMntryPymtPymtDto;

    @ValidateNested()
    @Type(() => IDCMntryPymtPymtDto)
    interest: IDCMntryPymtPymtDto = cIDCMntryPymtPymtDto;

    @ValidateNested()
    @Type(() => IDCMntryPymtPymtDto)
    principal: IDCMntryPymtPymtDto = cIDCMntryPymtPymtDto;

    @ValidateNested()
    @Type(() => IDCMntryPymtPymtDto)
    payment_tax: IDCMntryPymtPymtDto = cIDCMntryPymtPymtDto;

    @ValidateNested()
    @Type(() => IDCMntryPymtPymtDto)
    interest_tax: IDCMntryPymtPymtDto = cIDCMntryPymtPymtDto;

    @IsNumber()
    final_balance: number = 0;

    @ValidateNested()
    @Type(() => IDCMntryPymtPymtDto)
    payment_total: IDCMntryPymtPymtDto = cIDCMntryPymtPymtDto;

    @ValidateNested()
    @Type(() => IDCMntryPymtPymtDto)
    principal_tax: IDCMntryPymtPymtDto = cIDCMntryPymtPymtDto;
}

// export interface IDCMntryPymtCal {
//   due: IDCMntryPymtDue,
//   date: string,
//   past: string,
//   cycle: number,
//   balance: number,
//   due_tax: IDCMntryPymtDueTax,
//   payment: IDCMntryPymtPymt,
//   interest: IDCMntryPymtPymt,
//   principal: IDCMntryPymtPymt,
//   payment_tax: IDCMntryPymtPymt,
//   interest_tax: IDCMntryPymtPymt,
//   final_balance: number,
//   payment_total: IDCMntryPymtPymt,
//   principal_tax: IDCMntryPymtPymt
// }

export class IDCMntryPymtDto {
    @ValidateNested()
    @Type(() => IDCMntryPymtAllDto)
    all: IDCMntryPymtAllDto = cIDCMntryPymtAllDto;

    @ValidateNested()
    @Type(() => IDCMntryPymtDueDto)
    due: IDCMntryPymtDueDto = cIDCMntryPymtDueDto;

    @ValidateNested()
    @Type(() => IDCMntryPymtOpenDto)
    open: IDCMntryPymtOpenDto = cIDCMntryPymtOpenDto;

    @ValidateNested()
    @Type(() => IDCMntryPymtPaidDto)
    paid: IDCMntryPymtPaidDto = cIDCMntryPymtPaidDto;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => IDCMntryPymtCalDto)
    payment_calendar: IDCMntryPymtCalDto[] = [];
}

export class IDCDataDto {
    @IsNumber()
    id: number = 0;

    @IsNumber()
    company: number = 0;

    @IsString()
    status: string = "";

    @IsString()
    external_id: string = "";

    @ValidateNested()
    @Type(() => IDCDataPiiDto)
    pii: IDCDataPiiDto = cIDCDataPiiDto;

    @IsNumber()
    client_type: number = 0;

    @IsString()
    created_at: string = "";

    @IsNumber()
    pd: number = 0;

    @IsString()
    username: string = "";

    @IsNumber()
    group: number = 0;
}

// export interface IDCData {
//   id: number,
//   company: number,
//   status: string,
//   external_id: string,
//   pii: IDCDataPii,
//   client_type: number,
//   created_at: string,
//   pd: number,
//   username: string,
//   group: number
// }

export class IDCMsgDto {
    @IsNumber()
    code: number = 0;

    @IsNumber()
    total: number = 0;

    @ValidateNested({each: true})
    data: IDCDataDto[] | IDCAccountDto[] |
        IDCTxnDto[] | IDCMntryPymtDto = [];
}

export class DynamiCoreDto {
    @IsString()
    status: string = "";

    @ValidateNested({each: true})
    @Type(() => IDCMsgDto)
    message: IDCMsgDto = cIDCMsgDto;
}

/**
 * Interfaces for request (base)
 * */
export class IDCClientObjFilterDto {
    @IsString()
    name: string = "";

    @IsArray()
    filter: (string | number)[] = [];

    @IsString()
    type: string = "";

    @IsString()
    sort: string = "";
}

// export interface IDCClientObjFilter {
//   name: string,
//   filter: string[] | number[],
//   type: string,
//   sort: string
// }

export class IDCClientQueryDto {
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => IDCClientObjFilterDto)
    filters: IDCClientObjFilterDto[] = [];
}

// export interface IDCClientQuery {
//   filters: IDCClientObjFilter[];
// }

export class IDCClientPiiFilterDto {
    @IsNumber()
    limit: number = 0;

    @IsNumber()
    page: number = 0;

    @ValidateNested()
    @Type(() => IDCClientQueryDto)
    query: IDCClientQueryDto = cIDCClientQueryDto;
}

// export interface IDCClientPiiFilter {
//   limit: number,
//   page: number,
//   query: IDCClientQuery
// }

/**
 * DynamiCore Reference Interface
 * */
export class IDCRefCustInfoDto {
    @IsString()
    name: string = "";

    @IsString()
    email: string = "";

    @IsString()
    phone: string | number = "";
}

export class IDCOxxoRefItemDto {
    @IsString()
    name: string = "";

    @IsNumber()
    unit_price: number = 0;

    @IsNumber()
    quantity: number = 0;
}

export class IDCOxxoRefPymtMthDto {
    @IsString()
    type: string = "";
}

export class IDCOxxoRefDto {
    @IsNumber()
    account: number = 0;

    @IsNumber()
    operation: number = 0;

    @ValidateNested()
    @Type(() => IDCRefCustInfoDto)
    customer_info: IDCRefCustInfoDto = cIDCRefCustInfoDto;

    @ValidateNested()
    @Type(() => IDCOxxoRefItemDto)
    items: IDCOxxoRefItemDto = cIDCOxxoRefItemDto;

    @ValidateNested()
    @Type(() => IDCOxxoRefPymtMthDto)
    payment_method: IDCOxxoRefPymtMthDto = cIDCOxxoRefPymtMthDto;
}

// export interface IDCRefCustInfo {
//   name: string,
//   email: string,
//   phone: string | number
// }
//
// export interface IDCOxxoRefItem {
//   name: string,
//   unit_price: number,
//   quantity: number
// }
//
// export interface IDCOxxoRefPymtMth {
//   type: string;
// }
//
// export interface IDCOxxoRef {
//   account: number,
//   operation: number,
//   customer_info: IDCRefCustInfo,
//   items: IDCOxxoRefItem,
//   payment_method: IDCOxxoRefPymtMth
// }

/**
 * DynamiCore Reference
 * */

export class IDCRefItemsDto {
    @IsString()
    name: string = "";

    @IsNumber()
    unit_price: number = 0;

    @IsNumber()
    quantity: number = 0;
}

export class IDCRefPymtMethodDto {
    @IsString()
    type: string = "";
}

export class IDCReferenceDto {
    @IsNumber()
    account: number = 0;

    @IsNumber()
    operation: number = 0;

    @ValidateNested()
    @Type(() => IDCRefCustInfoDto)
    customer_info: IDCRefCustInfoDto = cIDCRefCustInfoDto;

    @ValidateNested()
    @Type(() => IDCRefItemsDto)
    items: IDCRefItemsDto = cIDCRefItemsDto;

    @ValidateNested()
    @Type(() => IDCRefPymtMethodDto)
    payment_method: IDCRefPymtMethodDto = cIDCRefPymtMethodDto;
}

export class IDCDataAccountDto {
    @IsNumber() id: number = 0;
    @IsNumber() group: number = 0;
    @IsNumber() company: number = 0;
    @IsNumber() client: number = 0;
    @IsNumber() created_at: string = "";
    @Validate(IsStringOrNumber) currency: string | number = "";
    @IsString() status: string = "";
    @Type(() => IDCAccountPropsDto) properties: IDCAccountPropsDto = cIDCAccountPropsDto;
    @IsNumber() product: number = 0;
    @Validate(IsStringOrNumber) enabled: string | number = "";
    @Type(() => IDCAccountConfigDto) config: IDCAccountConfigDto = cIDCAccountConfigDto;
    @IsNumber() amount: number = 0;
    @IsString() type: string = "";
    @IsString() identifier: string = "";
    @IsString() start_at: string = "";
    el: any;
    @Validate(IsStringOrNumber) client_id: string | number = "";
}

export class IDCClientDto {
    @IsNumber() id: number = 0;
    @IsNumber() company: number = 0;
    @IsString() status: string = "";
    @IsString() external_id: string = "";
    @Type(() => IDCDataPiiDto) pii: IDCDataPiiDto = cIDCDataPiiDto;
    @IsNumber() client_type: number = 0;
    @IsString() created_at: string = "";
    @IsNumber() pd: number = 0;
    @IsString() username: string = "";
    @IsNumber() group: number = 0;
}

export class IDynamiCoreDto {
    @IsString() status: string;
    @Type(() => IDCMsgDto) message: IDCMsgDto;
}

export class DynamicCoreDto {
}

export class IDCFilterQryFiltersDto {
    @IsString() name: string;
    filter: any[];
    @IsString() type: string;
    @IsString() sort: string;
}

export class IDCFilterQueryDto {
    @Type(() => IDCFilterQryFiltersDto)
    @ValidateNested({each: true})
    filters: IDCFilterQryFiltersDto[];
}

export class IDCFilterCurpDto {
    @IsString()
    curp: string;
}

export class IDCFilterIdDto {
    @IsString()
    id: string;
}

export class IDCFilterDto {
    @IsNumber() limit: number;
    @IsNumber() page: number;
    @Type(() => IDCFilterQueryDto)
    query: IDCFilterQueryDto;
}

export class pIDCDataDto {
    @Type(() => IDCDataPiiDto)
    @ValidateNested({each: true})
    pii: IDCDataPiiDto;

    @IsNumber()
    client_type: number;
}

export class IDCNewReferenceDto {
    @IsString()
    id: string;

    @Type(() => IDCReferenceDto)
    @ValidateNested({each: true})
    data: IDCReferenceDto;

    @IsNumber()
    @IsOptional()
    date: number;
}

export class IDCWebhookExtrasDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsOptional()
    @IsString()
    sign: string | null;

    @IsNumber()
    @IsOptional()
    clave: number;

    @IsNumber()
    @IsOptional()
    monto: number;

    @IsOptional()
    @IsNumber()
    amount: number | null;

    @IsNumber()
    @IsOptional()
    estado: number;

    @IsNumber()
    @IsOptional()
    status: number;

    @IsString()
    @IsOptional()
    empresa: string;

    @IsNumber()
    @IsOptional()
    order_id: number;

    @IsString()
    @IsOptional()
    reference: string;

    @IsNumber()
    @IsOptional()
    created_at: number;

    @IsOptional()
    @IsString()
    enterprise: string | null;

    @IsOptional()
    @IsString()
    payer_name: string | null;

    @IsNumber()
    @IsOptional()
    updated_at: number;

    @IsOptional()
    @IsString()
    folioOrigen: string | null;

    @IsOptional()
    @IsString()
    pay_concept: string | null;

    @IsString()
    @IsOptional()
    transaction: string;

    @IsOptional()
    @IsString()
    cause_return: string | null;

    @IsString()
    @IsOptional()
    claveRastreo: string;

    @IsString()
    @IsOptional()
    conceptoPago: string;

    @IsOptional()
    @IsString()
    origin_folio: string | null;

    @IsNumber()
    @IsOptional()
    payment_type: number;

    @IsOptional()
    @IsString()
    tracking_key: string | null;

    @IsOptional()
    @IsString()
    payer_account: string | null;

    @IsNumber()
    @IsOptional()
    fechaOperacion: number;

    @IsNumber()
    @IsOptional()
    operation_date: number;

    @IsOptional()
    @IsString()
    payer_curp_rfc: string | null;

    @IsOptional()
    @IsString()
    causaDevolucion: string | null;

    @IsString()
    @IsOptional()
    cuentaOrdenante: string;

    @IsString()
    @IsOptional()
    nombreOrdenante: string;

    @IsOptional()
    @IsString()
    beneficiary_name: string | null;

    @IsString()
    @IsOptional()
    rfcCurpOrdenante: string;

    @IsOptional()
    @IsString()
    beneficiary_email: string | null;

    @IsOptional()
    @IsString()
    error_description: string | null;

    @IsNumber()
    @IsOptional()
    numeric_reference: number;

    @IsString()
    @IsOptional()
    cuentaBeneficiario: string;

    @IsString()
    @IsOptional()
    nombreBeneficiario: string;

    @IsNumber()
    @IsOptional()
    payer_account_type: number;

    @IsNumber()
    @IsOptional()
    referenciaNumerica: number;

    @IsOptional()
    @IsString()
    beneficiary_account: string | null;

    @IsNumber()
    @IsOptional()
    operant_institution: number;

    @IsString()
    @IsOptional()
    rfcCurpBeneficiario: string;

    @IsNumber()
    @IsOptional()
    tipoCuentaOrdenante: number;

    @IsOptional()
    @IsString()
    beneficiary_curp_rfc: string | null;

    @IsNumber()
    @IsOptional()
    institucionOrdenante: number;

    @IsNumber()
    @IsOptional()
    tipoCuentaBeneficiario: number;

    @IsNumber()
    @IsOptional()
    counterpart_institution: number;

    @IsNumber()
    @IsOptional()
    institucionBeneficiaria: number;

    @IsNumber()
    @IsOptional()
    beneficiary_account_type: number;
}

export class IDCWebhookProcessorDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @IsOptional()
    amount?: number;

    @IsNumber()
    @IsOptional()
    operation?: number;

    @Type(() => IDCWebhookExtrasDto)
    @ValidateNested({each: true})
    extras?: IDCWebhookExtrasDto;

    @IsString()
    @IsOptional()
    account?: string;

    @IsString()
    @IsOptional()
    reference?: string;

    @IsString()
    @IsOptional()
    created_at?: string;

    @IsString()
    @IsOptional()
    external_reference?: string;
}

export class IDCWebhookCustomerStatusDto {
    @IsString() status: string;
    @IsString() client: string;
}

export interface IDCCharge {
    barcode_url: string;
    currency: string;
    expires_at: number;
    object: string;
    quantity: number;
    reference: string;
    service_name: string;
    store_name: string;
    type: string;
    unit_price: number;
}

export interface IDCReferenceConfig {
    contract: string;
    credit_type: string;
    periodicity: string;
    installments: number;
    interest_base: string;
    interest_rate: number;
    interest_arrears: number;
    commission_opening: number;
}

export interface IDCGeneratedReference {
    account: number;
    amount: number;
    active: number;
    channel: string;
    charge: IDCCharge;
    company: number;
    id: string;
    operation: number;
    config?: IDCReferenceConfig;
}

export interface IDCResponse {
    code: number,
    total: number,
    data: IDCGeneratedReference[]
}

export interface IDCMessage {
    code: number,
    message: string,
    data: IDCResponse
}

export interface IDCMain {
    status: string;
    message: IDCMessage;
}

export enum eWebhookDynamicType {
    IDCWebhookProcessorDTO = 'IDCWebhookProcessorDTO',
    IDCDataDTO = 'IDCDataDTO',
    IDCWebhookCustomerStatusDTO = 'IDCWebhookCustomerStatusDTO',
    IDCDataAccountDTO = 'IDCDataAccountDTO'
}

export class TransactionDto {
    @IsString()
    transaction: string;
}

export class IDCMsgTransactionDto {
    @IsNumber() code: number;

    @IsArray()
    data: [number, {
        transaction: string
    }] | object;
}

export class IDynamiCoreTransactionDto {
    @IsString() status: string;
    @Type(() => IDCMsgTransactionDto) message: IDCMsgTransactionDto;
}
