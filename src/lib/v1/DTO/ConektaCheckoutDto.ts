import {IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString} from 'class-validator';

export class ConektaCheckoutDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsBoolean()
  livemode: boolean;

  @IsNumber()
  emails_sent: number;

  @IsString()
  success_url: string;

  @IsString()
  failure_url: string;

  @IsOptional()
  @IsNumber()
  payments_limit_count: number | null;

  @IsNumber()
  paid_payments_count: number;

  @IsString()
  status: string;

  @IsString()
  type: string;

  @IsBoolean()
  recurrent: boolean;

  @IsNumber()
  starts_at: number;

  @IsNumber()
  expires_at: number;

  @IsArray()
  @IsString({ each: true })
  allowed_payment_methods: string[];

  @IsBoolean()
  needs_shipping_contact: boolean;

  @IsOptional()
  @IsNumber()
  redirection_time: number | null;

  @IsOptional()
  @IsObject()
  metadata_: object;

  @IsBoolean()
  can_not_expire: boolean;

  @IsString()
  object: string;

  @IsBoolean()
  is_redirect_on_failure: boolean;

  @IsString()
  slug: string;

  @IsString()
  url: string;
}
