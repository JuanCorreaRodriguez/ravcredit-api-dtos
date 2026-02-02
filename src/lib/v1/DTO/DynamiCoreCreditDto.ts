import { IsDateString, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Credit DTO
 * */

export class IDCCreditPropertiesDTO {
  @IsString()
  start_date: string;

  @IsNumber()
  principal_disbursed: number;

  @IsNumber()
  expected_disbursed: number;

  @IsNumber()
  amount_commission_opening: number;
}

export class IDCCreditConfigDTO {
  @IsString()
  contract: string;

  @IsString()
  credit_type: string;

  @IsNumber()
  interest_rate: number;

  @IsNumber()
  installments: number;

  @IsString()
  periodicity: string;

  @IsString()
  interest_base: string;

  @IsNumber()
  commission_opening: number;

  @IsNumber()
  financed_amount: number;

  @IsNumber()
  interest_arrears: number;
}

export class IDCCreditDTO {
  @IsNumber()
  id: number;

  @IsNumber()
  group: number;

  @IsNumber()
  company: number;

  @IsNumber()
  client: number;

  @IsDateString()
  created_at: string;

  @IsString()
  currency: string;

  @IsString()
  status: string;

  @ValidateNested()
  @Type(() => IDCCreditPropertiesDTO)
  properties: IDCCreditPropertiesDTO;

  @IsNumber()
  product: number;

  @IsString()
  enabled: string;

  @ValidateNested()
  @Type(() => IDCCreditConfigDTO)
  config: IDCCreditConfigDTO;

  @IsNumber()
  amount: number;

  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  identifier: null | string;

  @IsOptional()
  @IsString()
  start_at: null | string;
}

/* Credit payment */
export class IDCPaymentDto {
  @IsNumber()
  operation: number;

  @IsString()
  account: string;

  @IsString()
  date: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  external_id: string;

  @IsString()
  dst_account: string;

  @IsOptional()
  @IsObject()
  extras: object;

  @IsString()
  reference: string;
}
