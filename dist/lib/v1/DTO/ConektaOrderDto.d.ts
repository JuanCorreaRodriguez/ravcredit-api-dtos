import { ConektaCustomerInfoDto } from './ConektaCustomerInfoDto.js';
import { ConektaChannelDto } from './ConektaChannelDto.js';
import { ConektaChargesDto } from './ConektaChargesDto.js';
import { ConektaLineItemsDto } from './ConektaLineItemsDto.js';
import { ConektaCheckoutDto } from './ConektaCheckoutDto.js';
export declare class ConektaOrderDto {
    livemode: boolean;
    amount: number;
    currency: string;
    payment_status: string;
    amount_refunded: number;
    customer_info: ConektaCustomerInfoDto;
    shipping_contact: string | null;
    channel: ConektaChannelDto;
    fiscal_entity: string | null;
    object: string;
    id: string;
    metadata: object;
    is_refundable: boolean;
    created_at: number;
    updated_at: number;
    checkout: ConektaCheckoutDto;
    is_button_premia: boolean;
    line_items: ConektaLineItemsDto;
    shipping_lines: string | null;
    tax_lines: string | null;
    discount_lines: string | null;
    charges: ConektaChargesDto;
}
