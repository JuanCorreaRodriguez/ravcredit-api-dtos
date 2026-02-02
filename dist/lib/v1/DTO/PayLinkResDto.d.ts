import { MetadataDto } from './PaymentLinkDto.js';
export declare class PayLinkResDto {
    id: string;
    name: string;
    livemode: boolean;
    emails_sent: number;
    success_url: string;
    failure_url: string;
    paid_payments_count: number;
    sms_sent: number;
    status: string;
    type: string;
    recurrent: boolean;
    starts_at: number;
    expires_at: number;
    allowed_payment_methods: string[];
    exclude_card_networks: any[];
    needs_shipping_contact: boolean;
    monthly_installments_options: any[];
    monthly_installments_enabled: boolean;
    force_3ds_flow: boolean;
    metadata: MetadataDto;
    can_not_expire: boolean;
    object: string;
    is_redirect_on_failure: boolean;
    slug: string;
    url: string;
}
/**
 {
 "id": "ba4643ac-d7fa-4eba-8e4a-690393b67810",
 "name": "Link de pago RavCredit",
 "livemode": false,
 "emails_sent": 0,
 "success_url": "",
 "failure_url": "",
 "paid_payments_count": 0,
 "sms_sent": 0,
 "status": "Issued",
 "type": "PaymentLink",
 "recurrent": false,
 "starts_at": 1721455200,
 "expires_at": 1721958153,
 "allowed_payment_methods": [
 "cash",
 "card",
 "bank_transfer"
 ],
 "exclude_card_networks": [],
 "needs_shipping_contact": false,
 "monthly_installments_options": [],
 "monthly_installments_enabled": false,
 "force_3ds_flow": false,
 "metadata": {},
 "can_not_expire": false,
 "object": "checkout",
 "is_redirect_on_failure": false,
 "slug": "ba4643acd7fa4eba8e4a690393b67810",
 "url": "https://pay.conekta.com/link/ba4643acd7fa4eba8e4a690393b67810"
 }
 */
