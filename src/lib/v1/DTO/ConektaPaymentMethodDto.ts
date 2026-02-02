import {IsNumber, IsOptional, IsString} from 'class-validator';

export class ConektaPaymentMethodDto {
  @IsString()
  service_name: string;

  @IsString()
  barcode_url: string;

  @IsString()
  store: string;

  @IsNumber()
  auth_code: number;

  @IsString()
  object: string;

  @IsString()
  type: string;

  @IsNumber()
  expires_at: number;

  @IsString()
  store_name: string;

  @IsString()
  reference: string;

  @IsString()
  cashier_id: string;

  @IsOptional()
  clabe?: string;
}
