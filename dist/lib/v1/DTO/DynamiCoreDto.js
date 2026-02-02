var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, Validate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { cIDCAccountConfigDto, cIDCAccountPropsDto, cIDCClientQueryDto, cIDCDataPiiDto, cIDCMntryCycleDto, cIDCMntryPymtAllDto, cIDCMntryPymtAllPaidTotalDto, cIDCMntryPymtDueDto, cIDCMntryPymtDueTaxDto, cIDCMntryPymtOpenDto, cIDCMntryPymtPaidDto, cIDCMntryPymtPymtDto, cIDCMsgDto, cIDCOxxoRefItemDto, cIDCOxxoRefPymtMthDto, cIDCRefCustInfoDto, cIDCRefItemsDto, cIDCRefPymtMethodDto, cIDCTxnRowExtrasDto } from "../util/Constants.js";
import { IsStringOrNumber } from '../core/Validators.js';
export class IDCDataPiiDto {
    icc = "";
    rfc = "";
    city = "";
    curp = "";
    imei = "";
    name = "";
    term = "";
    brand = "";
    email = "";
    model = "";
    phone = "";
    score;
    state = "";
    amount = "";
    colony = "";
    estado;
    gender = "";
    period = "";
    street = "";
    num_ext = "";
    num_int = "";
    zipcode = "";
    financed = "";
    house_is = "";
    lastname = "";
    type_job = "";
    birthdate = "";
    birthstate = "";
    dicio_data = "";
    dicio_step;
    secondname = "";
    nationality = "";
    seller_name = "";
    down_payment = "";
    municipality = "";
    score_no_hit = "";
    study_degree = "";
    branch_office = "";
    identity_data;
    interest_rate = "";
    marital_status = "";
    monthly_income = "";
    motherlastname = "";
    score_rcc_fico = "";
    identity_selfie;
    amount_by_period = "";
    identity_id_back;
    identity_id_front;
    economic_dependents = "";
    identity_id_request;
    identity_verification;
    is_address_ine_currently_live = "";
}
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "icc", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "rfc", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "city", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "curp", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "imei", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "name", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "term", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "brand", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "email", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "model", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "phone", void 0);
__decorate([
    IsOptional()
], IDCDataPiiDto.prototype, "score", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "state", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "amount", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "colony", void 0);
__decorate([
    IsOptional()
], IDCDataPiiDto.prototype, "estado", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "gender", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "period", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "street", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "num_ext", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "num_int", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "zipcode", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "financed", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "house_is", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "lastname", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "type_job", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "birthdate", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "birthstate", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "dicio_data", void 0);
__decorate([
    IsOptional()
], IDCDataPiiDto.prototype, "dicio_step", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "secondname", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "nationality", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "seller_name", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "down_payment", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "municipality", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "score_no_hit", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "study_degree", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "branch_office", void 0);
__decorate([
    IsOptional()
], IDCDataPiiDto.prototype, "identity_data", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "interest_rate", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "marital_status", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "monthly_income", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "motherlastname", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "score_rcc_fico", void 0);
__decorate([
    IsOptional()
], IDCDataPiiDto.prototype, "identity_selfie", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "amount_by_period", void 0);
__decorate([
    IsOptional()
], IDCDataPiiDto.prototype, "identity_id_back", void 0);
__decorate([
    IsOptional()
], IDCDataPiiDto.prototype, "identity_id_front", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "economic_dependents", void 0);
__decorate([
    IsOptional()
], IDCDataPiiDto.prototype, "identity_id_request", void 0);
__decorate([
    IsOptional()
], IDCDataPiiDto.prototype, "identity_verification", void 0);
__decorate([
    IsString()
], IDCDataPiiDto.prototype, "is_address_ine_currently_live", void 0);
export class IDCAccountPropsDto {
    clabe = "";
    pagaqui = "";
    start_date = "";
    expected_disbursed = 0;
    reference_pagaaqui = "";
    principal_disbursed = 0;
    amount_commission_opening = 0;
}
__decorate([
    IsString()
], IDCAccountPropsDto.prototype, "clabe", void 0);
__decorate([
    IsString()
], IDCAccountPropsDto.prototype, "pagaqui", void 0);
__decorate([
    IsString()
], IDCAccountPropsDto.prototype, "start_date", void 0);
__decorate([
    IsNumber()
], IDCAccountPropsDto.prototype, "expected_disbursed", void 0);
__decorate([
    IsString()
], IDCAccountPropsDto.prototype, "reference_pagaaqui", void 0);
__decorate([
    IsNumber()
], IDCAccountPropsDto.prototype, "principal_disbursed", void 0);
__decorate([
    IsNumber()
], IDCAccountPropsDto.prototype, "amount_commission_opening", void 0);
export class IDCAccountConfigDto {
    contract = "";
    credit_type = "";
    periodicity = "";
    installments = 0;
    interest_base = "";
    interest_rate = 0;
    interest_arrears = 0;
    commission_opening = 0;
}
__decorate([
    IsString()
], IDCAccountConfigDto.prototype, "contract", void 0);
__decorate([
    IsString()
], IDCAccountConfigDto.prototype, "credit_type", void 0);
__decorate([
    IsString()
], IDCAccountConfigDto.prototype, "periodicity", void 0);
__decorate([
    IsNumber()
], IDCAccountConfigDto.prototype, "installments", void 0);
__decorate([
    IsString()
], IDCAccountConfigDto.prototype, "interest_base", void 0);
__decorate([
    IsNumber()
], IDCAccountConfigDto.prototype, "interest_rate", void 0);
__decorate([
    IsNumber()
], IDCAccountConfigDto.prototype, "interest_arrears", void 0);
__decorate([
    IsNumber()
], IDCAccountConfigDto.prototype, "commission_opening", void 0);
export class IDCAccountDto {
    id = 0;
    group = 0;
    company = 0;
    client = 0;
    created_at = "";
    currency = "";
    status = "";
    properties = cIDCAccountPropsDto;
    product = 0;
    enabled = "";
    config = cIDCAccountConfigDto;
    amount = 0;
    type = "";
    identifier = "";
    start_at = "";
    el;
    client_id = "";
}
__decorate([
    IsNumber()
], IDCAccountDto.prototype, "id", void 0);
__decorate([
    IsNumber()
], IDCAccountDto.prototype, "group", void 0);
__decorate([
    IsNumber()
], IDCAccountDto.prototype, "company", void 0);
__decorate([
    IsNumber()
], IDCAccountDto.prototype, "client", void 0);
__decorate([
    IsString()
], IDCAccountDto.prototype, "created_at", void 0);
__decorate([
    IsString()
], IDCAccountDto.prototype, "currency", void 0);
__decorate([
    IsString()
], IDCAccountDto.prototype, "status", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCAccountPropsDto)
], IDCAccountDto.prototype, "properties", void 0);
__decorate([
    IsNumber()
], IDCAccountDto.prototype, "product", void 0);
__decorate([
    IsString()
], IDCAccountDto.prototype, "enabled", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCAccountConfigDto)
], IDCAccountDto.prototype, "config", void 0);
__decorate([
    IsNumber()
], IDCAccountDto.prototype, "amount", void 0);
__decorate([
    IsString()
], IDCAccountDto.prototype, "type", void 0);
__decorate([
    IsString()
], IDCAccountDto.prototype, "identifier", void 0);
__decorate([
    IsString()
], IDCAccountDto.prototype, "start_at", void 0);
__decorate([
    IsOptional()
], IDCAccountDto.prototype, "el", void 0);
__decorate([
    IsString()
], IDCAccountDto.prototype, "client_id", void 0);
export class IDCTxnRowExtrasDto {
    reference = "";
    transaction = "";
}
__decorate([
    IsString()
], IDCTxnRowExtrasDto.prototype, "reference", void 0);
__decorate([
    IsString()
], IDCTxnRowExtrasDto.prototype, "transaction", void 0);
export class IDCTxnRowDto {
    id = "";
    created_at = "";
    seq = 0;
    created = "";
    last4 = "";
    response;
    transaction_id = "";
    contrapart = "";
    reference = "";
    external_reference;
    extras = cIDCTxnRowExtrasDto;
    name = "";
    debit = 0;
    credit = 0;
    amount = 0;
}
__decorate([
    IsString()
], IDCTxnRowDto.prototype, "id", void 0);
__decorate([
    IsString()
], IDCTxnRowDto.prototype, "created_at", void 0);
__decorate([
    IsNumber()
], IDCTxnRowDto.prototype, "seq", void 0);
__decorate([
    IsString()
], IDCTxnRowDto.prototype, "created", void 0);
__decorate([
    IsString()
], IDCTxnRowDto.prototype, "last4", void 0);
__decorate([
    IsOptional()
], IDCTxnRowDto.prototype, "response", void 0);
__decorate([
    IsString()
], IDCTxnRowDto.prototype, "transaction_id", void 0);
__decorate([
    IsString()
], IDCTxnRowDto.prototype, "contrapart", void 0);
__decorate([
    IsString()
], IDCTxnRowDto.prototype, "reference", void 0);
__decorate([
    IsOptional()
], IDCTxnRowDto.prototype, "external_reference", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCTxnRowExtrasDto)
], IDCTxnRowDto.prototype, "extras", void 0);
__decorate([
    IsString()
], IDCTxnRowDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], IDCTxnRowDto.prototype, "debit", void 0);
__decorate([
    IsNumber()
], IDCTxnRowDto.prototype, "credit", void 0);
__decorate([
    IsNumber()
], IDCTxnRowDto.prototype, "amount", void 0);
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
    name = "";
    type = "";
    label = "";
    money = "";
    format = "";
}
__decorate([
    IsString()
], IDCTxnHeaderDto.prototype, "name", void 0);
__decorate([
    IsString()
], IDCTxnHeaderDto.prototype, "type", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCTxnHeaderDto.prototype, "label", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCTxnHeaderDto.prototype, "money", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCTxnHeaderDto.prototype, "format", void 0);
// export interface IDCTxnHeader {
//   name: string,
//   type: string,
//   label?: string,
//   money?: string,
//   format?: string
// }
export class IDCTxnDto {
    rows = [];
    headers = [];
}
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => IDCTxnRowDto)
], IDCTxnDto.prototype, "rows", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => IDCTxnHeaderDto)
], IDCTxnDto.prototype, "headers", void 0);
// export interface IDCTxn {
//   rows: IDCTxnRow[],
//   headers: IDCTxnHeader[]
// }
export class IDCMntryCycleDto {
    date = "";
    late = 0;
    paid = 0;
    past = "";
    cycle = "";
    amount = 0;
    detail;
    status = "";
}
__decorate([
    IsString()
], IDCMntryCycleDto.prototype, "date", void 0);
__decorate([
    IsNumber()
], IDCMntryCycleDto.prototype, "late", void 0);
__decorate([
    IsNumber()
], IDCMntryCycleDto.prototype, "paid", void 0);
__decorate([
    IsOptional(),
    IsString(),
    IsBoolean()
], IDCMntryCycleDto.prototype, "past", void 0);
__decorate([
    IsString(),
    IsNumber()
], IDCMntryCycleDto.prototype, "cycle", void 0);
__decorate([
    IsNumber()
], IDCMntryCycleDto.prototype, "amount", void 0);
__decorate([
    IsOptional()
], IDCMntryCycleDto.prototype, "detail", void 0);
__decorate([
    IsString()
], IDCMntryCycleDto.prototype, "status", void 0);
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
    amount = "";
    cycles = "";
}
__decorate([
    IsString()
], IDCMntryPymtAllPaidTotalDto.prototype, "amount", void 0);
__decorate([
    IsString()
], IDCMntryPymtAllPaidTotalDto.prototype, "cycles", void 0);
// export interface IDCMntryPymtAllPaidTotal {
//   amount: string,
//   cycles: string
// }
export class IDCMntryPymtAllDto {
    late = 0;
    total = 0;
    va_cp = 0;
    actual = 0;
    cycles = [];
    vencido = 0;
    paid_total = cIDCMntryPymtAllPaidTotalDto;
    total_amount = 0;
}
__decorate([
    IsNumber()
], IDCMntryPymtAllDto.prototype, "late", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtAllDto.prototype, "total", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtAllDto.prototype, "va_cp", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtAllDto.prototype, "actual", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => IDCMntryCycleDto)
], IDCMntryPymtAllDto.prototype, "cycles", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtAllDto.prototype, "vencido", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtAllPaidTotalDto)
], IDCMntryPymtAllDto.prototype, "paid_total", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtAllDto.prototype, "total_amount", void 0);
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
    total = 0;
    cycles = [];
    new_cycle = cIDCMntryCycleDto;
    old_cycle = cIDCMntryCycleDto;
    total_amount = 0;
}
__decorate([
    IsNumber()
], IDCMntryPymtDueDto.prototype, "total", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => IDCMntryCycleDto)
], IDCMntryPymtDueDto.prototype, "cycles", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryCycleDto)
], IDCMntryPymtDueDto.prototype, "new_cycle", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryCycleDto)
], IDCMntryPymtDueDto.prototype, "old_cycle", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtDueDto.prototype, "total_amount", void 0);
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
    total = 0;
    cycles = [];
    new_cycle;
    old_cycle;
    total_amount = 0;
}
__decorate([
    IsNumber()
], IDCMntryPymtPaidDto.prototype, "total", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => IDCMntryCycleDto)
], IDCMntryPymtPaidDto.prototype, "cycles", void 0);
__decorate([
    IsOptional()
], IDCMntryPymtPaidDto.prototype, "new_cycle", void 0);
__decorate([
    IsOptional()
], IDCMntryPymtPaidDto.prototype, "old_cycle", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtPaidDto.prototype, "total_amount", void 0);
// export interface IDCMntryPymtPaid {
//   total: number,
//   cycles: IDCMntryCycle[] | any[],
//   new_cycle: any,
//   old_cycle: any,
//   total_amount: number
// }
export class IDCMntryPymtDueTaxDto {
    expected = 0;
}
__decorate([
    IsNumber()
], IDCMntryPymtDueTaxDto.prototype, "expected", void 0);
// export interface IDCMntryPymtDueTax {
//   expected: number;
// }
export class IDCMntryPymtPymtDto {
    paid = 0;
    expected = 0;
}
__decorate([
    IsNumber()
], IDCMntryPymtPymtDto.prototype, "paid", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtPymtDto.prototype, "expected", void 0);
// export interface IDCMntryPymtPymt {
//   paid: number,
//   expected: number
// }
export class IDCMntryPymtCalDto {
    due = cIDCMntryPymtDueDto;
    date = "";
    past = "";
    cycle = 0;
    balance = 0;
    due_tax = cIDCMntryPymtDueTaxDto;
    payment = cIDCMntryPymtPymtDto;
    interest = cIDCMntryPymtPymtDto;
    principal = cIDCMntryPymtPymtDto;
    payment_tax = cIDCMntryPymtPymtDto;
    interest_tax = cIDCMntryPymtPymtDto;
    final_balance = 0;
    payment_total = cIDCMntryPymtPymtDto;
    principal_tax = cIDCMntryPymtPymtDto;
}
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtDueDto)
], IDCMntryPymtCalDto.prototype, "due", void 0);
__decorate([
    IsString()
], IDCMntryPymtCalDto.prototype, "date", void 0);
__decorate([
    IsString()
], IDCMntryPymtCalDto.prototype, "past", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtCalDto.prototype, "cycle", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtCalDto.prototype, "balance", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtDueTaxDto)
], IDCMntryPymtCalDto.prototype, "due_tax", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtPymtDto)
], IDCMntryPymtCalDto.prototype, "payment", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtPymtDto)
], IDCMntryPymtCalDto.prototype, "interest", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtPymtDto)
], IDCMntryPymtCalDto.prototype, "principal", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtPymtDto)
], IDCMntryPymtCalDto.prototype, "payment_tax", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtPymtDto)
], IDCMntryPymtCalDto.prototype, "interest_tax", void 0);
__decorate([
    IsNumber()
], IDCMntryPymtCalDto.prototype, "final_balance", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtPymtDto)
], IDCMntryPymtCalDto.prototype, "payment_total", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtPymtDto)
], IDCMntryPymtCalDto.prototype, "principal_tax", void 0);
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
    all = cIDCMntryPymtAllDto;
    due = cIDCMntryPymtDueDto;
    open = cIDCMntryPymtOpenDto;
    paid = cIDCMntryPymtPaidDto;
    payment_calendar = [];
}
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtAllDto)
], IDCMntryPymtDto.prototype, "all", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtDueDto)
], IDCMntryPymtDto.prototype, "due", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtOpenDto)
], IDCMntryPymtDto.prototype, "open", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCMntryPymtPaidDto)
], IDCMntryPymtDto.prototype, "paid", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => IDCMntryPymtCalDto)
], IDCMntryPymtDto.prototype, "payment_calendar", void 0);
export class IDCDataDto {
    id = 0;
    company = 0;
    status = "";
    external_id = "";
    pii = cIDCDataPiiDto;
    client_type = 0;
    created_at = "";
    pd = 0;
    username = "";
    group = 0;
}
__decorate([
    IsNumber()
], IDCDataDto.prototype, "id", void 0);
__decorate([
    IsNumber()
], IDCDataDto.prototype, "company", void 0);
__decorate([
    IsString()
], IDCDataDto.prototype, "status", void 0);
__decorate([
    IsString()
], IDCDataDto.prototype, "external_id", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCDataPiiDto)
], IDCDataDto.prototype, "pii", void 0);
__decorate([
    IsNumber()
], IDCDataDto.prototype, "client_type", void 0);
__decorate([
    IsString()
], IDCDataDto.prototype, "created_at", void 0);
__decorate([
    IsNumber()
], IDCDataDto.prototype, "pd", void 0);
__decorate([
    IsString()
], IDCDataDto.prototype, "username", void 0);
__decorate([
    IsNumber()
], IDCDataDto.prototype, "group", void 0);
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
    code = 0;
    total = 0;
    data = [];
}
__decorate([
    IsNumber()
], IDCMsgDto.prototype, "code", void 0);
__decorate([
    IsNumber()
], IDCMsgDto.prototype, "total", void 0);
__decorate([
    ValidateNested({ each: true })
], IDCMsgDto.prototype, "data", void 0);
export class DynamiCoreDto {
    status = "";
    message = cIDCMsgDto;
}
__decorate([
    IsString()
], DynamiCoreDto.prototype, "status", void 0);
__decorate([
    ValidateNested({ each: true }),
    Type(() => IDCMsgDto)
], DynamiCoreDto.prototype, "message", void 0);
/**
 * Interfaces for request (base)
 * */
