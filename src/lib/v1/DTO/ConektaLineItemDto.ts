import {IsArray, IsNumber, IsObject, IsOptional, IsString} from 'class-validator';

export class ConektaLineItemDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string | null;

  @IsNumber()
  unit_price: number;

  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  sku: string | null;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags: string[] | null;

  @IsOptional()
  @IsString()
  brand: string | null;

  @IsOptional()
  @IsString()
  type: string | null;

  @IsString()
  object: string;

  @IsString()
  id: string;

  @IsString()
  parent_id: string;

  @IsObject()
  metadata: object;

  @IsObject()
  antifraud_info: object;
}
