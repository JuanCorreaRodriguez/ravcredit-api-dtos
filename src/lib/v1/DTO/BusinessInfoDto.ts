import { ArrayMinSize, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import {AddressDto} from './AddressDto.js';
import {WeekScheduleDto} from './WeekScheduleDto.js';
import {cAddressDto, cWeekScheduleDTO} from '../util/Constants.js';

export class BusinessInfoDto {

  @IsOptional()
  @IsString()
  version: string = "";

  @IsString()
  name: string = "";

  @IsOptional()
  @Type(() => AddressDto)
  address: AddressDto = cAddressDto;

  @ArrayMinSize(1)
  @Type(() => String)
  phones: string[] = [];

  @IsString()
  email: string = "";

  @IsOptional()
  @Type(() => WeekScheduleDto)
  @ValidateNested({ each: true })
  schedule: WeekScheduleDto = cWeekScheduleDTO;

  @IsOptional()
  @IsString()
  desc: string = "";

}
