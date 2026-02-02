import { IsBoolean, IsNumber, IsString } from "class-validator";

export class ScheduleDto {

  @IsString()
  day: string = ""

  @IsNumber()
  open: number = 0

  @IsNumber()
  close: number = 0

  @IsBoolean()
  allDay:boolean = false
}
