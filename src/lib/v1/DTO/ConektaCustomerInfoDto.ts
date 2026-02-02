import {IsBoolean, IsOptional, IsString} from 'class-validator';

export class ConektaCustomerInfoDto {
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string = '';

  @IsString()
  name: string;

  @IsBoolean()
  corporate: boolean;

  @IsString()
  customer_id: string;

  @IsString()
  object: string;

  @IsOptional()
  @IsString()
  customer_custom_reference: string | null;
}
