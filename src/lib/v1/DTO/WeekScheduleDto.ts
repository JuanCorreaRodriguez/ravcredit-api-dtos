import {IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {cDayScheduleDTO} from '../util/Constants.js';

export class DayScheduleDTO {

    @IsString()
    @IsOptional()
    close: string = "";

    @IsString()
    @IsOptional()
    open: string = "";
}

export class WeekScheduleDto {

    @IsOptional()
    @ValidateNested()
    @Type(() => DayScheduleDTO)
    monday: DayScheduleDTO = cDayScheduleDTO;

    @IsOptional()
    @ValidateNested()
    @Type(() => DayScheduleDTO)
    tuesday: DayScheduleDTO = cDayScheduleDTO;

    @IsOptional()
    @ValidateNested()
    @Type(() => DayScheduleDTO)
    wednesday: DayScheduleDTO = cDayScheduleDTO;

    @IsOptional()
    @ValidateNested()
    @Type(() => DayScheduleDTO)
    thursday: DayScheduleDTO = cDayScheduleDTO;

    @IsOptional()
    @ValidateNested()
    @Type(() => DayScheduleDTO)
    friday: DayScheduleDTO = cDayScheduleDTO;

    @IsOptional()
    @ValidateNested()
    @Type(() => DayScheduleDTO)
    saturday: DayScheduleDTO = cDayScheduleDTO;

    @IsOptional()
    @ValidateNested()
    @Type(() => DayScheduleDTO)
    sunday: DayScheduleDTO = cDayScheduleDTO;
}
