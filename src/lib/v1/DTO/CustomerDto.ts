import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CustomerDto {
  @IsBoolean()
  livemode: boolean;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  id: string;

  @IsString()
  object: string;

  @IsNumber()
  created_at: number;

  @IsBoolean()
  corporate: boolean;

  @IsString()
  custom_reference: string;
}

export class CustomerInfoDto {
  @IsString()
  customer_id: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;
}
