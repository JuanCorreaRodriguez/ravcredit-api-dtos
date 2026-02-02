export declare class IDCDataPiiDto {
    icc: string | number;
    rfc: string;
    city: string;
    curp: string;
    imei: string | number;
    name: string;
    term: string | number;
    brand: string;
    email: string;
    model: string;
    phone: string | number;
    score: any;
    state: string;
    amount: string | number;
    colony: string;
    estado: any;
    gender: string;
    period: string;
    street: string;
    num_ext: string | number;
    num_int: string;
    zipcode: string | number;
    financed: string | number;
    house_is: string;
    lastname: string;
    type_job: string;
    birthdate: string;
    birthstate: string;
    dicio_data: string;
    dicio_step: any;
    secondname: string;
    nationality: string;
    seller_name: string;
    down_payment: string | number;
    municipality: string;
    score_no_hit: string;
    study_degree: string;
    branch_office: string | number;
    identity_data: any;
    interest_rate: string | bigint;
    marital_status: string;
    monthly_income: string | number;
    motherlastname: string;
    score_rcc_fico: string;
    identity_selfie: any;
    amount_by_period: string | bigint;
    identity_id_back: any;
    identity_id_front: any;
    economic_dependents: string;
    identity_id_request: any;
    identity_verification: any;
    is_address_ine_currently_live: string | boolean;
}
export declare class IDCAccountPropsDto {
    clabe: string | number;
    pagaqui: string | number;
    start_date: string;
    expected_disbursed: number;
    reference_pagaaqui: string;
    principal_disbursed: number;
    amount_commission_opening: number;
}
export declare class IDCAccountConfigDto {
    contract: string;
    credit_type: string;
    periodicity: string;
    installments: number;
    interest_base: string;
    interest_rate: number;
    interest_arrears: number;
    commission_opening: number;
}
export declare class IDCAccountDto {
    id: number;
    group: number;
    company: number;
    client: number;
    created_at: string;
    currency: string | number;
    status: string;
    properties: IDCAccountPropsDto;
    product: number;
    enabled: string | number;
    config: IDCAccountConfigDto;
    amount: number;
    type: string;
    identifier: string;
    start_at: string;
    el: any;
    client_id: string | number;
}
export declare class IDCTxnRowExtrasDto {
    reference: string;
    transaction: string;
}
export declare class IDCTxnRowDto {
    id: string;
    created_at: string;
    seq: number;
    created: string;
    last4: string;
    response: any;
    transaction_id: string;
    contrapart: string;
    reference: string;
    external_reference: any;
    extras: IDCTxnRowExtrasDto;
    name: string;
    debit: number;
    credit: number;
    amount: number;
}
export declare class IDCTxnHeaderDto {
    name: string;
    type: string;
    label?: string;
    money?: string;
    format?: string;
}
export declare class IDCTxnDto {
    rows: IDCTxnRowDto[];
    headers: IDCTxnHeaderDto[];
}
export declare class IDCMntryCycleDto {
    date: string;
    late: number;
    paid: number;
    past: string | boolean;
    cycle: string | number;
    amount: number;
    detail: any;
    status: string;
}
export declare class IDCMntryPymtAllPaidTotalDto {
    amount: string;
    cycles: string;
}
export declare class IDCMntryPymtAllDto {
    late: number;
    total: number;
    va_cp: number;
    actual: number;
    cycles: IDCMntryCycleDto[];
    vencido: number;
    paid_total: IDCMntryPymtAllPaidTotalDto;
    total_amount: number;
}
export declare class IDCMntryPymtDueDto {
    total: number;
    cycles: IDCMntryCycleDto[];
    new_cycle: IDCMntryCycleDto;
    old_cycle: IDCMntryCycleDto;
    total_amount: number;
}
export declare class IDCMntryPymtOpenDto extends IDCMntryPymtDueDto {
}
export declare class IDCMntryPymtPaidDto {
    total: number;
    cycles: IDCMntryCycleDto[] | any[];
    new_cycle: any;
    old_cycle: any;
    total_amount: number;
}
export declare class IDCMntryPymtDueTaxDto {
    expected: number;
}
export declare class IDCMntryPymtPymtDto {
    paid: number;
    expected: number;
}
export declare class IDCMntryPymtCalDto {
    due: IDCMntryPymtDueDto;
    date: string;
    past: string;
    cycle: number;
    balance: number;
    due_tax: IDCMntryPymtDueTaxDto;
    payment: IDCMntryPymtPymtDto;
    interest: IDCMntryPymtPymtDto;
    principal: IDCMntryPymtPymtDto;
    payment_tax: IDCMntryPymtPymtDto;
    interest_tax: IDCMntryPymtPymtDto;
    final_balance: number;
    payment_total: IDCMntryPymtPymtDto;
    principal_tax: IDCMntryPymtPymtDto;
}
export declare class IDCMntryPymtDto {
    all: IDCMntryPymtAllDto;
    due: IDCMntryPymtDueDto;
    open: IDCMntryPymtOpenDto;
    paid: IDCMntryPymtPaidDto;
    payment_calendar: IDCMntryPymtCalDto[];
}
export declare class IDCDataDto {
    id: number;
    company: number;
    status: string;
    external_id: string;
    pii: IDCDataPiiDto;
    client_type: number;
    created_at: string;
    pd: number;
    username: string;
    group: number;
}
export declare class IDCMsgDto {
    code: number;
    total: number;
    data: IDCDataDto[] | IDCAccountDto[] | IDCTxnDto[] | IDCMntryPymtDto;
}
export declare class DynamiCoreDto {
    status: string;
    message: IDCMsgDto;
}
/**
 * Interfaces for request (base)
 * */
