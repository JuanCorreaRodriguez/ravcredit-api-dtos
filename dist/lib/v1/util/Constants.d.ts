import { CustomerInfoDto } from "../DTO/CustomerDto.js";
import { AlternaChargesDataMethodsDto, AlternaLineItemsDto, ChargesDto } from '../DTO/PayOrderResAlternaDto.js';
import { MetadataDto, OrderTemplateDto, PaymentMethodsDto } from '../DTO/PaymentLinkDto.js';
import { IDCAccountConfigDto, IDCAccountPropsDto, IDCClientQueryDto, IDCDataPiiDto, IDCMntryCycleDto, IDCMntryPymtAllDto, IDCMntryPymtAllPaidTotalDto, IDCMntryPymtDueDto, IDCMntryPymtDueTaxDto, IDCMntryPymtOpenDto, IDCMntryPymtPaidDto, IDCMntryPymtPymtDto, IDCMsgDto, IDCOxxoRefItemDto, IDCOxxoRefPymtMthDto, IDCRefCustInfoDto, IDCRefItemsDto, IDCRefPymtMethodDto, IDCTxnRowExtrasDto } from '../DTO/DynamiCoreDto.js';
import { AddressDto } from '../DTO/AddressDto.js';
import { DeviceDto } from '../DTO/DeviceDto.js';
import { FinancialDto } from '../DTO/FinancialDto.js';
import { BusinessDeadlineDto } from '../DTO/BusinessDeadlineDto.js';
import { PassportContract, PassportProviders, PassportReferenceResDto } from '../DTO/PassportDto.js';
import { PassportReferenceDataDto } from "../DTO/PassportReferenceDataDto.js";
import { PassportAdditionalDto } from '../DTO/PassportAdditionalDto.js';
import { OxxoLineItemsOrderDataDto, OxxoLineItemsOrderDto } from '../DTO/PayOrderResOxxoDto.js';
import { ConektaResDataDto, ConektaResDto, ConektaResObjChargePaidDto, ConektaResPrevAttrDto, OxxoRecurrentSourcesDto } from '../DTO/ConektaDto.js';
import { NotificationContentDto, NotificationDataDto, NotificationDto } from '../DTO/NotificationDto.js';
import { DayScheduleDTO, WeekScheduleDto } from '../DTO/WeekScheduleDto.js';
import { iPaymentDelay, oResponse } from "ravcredit-lib";
export declare enum eCurrencies {
    MXN = "MXN"
}
export declare enum ePaymentMethods {
    cash = "cash",
    card = "card",
    bank_transfer = "bank_transfer"
}
export declare const PaymentOptions: ePaymentMethods[];
export declare const cPaymentLink = "PaymentLink";
export declare const cCustomerInfoDto: CustomerInfoDto;
export declare const cAlternaChargesDataMethodsDto: AlternaChargesDataMethodsDto;
export declare const cMetadataDto: MetadataDto;
export declare const cAlternaLineItemsDto: AlternaLineItemsDto;
export declare const cChargesDto: ChargesDto;
export declare const cPaymentMethodsDto: PaymentMethodsDto;
export declare const cOrderTemplateDto: OrderTemplateDto;
export declare const cIDCTxnRowExtrasDto: IDCTxnRowExtrasDto;
export declare const cIDCAccountPropsDto: IDCAccountPropsDto;
export declare const cIDCAccountConfigDto: IDCAccountConfigDto;
export declare const cIDCMntryPymtAllPaidTotalDto: IDCMntryPymtAllPaidTotalDto;
export declare const cIDCMntryCycleDto: IDCMntryCycleDto;
export declare const cIDCMntryPymtDueDto: IDCMntryPymtDueDto;
export declare const cIDCMntryPymtDueTaxDto: IDCMntryPymtDueTaxDto;
export declare const cIDCMntryPymtPymtDto: IDCMntryPymtPymtDto;
export declare const cIDCMntryPymtAllDto: IDCMntryPymtAllDto;
export declare const cIDCMntryPymtOpenDto: IDCMntryPymtOpenDto;
export declare const cIDCMntryPymtPaidDto: IDCMntryPymtPaidDto;
export declare const cIDCDataPiiDto: IDCDataPiiDto;
export declare const cIDCMsgDto: IDCMsgDto;
export declare const cIDCClientQueryDto: IDCClientQueryDto;
export declare const cIDCRefCustInfoDto: IDCRefCustInfoDto;
export declare const cIDCOxxoRefItemDto: IDCOxxoRefItemDto;
export declare const cIDCOxxoRefPymtMthDto: IDCOxxoRefPymtMthDto;
export declare const cIDCRefItemsDto: IDCRefItemsDto;
export declare const cIDCRefPymtMethodDto: IDCRefPymtMethodDto;
export declare const cAddressDto: AddressDto;
export declare const cDeviceDto: DeviceDto;
export declare const cBusinessDeadlineDto: BusinessDeadlineDto;
export declare const cFinancialDto: FinancialDto;
export declare const PassportProviderPassport: PassportProviders;
export declare const PassportProviderConekta: PassportProviders;
export declare const PassportProviderEnefevo: PassportProviders;
export declare const PassportProviderPespay: PassportProviders;
export declare const cPassportAdditionalDto: PassportAdditionalDto;
export declare const cPassportReferenceDataDto: PassportReferenceDataDto;
export declare const cPassportReferenceResDto: PassportReferenceResDto;
export declare const cPassportContract: PassportContract;
export declare const cOxxoLineItemsOrderDataDto: OxxoLineItemsOrderDataDto;
export declare const cOxxoLineItemsOrderDto: OxxoLineItemsOrderDto;
export declare enum eConektaRes {
    CUSTOMER_CREATED = "customer.created",
    ORDER_PENDING_PAYMENT = "order.pending_payment",
    ORDER_CREATED = "order.created",
    CHARGE_CREATED = "charge.created",
    ORDER_PAID = "order.paid",
    CHARGE_PAID = "charge.paid",
    REVERSE = "inbound_payment.reverse",
    PAYMENT_ATTEMPT = "inbound_payment.payment_attempt",
    LOOK_UP = "inbound_payment.lookup"
}
export declare const cConektaResPrevAttrDto: ConektaResPrevAttrDto;
export declare const cConektaResObjChargePaidDto: ConektaResObjChargePaidDto;
export declare const cConektaResDataDto: ConektaResDataDto;
export declare const cConektaRes: ConektaResDto;
export declare const cOxxoRecurrentSourcesDto: OxxoRecurrentSourcesDto;
export declare const cNotification: NotificationDto;
export declare const cNotificationContentDto: NotificationContentDto;
export declare const cNotificationDataDto: NotificationDataDto;
export declare const cDayScheduleDTO: DayScheduleDTO;
export declare const cWeekScheduleDTO: WeekScheduleDto;
export declare const cPaymentDaley: iPaymentDelay;
export declare const cResponse: oResponse;
