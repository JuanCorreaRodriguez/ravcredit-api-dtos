import {IsArray, IsEnum, IsNumber, IsOptional, IsString} from 'class-validator';
import {AmortizationStatus} from "ravcredit-core";

export class AmortizationItemDto {
    @IsNumber()
    installmentNumber: number = 0;

    @IsString()
    id: string = "";

    @IsString()
    dueDate: string = "";

    @IsNumber()
    initialBalance: number = 0;

    @IsNumber()
    expectedPayment: number = 0;

    @IsNumber()
    actualPayment: number = 0;

    @IsNumber()
    principalDue: number = 0;

    @IsNumber()
    principalPaid: number = 0;

    @IsNumber()
    expectedPrincipalTax: number = 0;

    @IsNumber()
    paidPrincipalTax: number = 0;

    @IsNumber()
    interest: number = 0;

    @IsNumber()
    interestPaid: number = 0;

    @IsNumber()
    expectedInterestTax: number = 0;

    @IsNumber()
    paidInterestTax: number = 0;

    @IsNumber()
    totalPayment: number = 0;

    @IsNumber()
    capital: number = 0;

    @IsNumber()
    finalBalance: number = 0;

    @IsEnum(AmortizationStatus)
    status: AmortizationStatus = AmortizationStatus.PENDING;
}

export class AmortizationDto {
    @IsString()
    @IsOptional()
    id?: string = "";

    @IsString()
    client_id: string = "";

    @IsString()
    contract_id: string = "";

    @IsArray()
    items: AmortizationItemDto[] = [];
}