export declare class IDCClientObjFilterDto {
    name: string;
    filter: (string | number)[];
    type: string;
    sort: string;
}
export declare class IDCClientQueryDto {
    filters: IDCClientObjFilterDto[];
}
export declare class IDCClientPiiFilterDto {
    limit: number;
    page: number;
    query: IDCClientQueryDto;
}
/**
 * DynamiCore Reference Interface
 * */
export declare class IDCRefCustInfoDto {
    name: string;
    email: string;
    phone: string | number;
}
export declare class IDCOxxoRefItemDto {
    name: string;
    unit_price: number;
    quantity: number;
}
export declare class IDCOxxoRefPymtMthDto {
    type: string;
}
export declare class IDCOxxoRefDto {
    account: number;
    operation: number;
    customer_info: IDCRefCustInfoDto;
    items: IDCOxxoRefItemDto;
    payment_method: IDCOxxoRefPymtMthDto;
}
/**
 * DynamiCore Reference
 * */
export declare class IDCRefItemsDto {
    name: string;
    unit_price: number;
    quantity: number;
}
export declare class IDCRefPymtMethodDto {
    type: string;
}
export declare class IDCReferenceDto {
    account: number;
    operation: number;
    customer_info: IDCRefCustInfoDto;
    items: IDCRefItemsDto;
    payment_method: IDCRefPymtMethodDto;
}
export declare class IDCDataAccountDto {
    id: number;
    group: number;
    company: number;
    client: number;
    created_at: string;
    currency: string | number;
    status: string;
    properties: IDCAccountPropsDto;
    product: number;
    enabled: string | number;
    config: IDCAccountConfigDto;
    amount: number;
    type: string;
    identifier: string;
    start_at: string;
    el: any;
    client_id: string | number;
}
export declare class IDCClientDto {
    id: number;
    company: number;
    status: string;
    external_id: string;
    pii: IDCDataPiiDto;
    client_type: number;
    created_at: string;
    pd: number;
    username: string;
    group: number;
}
export declare class IDynamiCoreDto {
    status: string;
    message: IDCMsgDto;
}
export declare class DynamicCoreDto {
}
export declare class IDCFilterQryFiltersDto {
    name: string;
    filter: any[];
    type: string;
    sort: string;
}
export declare class IDCFilterQueryDto {
    filters: IDCFilterQryFiltersDto[];
}
export declare class IDCFilterCurpDto {
    curp: string;
}
export declare class IDCFilterIdDto {
    id: string;
}
export declare class IDCFilterDto {
    limit: number;
    page: number;
    query: IDCFilterQueryDto;
}
export declare class pIDCDataDto {
    pii: IDCDataPiiDto;
    client_type: number;
}
export declare class IDCNewReferenceDto {
    id: string;
    data: IDCReferenceDto;
    date: number;
}
export declare class IDCWebhookExtrasDto {
    id: number;
    sign: string | null;
    clave: number;
    monto: number;
    amount: number | null;
    estado: number;
    status: number;
    empresa: string;
    order_id: number;
    reference: string;
    created_at: number;
    enterprise: string | null;
    payer_name: string | null;
    updated_at: number;
    folioOrigen: string | null;
    pay_concept: string | null;
    transaction: string;
    cause_return: string | null;
    claveRastreo: string;
    conceptoPago: string;
    origin_folio: string | null;
    payment_type: number;
    tracking_key: string | null;
    payer_account: string | null;
    fechaOperacion: number;
    operation_date: number;
    payer_curp_rfc: string | null;
    causaDevolucion: string | null;
    cuentaOrdenante: string;
    nombreOrdenante: string;
    beneficiary_name: string | null;
    rfcCurpOrdenante: string;
    beneficiary_email: string | null;
    error_description: string | null;
    numeric_reference: number;
    cuentaBeneficiario: string;
    nombreBeneficiario: string;
    payer_account_type: number;
    referenciaNumerica: number;
    beneficiary_account: string | null;
    operant_institution: number;
    rfcCurpBeneficiario: string;
    tipoCuentaOrdenante: number;
    beneficiary_curp_rfc: string | null;
    institucionOrdenante: number;
    tipoCuentaBeneficiario: number;
    counterpart_institution: number;
    institucionBeneficiaria: number;
    beneficiary_account_type: number;
}
export declare class IDCWebhookProcessorDto {
    name?: string;
    amount?: number;
    operation?: number;
    extras?: IDCWebhookExtrasDto;
    account?: string;
    reference?: string;
    created_at?: string;
    external_reference?: string;
}
export declare class IDCWebhookCustomerStatusDto {
    status: string;
    client: string;
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
    code: number;
    total: number;
    data: IDCGeneratedReference[];
}
export interface IDCMessage {
    code: number;
    message: string;
    data: IDCResponse;
}
export interface IDCMain {
    status: string;
    message: IDCMessage;
}
export declare enum eWebhookDynamicType {
    IDCWebhookProcessorDTO = "IDCWebhookProcessorDTO",
    IDCDataDTO = "IDCDataDTO",
    IDCWebhookCustomerStatusDTO = "IDCWebhookCustomerStatusDTO",
    IDCDataAccountDTO = "IDCDataAccountDTO"
}
export declare class TransactionDto {
    transaction: string;
}
export declare class IDCMsgTransactionDto {
    code: number;
    data: [
        number,
        {
            transaction: string;
        }
    ] | object;
}
export declare class IDynamiCoreTransactionDto {
    status: string;
    message: IDCMsgTransactionDto;
}
