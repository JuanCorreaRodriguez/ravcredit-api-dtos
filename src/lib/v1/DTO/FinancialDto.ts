import {IsArray, IsNumber, IsOptional, IsString, Min, ValidateNested} from 'class-validator';
import {BusinessDeadlineDto} from './BusinessDeadlineDto.js';
import {Type} from 'class-transformer';

export class FinancialProgressDto {
    @IsString()
    id: string;

    @IsNumber()
    amount: number;

    @IsNumber()
    date: number;
}

export class FinancialDto {
    @IsOptional()
    @IsNumber()
    dayCut?: number;

    @ValidateNested()
    @Type(() => BusinessDeadlineDto)
    deadlines: BusinessDeadlineDto;

    @IsOptional()
    @IsNumber()
    @Min(0)
    finalDate?: number;

    @IsOptional()
    @IsNumber()
    finalPayment?: number;

    @IsNumber()
    financed: number;

    @IsNumber()
    initDate: number;

    @IsNumber()
    initial: number;

    @IsString()
    provider: string;

    @IsNumber()
    total: number;

    @IsOptional()
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => FinancialProgressDto)
    progress?: FinancialProgressDto[];

    @IsString({each: true})
    @IsArray()
    @IsOptional()
    pendingOf: string[];

    @IsOptional()
    @IsNumber()
    interest?: number;

    @IsNumber()
    weeklyPayment: number;

    @IsOptional()
    @IsNumber()
    nextPayment?: number;

    @IsOptional()
    @IsNumber()
    commission_opening?: number;

    @IsOptional()
    @IsString()
    credit_type?: string;

    @IsOptional()
    @IsNumber()
    interest_arrears?: number; // intereses moratorios dynamic

    @IsOptional()
    @IsNumber()
    interest_rate?: number; // interes credit dynamic

    @IsOptional()
    @IsNumber()
    amount_commission_opening?: number; // comision por apertura dynamic

    @IsOptional()
    @IsNumber()
    principal_disbursed?: number;

    @IsOptional()
    @IsNumber()
    expected_disbursed?: number;

    @IsOptional()
    @IsString()
    clabe: string;
}

// export class FinancialPartialDto extends PartialType(FinancialDto) {
// }

// export class FinancialDto {
//   @IsNumber()
//   @Min(0)
//   total: number;
//
//   @IsNumber()
//   @Min(0)
//   initial: number;
//
//   @ValidateNested({ each: true })
//   @Type(() => BusinessDeadlineDto)
//   deadlines: BusinessDeadlineDto;
//
//   @IsNumber()
//   @Min(0)
//   @IsOptional()
//   initDate: number = new Date().getTime();
//
//   @IsNumber()
//   @Min(0)
//   @IsOptional()
//   finalDate: number = new Date().getTime();
//
//   @IsNumber()
//   weeklyPayment: number;
//
//   @IsOptional()
//   progress: number = 0;
//
//   @IsArray()
//   @IsOptional()
//   pendingOf: string[];
//
//   @IsNumber()
//   @IsOptional()
//   dayCut?: number;
//
//   @IsNumber()
//   @IsOptional()
//   finalPayment?: number;
//
//   @IsString()
//   provider: string;
//
//   @IsNumber()
//   finance: number;
//
//   @IsNumber()
//   nextPayment: number;
// }
