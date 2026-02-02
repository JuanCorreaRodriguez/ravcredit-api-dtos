import { ConektaChannelDto } from './ConektaChannelDto.js';
import { ConektaPaymentMethodDto } from './ConektaPaymentMethodDto.js';
export declare class ConektaChargeDataDto {
    id: string;
    livemode: boolean;
    created_at: number;
    currency: string;
    failure_code: string | null;
    failure_message: string | null;
    channel: ConektaChannelDto;
    payment_method: ConektaPaymentMethodDto;
    object: string;
    device_fingerprint: string;
    description: string;
    is_refundable: boolean;
    reference_id: string | null;
    status: string;
    amount: number;
    paid_at: number;
    customer_id: string;
    order_id: string;
    is_button_premia: boolean;
    refunds: string | null;
}