export class IDCClientObjFilterDto {
    name = "";
    filter = [];
    type = "";
    sort = "";
}
__decorate([
    IsString()
], IDCClientObjFilterDto.prototype, "name", void 0);
__decorate([
    IsArray()
], IDCClientObjFilterDto.prototype, "filter", void 0);
__decorate([
    IsString()
], IDCClientObjFilterDto.prototype, "type", void 0);
__decorate([
    IsString()
], IDCClientObjFilterDto.prototype, "sort", void 0);
// export interface IDCClientObjFilter {
//   name: string,
//   filter: string[] | number[],
//   type: string,
//   sort: string
// }
export class IDCClientQueryDto {
    filters = [];
}
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => IDCClientObjFilterDto)
], IDCClientQueryDto.prototype, "filters", void 0);
// export interface IDCClientQuery {
//   filters: IDCClientObjFilter[];
// }
export class IDCClientPiiFilterDto {
    limit = 0;
    page = 0;
    query = cIDCClientQueryDto;
}
__decorate([
    IsNumber()
], IDCClientPiiFilterDto.prototype, "limit", void 0);
__decorate([
    IsNumber()
], IDCClientPiiFilterDto.prototype, "page", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCClientQueryDto)
], IDCClientPiiFilterDto.prototype, "query", void 0);
// export interface IDCClientPiiFilter {
//   limit: number,
//   page: number,
//   query: IDCClientQuery
// }
/**
 * DynamiCore Reference Interface
 * */
