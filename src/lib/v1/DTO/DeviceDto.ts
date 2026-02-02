import { IsOptional, IsString } from 'class-validator';

export class DeviceDto {
  @IsString()
  device: string;

  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  IMEI: string;
}
