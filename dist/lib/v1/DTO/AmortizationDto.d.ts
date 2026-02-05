import { AmortizationStatus } from "ravcredit-core";
export declare class AmortizationItemDto {
    installmentNumber: number;
    id: string;
    dueDate: string;
    initialBalance: number;
    expectedPayment: number;
    actualPayment: number;
    principalDue: number;
    principalPaid: number;
    expectedPrincipalTax: number;
    paidPrincipalTax: number;
    interest: number;
    interestPaid: number;
    expectedInterestTax: number;
    paidInterestTax: number;
    totalPayment: number;
    capital: number;
    finalBalance: number;
    status: AmortizationStatus;
}
export declare class AmortizationDto {
    id?: string;
    items: AmortizationItemDto[];
}
