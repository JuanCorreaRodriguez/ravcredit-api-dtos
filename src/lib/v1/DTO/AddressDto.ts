import { IsOptional, IsString, MinLength } from 'class-validator';

export class AddressDto {

  @IsString()
  @MinLength(1)
  street: string = "";

  @IsString()
  city: string = "";

  @IsString()
  neighbor: string = "";

  @IsString()
  zip: string = "";

  @IsString()
  ext: string = "";

  @IsString()
  @IsOptional()
  int: string = "";

  @IsString()
  state: string = "";
}
