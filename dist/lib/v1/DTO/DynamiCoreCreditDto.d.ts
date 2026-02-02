/**
 * Credit DTO
 * */
export declare class IDCCreditPropertiesDTO {
    start_date: string;
    principal_disbursed: number;
    expected_disbursed: number;
    amount_commission_opening: number;
}
export declare class IDCCreditConfigDTO {
    contract: string;
    credit_type: string;
    interest_rate: number;
    installments: number;
    periodicity: string;
    interest_base: string;
    commission_opening: number;
    financed_amount: number;
    interest_arrears: number;
}
export declare class IDCCreditDTO {
    id: number;
    group: number;
    company: number;
    client: number;
    created_at: string;
    currency: string;
    status: string;
    properties: IDCCreditPropertiesDTO;
    product: number;
    enabled: string;
    config: IDCCreditConfigDTO;
    amount: number;
    type: string;
    identifier: null | string;
    start_at: null | string;
}
export declare class IDCPaymentDto {
    operation: number;
    account: string;
    date: string;
    amount: number;
    external_id: string;
    dst_account: string;
    extras: object;
    reference: string;
}
