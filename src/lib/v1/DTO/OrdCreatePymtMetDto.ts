import {IsNumber, IsString} from 'class-validator';

export class OrdCreatePymtMetDto {
  @IsNumber()
  expires_at: number;

  @IsString()
  type: string;
}
