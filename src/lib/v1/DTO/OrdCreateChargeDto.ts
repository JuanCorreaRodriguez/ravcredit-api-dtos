import {IsNumber, ValidateNested} from 'class-validator';
import {OrdCreatePymtMetDto} from './OrdCreatePymtMetDto.js';
import {Type} from "class-transformer";

export class OrdCreateChargeDto {
    @ValidateNested()
    @Type(() => OrdCreatePymtMetDto)
    payment_method: OrdCreatePymtMetDto;

    @IsNumber()
    amount: number;
}
