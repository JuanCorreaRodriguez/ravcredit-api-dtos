import { BusinessDeadlineDto } from './BusinessDeadlineDto.js';
export declare class FinancialProgressDto {
    id: string;
    amount: number;
    date: number;
}
export declare class FinancialDto {
    dayCut?: number;
    deadlines: BusinessDeadlineDto;
    finalDate?: number;
    finalPayment?: number;
    financed: number;
    initDate: number;
    initial: number;
    provider: string;
    total: number;
    progress?: FinancialProgressDto[];
    pendingOf: string[];
    interest?: number;
    weeklyPayment: number;
    nextPayment?: number;
    commission_opening?: number;
    credit_type?: string;
    interest_arrears?: number;
    interest_rate?: number;
    amount_commission_opening?: number;
    principal_disbursed?: number;
    expected_disbursed?: number;
    clabe: string;
}
