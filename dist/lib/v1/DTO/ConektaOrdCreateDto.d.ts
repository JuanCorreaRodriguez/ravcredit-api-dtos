import { OrdCreateCusInfoDto } from './OrdCreateCusInfoDto.js';
import { OrdCreateChargeDto } from './OrdCreateChargeDto.js';
import { OrdCreatLineItemDto } from './OrdCreatLineItemDto.js';
export declare class ConektaOrdCreateDto {
    customer_info: OrdCreateCusInfoDto;
    charges: OrdCreateChargeDto[];
    currency: string;
    line_items: OrdCreatLineItemDto[];
}
