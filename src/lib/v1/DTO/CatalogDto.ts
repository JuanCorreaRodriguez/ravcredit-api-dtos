import { IsString, IsNumber } from 'class-validator';

export class CatalogDto {
  @IsString()
  name: string = "";

  @IsString()
  description: string = "";

  @IsString()
  id: string = "";

  @IsNumber()
  createdAt: number = 0;
}
