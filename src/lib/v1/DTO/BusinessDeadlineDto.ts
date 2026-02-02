import { IsNumber } from 'class-validator';

export class BusinessDeadlineDto {
  @IsNumber()
  weeks: number = 0;

  @IsNumber()
  interest: number = 0;
}
