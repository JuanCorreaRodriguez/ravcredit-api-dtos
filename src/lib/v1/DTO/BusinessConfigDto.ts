import { IsArray, IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BusinessDeadlineDto } from "./BusinessDeadlineDto.js";

export class BusinessConfigDto {

  @IsArray()
  @Type(() => BusinessDeadlineDto)
  @ValidateNested({ each: true })
  deadlines: BusinessDeadlineDto[]= [];

  @IsBoolean()
  downloadsClient: boolean = false;

  @IsBoolean()
  @IsOptional()
  passportPaymentReference: boolean = false;

  @IsBoolean()
  @IsOptional()
  dynamicPaymentReference: boolean = false;

  @IsBoolean()
  @IsOptional()
  conektaPaymentReference: boolean = false;

  @IsBoolean()
  @IsOptional()
  conektaPaymentLink: boolean = false;

  @IsOptional()
  @IsString()
  mobileVersion: string = "";

  @IsOptional()
  @IsString()
  adminVersion: string = "";

  @IsOptional()
  @IsString()
  mobileVersionPrev: string = "";

  @IsOptional()
  @IsString()
  apkUrl: string = "";

  @IsOptional()
  @IsString()
  version: string = "";

  @IsOptional()
  @IsString()
  apiVersion: string = "";
}
