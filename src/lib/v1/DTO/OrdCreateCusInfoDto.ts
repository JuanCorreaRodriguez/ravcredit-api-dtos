import {IsOptional, IsString} from 'class-validator';

export class OrdCreateCusInfoDto {
  @IsString()
  @IsOptional()
  customer_id?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;
}
