import {IsNumber, IsOptional, IsString} from 'class-validator';

export class ConektaPaymentSources {
  @IsString()
  type: string;

  @IsNumber()
  @IsOptional()
  expires_at: number;

}