export class IDCRefCustInfoDto {
    name = "";
    email = "";
    phone = "";
}
__decorate([
    IsString()
], IDCRefCustInfoDto.prototype, "name", void 0);
__decorate([
    IsString()
], IDCRefCustInfoDto.prototype, "email", void 0);
__decorate([
    IsString()
], IDCRefCustInfoDto.prototype, "phone", void 0);
export class IDCOxxoRefItemDto {
    name = "";
    unit_price = 0;
    quantity = 0;
}
__decorate([
    IsString()
], IDCOxxoRefItemDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], IDCOxxoRefItemDto.prototype, "unit_price", void 0);
__decorate([
    IsNumber()
], IDCOxxoRefItemDto.prototype, "quantity", void 0);
export class IDCOxxoRefPymtMthDto {
    type = "";
}
__decorate([
    IsString()
], IDCOxxoRefPymtMthDto.prototype, "type", void 0);
export class IDCOxxoRefDto {
    account = 0;
    operation = 0;
    customer_info = cIDCRefCustInfoDto;
    items = cIDCOxxoRefItemDto;
    payment_method = cIDCOxxoRefPymtMthDto;
}
__decorate([
    IsNumber()
], IDCOxxoRefDto.prototype, "account", void 0);
__decorate([
    IsNumber()
], IDCOxxoRefDto.prototype, "operation", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCRefCustInfoDto)
], IDCOxxoRefDto.prototype, "customer_info", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCOxxoRefItemDto)
], IDCOxxoRefDto.prototype, "items", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCOxxoRefPymtMthDto)
], IDCOxxoRefDto.prototype, "payment_method", void 0);
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
    name = "";
    unit_price = 0;
    quantity = 0;
}
__decorate([
    IsString()
], IDCRefItemsDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], IDCRefItemsDto.prototype, "unit_price", void 0);
__decorate([
    IsNumber()
], IDCRefItemsDto.prototype, "quantity", void 0);
export class IDCRefPymtMethodDto {
    type = "";
}
__decorate([
    IsString()
], IDCRefPymtMethodDto.prototype, "type", void 0);
export class IDCReferenceDto {
    account = 0;
    operation = 0;
    customer_info = cIDCRefCustInfoDto;
    items = cIDCRefItemsDto;
    payment_method = cIDCRefPymtMethodDto;
}
__decorate([
    IsNumber()
], IDCReferenceDto.prototype, "account", void 0);
__decorate([
    IsNumber()
], IDCReferenceDto.prototype, "operation", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCRefCustInfoDto)
], IDCReferenceDto.prototype, "customer_info", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCRefItemsDto)
], IDCReferenceDto.prototype, "items", void 0);
__decorate([
    ValidateNested(),
    Type(() => IDCRefPymtMethodDto)
], IDCReferenceDto.prototype, "payment_method", void 0);
export class IDCDataAccountDto {
    id = 0;
    group = 0;
    company = 0;
    client = 0;
    created_at = "";
    currency = "";
    status = "";
    properties = cIDCAccountPropsDto;
    product = 0;
    enabled = "";
    config = cIDCAccountConfigDto;
    amount = 0;
    type = "";
    identifier = "";
    start_at = "";
    el;
    client_id = "";
}
__decorate([
    IsNumber()
], IDCDataAccountDto.prototype, "id", void 0);
__decorate([
    IsNumber()
], IDCDataAccountDto.prototype, "group", void 0);
__decorate([
    IsNumber()
], IDCDataAccountDto.prototype, "company", void 0);
__decorate([
    IsNumber()
], IDCDataAccountDto.prototype, "client", void 0);
__decorate([
    IsNumber()
], IDCDataAccountDto.prototype, "created_at", void 0);
__decorate([
    Validate(IsStringOrNumber)
], IDCDataAccountDto.prototype, "currency", void 0);
__decorate([
    IsString()
], IDCDataAccountDto.prototype, "status", void 0);
__decorate([
    Type(() => IDCAccountPropsDto)
], IDCDataAccountDto.prototype, "properties", void 0);
__decorate([
    IsNumber()
], IDCDataAccountDto.prototype, "product", void 0);
__decorate([
    Validate(IsStringOrNumber)
], IDCDataAccountDto.prototype, "enabled", void 0);
__decorate([
    Type(() => IDCAccountConfigDto)
], IDCDataAccountDto.prototype, "config", void 0);
__decorate([
    IsNumber()
], IDCDataAccountDto.prototype, "amount", void 0);
__decorate([
    IsString()
], IDCDataAccountDto.prototype, "type", void 0);
__decorate([
    IsString()
], IDCDataAccountDto.prototype, "identifier", void 0);
__decorate([
    IsString()
], IDCDataAccountDto.prototype, "start_at", void 0);
__decorate([
    Validate(IsStringOrNumber)
], IDCDataAccountDto.prototype, "client_id", void 0);
export class IDCClientDto {
    id = 0;
    company = 0;
    status = "";
    external_id = "";
    pii = cIDCDataPiiDto;
    client_type = 0;
    created_at = "";
    pd = 0;
    username = "";
    group = 0;
}
__decorate([
    IsNumber()
], IDCClientDto.prototype, "id", void 0);
__decorate([
    IsNumber()
], IDCClientDto.prototype, "company", void 0);
__decorate([
    IsString()
], IDCClientDto.prototype, "status", void 0);
__decorate([
    IsString()
], IDCClientDto.prototype, "external_id", void 0);
__decorate([
    Type(() => IDCDataPiiDto)
], IDCClientDto.prototype, "pii", void 0);
__decorate([
    IsNumber()
], IDCClientDto.prototype, "client_type", void 0);
__decorate([
    IsString()
], IDCClientDto.prototype, "created_at", void 0);
__decorate([
    IsNumber()
], IDCClientDto.prototype, "pd", void 0);
__decorate([
    IsString()
], IDCClientDto.prototype, "username", void 0);
__decorate([
    IsNumber()
], IDCClientDto.prototype, "group", void 0);
export class IDynamiCoreDto {
    status;
    message;
}
__decorate([
    IsString()
], IDynamiCoreDto.prototype, "status", void 0);
__decorate([
    Type(() => IDCMsgDto)
], IDynamiCoreDto.prototype, "message", void 0);
export class DynamicCoreDto {
}
export class IDCFilterQryFiltersDto {
    name;
    filter;
    type;
    sort;
}
__decorate([
    IsString()
], IDCFilterQryFiltersDto.prototype, "name", void 0);
__decorate([
    IsString()
], IDCFilterQryFiltersDto.prototype, "type", void 0);
__decorate([
    IsString()
], IDCFilterQryFiltersDto.prototype, "sort", void 0);
export class IDCFilterQueryDto {
    filters;
}
__decorate([
    Type(() => IDCFilterQryFiltersDto),
    ValidateNested({ each: true })
], IDCFilterQueryDto.prototype, "filters", void 0);
export class IDCFilterCurpDto {
    curp;
}
__decorate([
    IsString()
], IDCFilterCurpDto.prototype, "curp", void 0);
export class IDCFilterIdDto {
    id;
}
__decorate([
    IsString()
], IDCFilterIdDto.prototype, "id", void 0);
export class IDCFilterDto {
    limit;
    page;
    query;
}
__decorate([
    IsNumber()
], IDCFilterDto.prototype, "limit", void 0);
__decorate([
    IsNumber()
], IDCFilterDto.prototype, "page", void 0);
__decorate([
    Type(() => IDCFilterQueryDto)
], IDCFilterDto.prototype, "query", void 0);
export class pIDCDataDto {
    pii;
    client_type;
}
__decorate([
    Type(() => IDCDataPiiDto),
    ValidateNested({ each: true })
], pIDCDataDto.prototype, "pii", void 0);
__decorate([
    IsNumber()
], pIDCDataDto.prototype, "client_type", void 0);
export class IDCNewReferenceDto {
    id;
    data;
    date;
}
__decorate([
    IsString()
], IDCNewReferenceDto.prototype, "id", void 0);
__decorate([
    Type(() => IDCReferenceDto),
    ValidateNested({ each: true })
], IDCNewReferenceDto.prototype, "data", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCNewReferenceDto.prototype, "date", void 0);
export class IDCWebhookExtrasDto {
    id;
    sign;
    clave;
    monto;
    amount;
    estado;
    status;
    empresa;
    order_id;
    reference;
    created_at;
    enterprise;
    payer_name;
    updated_at;
    folioOrigen;
    pay_concept;
    transaction;
    cause_return;
    claveRastreo;
    conceptoPago;
    origin_folio;
    payment_type;
    tracking_key;
    payer_account;
    fechaOperacion;
    operation_date;
    payer_curp_rfc;
    causaDevolucion;
    cuentaOrdenante;
    nombreOrdenante;
    beneficiary_name;
    rfcCurpOrdenante;
    beneficiary_email;
    error_description;
    numeric_reference;
    cuentaBeneficiario;
    nombreBeneficiario;
    payer_account_type;
    referenciaNumerica;
    beneficiary_account;
    operant_institution;
    rfcCurpBeneficiario;
    tipoCuentaOrdenante;
    beneficiary_curp_rfc;
    institucionOrdenante;
    tipoCuentaBeneficiario;
    counterpart_institution;
    institucionBeneficiaria;
    beneficiary_account_type;
}
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "id", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "sign", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "clave", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "monto", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], IDCWebhookExtrasDto.prototype, "amount", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "estado", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "status", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "empresa", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "order_id", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "reference", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "created_at", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "enterprise", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "payer_name", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "updated_at", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "folioOrigen", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "pay_concept", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "transaction", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "cause_return", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "claveRastreo", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "conceptoPago", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "origin_folio", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "payment_type", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "tracking_key", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "payer_account", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "fechaOperacion", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "operation_date", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "payer_curp_rfc", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "causaDevolucion", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "cuentaOrdenante", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "nombreOrdenante", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "beneficiary_name", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "rfcCurpOrdenante", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "beneficiary_email", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "error_description", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "numeric_reference", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "cuentaBeneficiario", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "nombreBeneficiario", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "payer_account_type", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "referenciaNumerica", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "beneficiary_account", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "operant_institution", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "rfcCurpBeneficiario", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "tipoCuentaOrdenante", void 0);
__decorate([
    IsOptional(),
    IsString()
], IDCWebhookExtrasDto.prototype, "beneficiary_curp_rfc", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "institucionOrdenante", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "tipoCuentaBeneficiario", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "counterpart_institution", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "institucionBeneficiaria", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookExtrasDto.prototype, "beneficiary_account_type", void 0);
export class IDCWebhookProcessorDto {
    name;
    amount;
    operation;
    extras;
    account;
    reference;
    created_at;
    external_reference;
}
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookProcessorDto.prototype, "name", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookProcessorDto.prototype, "amount", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], IDCWebhookProcessorDto.prototype, "operation", void 0);
__decorate([
    Type(() => IDCWebhookExtrasDto),
    ValidateNested({ each: true })
], IDCWebhookProcessorDto.prototype, "extras", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookProcessorDto.prototype, "account", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookProcessorDto.prototype, "reference", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookProcessorDto.prototype, "created_at", void 0);
__decorate([
    IsString(),
    IsOptional()
], IDCWebhookProcessorDto.prototype, "external_reference", void 0);
export class IDCWebhookCustomerStatusDto {
    status;
    client;
}
__decorate([
    IsString()
], IDCWebhookCustomerStatusDto.prototype, "status", void 0);
__decorate([
    IsString()
], IDCWebhookCustomerStatusDto.prototype, "client", void 0);
export var eWebhookDynamicType;
(function (eWebhookDynamicType) {
    eWebhookDynamicType["IDCWebhookProcessorDTO"] = "IDCWebhookProcessorDTO";
    eWebhookDynamicType["IDCDataDTO"] = "IDCDataDTO";
    eWebhookDynamicType["IDCWebhookCustomerStatusDTO"] = "IDCWebhookCustomerStatusDTO";
    eWebhookDynamicType["IDCDataAccountDTO"] = "IDCDataAccountDTO";
})(eWebhookDynamicType || (eWebhookDynamicType = {}));
export class TransactionDto {
    transaction;
}
__decorate([
    IsString()
], TransactionDto.prototype, "transaction", void 0);
export class IDCMsgTransactionDto {
    code;
    data;
}
__decorate([
    IsNumber()
], IDCMsgTransactionDto.prototype, "code", void 0);
__decorate([
    IsArray()
], IDCMsgTransactionDto.prototype, "data", void 0);
export class IDynamiCoreTransactionDto {
    status;
    message;
}
__decorate([
    IsString()
], IDynamiCoreTransactionDto.prototype, "status", void 0);
__decorate([
    Type(() => IDCMsgTransactionDto)
], IDynamiCoreTransactionDto.prototype, "message", void 0);
