export declare class ConektaCheckoutDto {
    id: string;
    name: string;
    livemode: boolean;
    emails_sent: number;
    success_url: string;
    failure_url: string;
    payments_limit_count: number | null;
    paid_payments_count: number;
    status: string;
    type: string;
    recurrent: boolean;
    starts_at: number;
    expires_at: number;
    allowed_payment_methods: string[];
    needs_shipping_contact: boolean;
    redirection_time: number | null;
    metadata_: object;
    can_not_expire: boolean;
    object: string;
    is_redirect_on_failure: boolean;
    slug: string;
    url: string;
}
