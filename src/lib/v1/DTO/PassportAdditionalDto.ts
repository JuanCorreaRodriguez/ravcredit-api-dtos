import { IsOptional, IsString } from 'class-validator';

export class PassportAdditionalDto {

  @IsOptional()
  @IsString()
  client: string = "";

  @IsOptional()
  @IsString()
  clientID: string = "";

  @IsOptional()
  @IsString()
  credit: string = "";
}
