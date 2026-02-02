import {IsArray, IsBoolean, IsNumber, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {MetadataDto} from './PaymentLinkDto.js';
import {cMetadataDto} from '../util/Constants.js';

export class PayLinkResDto {
    @IsString()
    id: string = "";

    @IsString()
    name: string = "";

    @IsBoolean()
    livemode: boolean = false;

    @IsNumber()
    emails_sent: number = 0;

    @IsString()
    success_url: string = "";

    @IsString()
    failure_url: string = "";

    @IsNumber()
    paid_payments_count: number = 0;

    @IsNumber()
    sms_sent: number = 0;

    @IsString()
    status: string = "";

    @IsString()
    type: string = "";

    @IsBoolean()
    recurrent: boolean = false;

    @IsNumber()
    starts_at: number = 0;

    @IsNumber()
    expires_at: number = 0;

    @IsArray()
    @IsString({each: true})
    allowed_payment_methods: string[] = [];

    @IsArray()
    exclude_card_networks: any[] = []; // Assuming empty array or any type for now

    @IsBoolean()
    needs_shipping_contact: boolean = false;

    @IsArray()
    monthly_installments_options: any[] = []; // Assuming empty array or any type for now

    @IsBoolean()
    monthly_installments_enabled: boolean = false;

    @IsBoolean()
    force_3ds_flow: boolean = false;

    @ValidateNested()
    @Type(() => MetadataDto)
    metadata: MetadataDto = cMetadataDto;

    @IsBoolean()
    can_not_expire: boolean = false;

    @IsString()
    object: string = "";

    @IsBoolean()
    is_redirect_on_failure: boolean = false;

    @IsString()
    slug: string = "";

    @IsString()
    url: string = "";
}

// export interface payLinkResDto {
//   "id": string
//   "name": string
//   "livemode": boolean
//   "emails_sent": number
//   "success_url": string
//   "failure_url": string
//   "paid_payments_count": number
//   "sms_sent": number
//   "status": string
//   "type": string
//   "recurrent": boolean
//   "starts_at": number
//   "expires_at": number
//   "allowed_payment_methods": string[],
//   "exclude_card_networks": [],
//   "needs_shipping_contact": boolean
//   "monthly_installments_options": [],
//   "monthly_installments_enabled": boolean
//   "force_3ds_flow": boolean
//   "metadata": iMetadata,
//   "can_not_expire": boolean
//   "object": string
//   "is_redirect_on_failure": boolean
//   "slug": string
//   "url": string
// }

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
