var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsBoolean, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetadataDto } from './PaymentLinkDto.js';
import { cMetadataDto } from '../util/Constants.js';
export class PayLinkResDto {
    id = "";
    name = "";
    livemode = false;
    emails_sent = 0;
    success_url = "";
    failure_url = "";
    paid_payments_count = 0;
    sms_sent = 0;
    status = "";
    type = "";
    recurrent = false;
    starts_at = 0;
    expires_at = 0;
    allowed_payment_methods = [];
    exclude_card_networks = []; // Assuming empty array or any type for now
    needs_shipping_contact = false;
    monthly_installments_options = []; // Assuming empty array or any type for now
    monthly_installments_enabled = false;
    force_3ds_flow = false;
    metadata = cMetadataDto;
    can_not_expire = false;
    object = "";
    is_redirect_on_failure = false;
    slug = "";
    url = "";
}
__decorate([
    IsString()
], PayLinkResDto.prototype, "id", void 0);
__decorate([
    IsString()
], PayLinkResDto.prototype, "name", void 0);
__decorate([
    IsBoolean()
], PayLinkResDto.prototype, "livemode", void 0);
__decorate([
    IsNumber()
], PayLinkResDto.prototype, "emails_sent", void 0);
__decorate([
    IsString()
], PayLinkResDto.prototype, "success_url", void 0);
__decorate([
    IsString()
], PayLinkResDto.prototype, "failure_url", void 0);
__decorate([
    IsNumber()
], PayLinkResDto.prototype, "paid_payments_count", void 0);
__decorate([
    IsNumber()
], PayLinkResDto.prototype, "sms_sent", void 0);
__decorate([
    IsString()
], PayLinkResDto.prototype, "status", void 0);
__decorate([
    IsString()
], PayLinkResDto.prototype, "type", void 0);
__decorate([
    IsBoolean()
], PayLinkResDto.prototype, "recurrent", void 0);
__decorate([
    IsNumber()
], PayLinkResDto.prototype, "starts_at", void 0);
__decorate([
    IsNumber()
], PayLinkResDto.prototype, "expires_at", void 0);
__decorate([
    IsArray(),
    IsString({ each: true })
], PayLinkResDto.prototype, "allowed_payment_methods", void 0);
__decorate([
    IsArray()
], PayLinkResDto.prototype, "exclude_card_networks", void 0);
__decorate([
    IsBoolean()
], PayLinkResDto.prototype, "needs_shipping_contact", void 0);
__decorate([
    IsArray()
], PayLinkResDto.prototype, "monthly_installments_options", void 0);
__decorate([
    IsBoolean()
], PayLinkResDto.prototype, "monthly_installments_enabled", void 0);
__decorate([
    IsBoolean()
], PayLinkResDto.prototype, "force_3ds_flow", void 0);
__decorate([
    ValidateNested(),
    Type(() => MetadataDto)
], PayLinkResDto.prototype, "metadata", void 0);
__decorate([
    IsBoolean()
], PayLinkResDto.prototype, "can_not_expire", void 0);
__decorate([
    IsString()
], PayLinkResDto.prototype, "object", void 0);
__decorate([
    IsBoolean()
], PayLinkResDto.prototype, "is_redirect_on_failure", void 0);
__decorate([
    IsString()
], PayLinkResDto.prototype, "slug", void 0);
__decorate([
    IsString()
], PayLinkResDto.prototype, "url", void 0);
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
