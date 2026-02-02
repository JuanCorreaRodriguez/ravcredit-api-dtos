var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsNumber, IsOptional, IsString, Min, ValidateNested } from 'class-validator';
import { BusinessDeadlineDto } from './BusinessDeadlineDto.js';
import { Type } from 'class-transformer';
export class FinancialProgressDto {
    id;
    amount;
    date;
}
__decorate([
    IsString()
], FinancialProgressDto.prototype, "id", void 0);
__decorate([
    IsNumber()
], FinancialProgressDto.prototype, "amount", void 0);
__decorate([
    IsNumber()
], FinancialProgressDto.prototype, "date", void 0);
export class FinancialDto {
    dayCut;
    deadlines;
    finalDate;
    finalPayment;
    financed;
    initDate;
    initial;
    provider;
    total;
    progress;
    pendingOf;
    interest;
    weeklyPayment;
    nextPayment;
    commission_opening;
    credit_type;
    interest_arrears; // intereses moratorios dynamic
    interest_rate; // interes credit dynamic
    amount_commission_opening; // comision por apertura dynamic
    principal_disbursed;
    expected_disbursed;
    clabe;
}
__decorate([
    IsOptional(),
    IsNumber()
], FinancialDto.prototype, "dayCut", void 0);
__decorate([
    ValidateNested(),
    Type(() => BusinessDeadlineDto)
], FinancialDto.prototype, "deadlines", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(0)
], FinancialDto.prototype, "finalDate", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], FinancialDto.prototype, "finalPayment", void 0);
__decorate([
    IsNumber()
], FinancialDto.prototype, "financed", void 0);
__decorate([
    IsNumber()
], FinancialDto.prototype, "initDate", void 0);
__decorate([
    IsNumber()
], FinancialDto.prototype, "initial", void 0);
__decorate([
    IsString()
], FinancialDto.prototype, "provider", void 0);
__decorate([
    IsNumber()
], FinancialDto.prototype, "total", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => FinancialProgressDto)
], FinancialDto.prototype, "progress", void 0);
__decorate([
    IsString({ each: true }),
    IsArray(),
    IsOptional()
], FinancialDto.prototype, "pendingOf", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], FinancialDto.prototype, "interest", void 0);
__decorate([
    IsNumber()
], FinancialDto.prototype, "weeklyPayment", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], FinancialDto.prototype, "nextPayment", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], FinancialDto.prototype, "commission_opening", void 0);
__decorate([
    IsOptional(),
    IsString()
], FinancialDto.prototype, "credit_type", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], FinancialDto.prototype, "interest_arrears", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], FinancialDto.prototype, "interest_rate", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], FinancialDto.prototype, "amount_commission_opening", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], FinancialDto.prototype, "principal_disbursed", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], FinancialDto.prototype, "expected_disbursed", void 0);
__decorate([
    IsOptional(),
    IsString()
], FinancialDto.prototype, "clabe", void 0);
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
