import { ConektaOrderDto } from './ConektaOrderDto.js';
export declare class ConektaOrdersResponseDto {
    next_page_url: string | null;
    previous_page_url: string | null;
    has_more: boolean;
    object: string;
    data: ConektaOrderDto[];
}
