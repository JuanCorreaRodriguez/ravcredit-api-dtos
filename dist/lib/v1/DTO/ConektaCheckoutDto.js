var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
export class ConektaCheckoutDto {
    id;
    name;
    livemode;
    emails_sent;
    success_url;
    failure_url;
    payments_limit_count;
    paid_payments_count;
    status;
    type;
    recurrent;
    starts_at;
    expires_at;
    allowed_payment_methods;
    needs_shipping_contact;
    redirection_time;
    metadata_;
    can_not_expire;
    object;
    is_redirect_on_failure;
    slug;
    url;
}
__decorate([
    IsString()
], ConektaCheckoutDto.prototype, "id", void 0);
__decorate([
    IsString()
], ConektaCheckoutDto.prototype, "name", void 0);
__decorate([
    IsBoolean()
], ConektaCheckoutDto.prototype, "livemode", void 0);
__decorate([
    IsNumber()
], ConektaCheckoutDto.prototype, "emails_sent", void 0);
__decorate([
    IsString()
], ConektaCheckoutDto.prototype, "success_url", void 0);
__decorate([
    IsString()
], ConektaCheckoutDto.prototype, "failure_url", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], ConektaCheckoutDto.prototype, "payments_limit_count", void 0);
__decorate([
    IsNumber()
], ConektaCheckoutDto.prototype, "paid_payments_count", void 0);
__decorate([
    IsString()
], ConektaCheckoutDto.prototype, "status", void 0);
__decorate([
    IsString()
], ConektaCheckoutDto.prototype, "type", void 0);
__decorate([
    IsBoolean()
], ConektaCheckoutDto.prototype, "recurrent", void 0);
__decorate([
    IsNumber()
], ConektaCheckoutDto.prototype, "starts_at", void 0);
__decorate([
    IsNumber()
], ConektaCheckoutDto.prototype, "expires_at", void 0);
__decorate([
    IsArray(),
    IsString({ each: true })
], ConektaCheckoutDto.prototype, "allowed_payment_methods", void 0);
__decorate([
    IsBoolean()
], ConektaCheckoutDto.prototype, "needs_shipping_contact", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], ConektaCheckoutDto.prototype, "redirection_time", void 0);
__decorate([
    IsOptional(),
    IsObject()
], ConektaCheckoutDto.prototype, "metadata_", void 0);
__decorate([
    IsBoolean()
], ConektaCheckoutDto.prototype, "can_not_expire", void 0);
__decorate([
    IsString()
], ConektaCheckoutDto.prototype, "object", void 0);
__decorate([
    IsBoolean()
], ConektaCheckoutDto.prototype, "is_redirect_on_failure", void 0);
__decorate([
    IsString()
], ConektaCheckoutDto.prototype, "slug", void 0);
__decorate([
    IsString()
], ConektaCheckoutDto.prototype, "url", void 0);
