import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {AddressDto} from './AddressDto.js';

export class CompanyDto {
  @IsString()
  name: string = "";

  @IsString()
  id: string = "";

  @IsString()
  rfc: string = "";

  @IsString()
  taxRegime: string = "";

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto = new AddressDto();
}
