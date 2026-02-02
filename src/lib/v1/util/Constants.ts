import {CustomerInfoDto} from "../DTO/CustomerDto.js";
import {AlternaChargesDataMethodsDto, AlternaLineItemsDto, ChargesDto} from '../DTO/PayOrderResAlternaDto.js';
import {MetadataDto, OrderTemplateDto, PaymentMethodsDto} from '../DTO/PaymentLinkDto.js';
import {
  IDCAccountConfigDto,
  IDCAccountPropsDto,
  IDCClientQueryDto,
  IDCDataPiiDto,
  IDCMntryCycleDto,
  IDCMntryPymtAllDto,
  IDCMntryPymtAllPaidTotalDto,
  IDCMntryPymtDueDto,
  IDCMntryPymtDueTaxDto,
  IDCMntryPymtOpenDto,
  IDCMntryPymtPaidDto,
  IDCMntryPymtPymtDto,
  IDCMsgDto,
  IDCOxxoRefItemDto,
  IDCOxxoRefPymtMthDto,
  IDCRefCustInfoDto,
  IDCRefItemsDto,
  IDCRefPymtMethodDto,
  IDCTxnRowExtrasDto
} from '../DTO/DynamiCoreDto.js';
import {AddressDto} from '../DTO/AddressDto.js';
import {DeviceDto} from '../DTO/DeviceDto.js';
import {FinancialDto} from '../DTO/FinancialDto.js';
import {BusinessDeadlineDto} from '../DTO/BusinessDeadlineDto.js';
import {PassportContract, PassportProviders, PassportReferenceResDto} from '../DTO/PassportDto.js';
import {PassportReferenceDataDto} from "../DTO/PassportReferenceDataDto.js";
import {PassportAdditionalDto} from '../DTO/PassportAdditionalDto.js';
import {OxxoLineItemsOrderDataDto, OxxoLineItemsOrderDto} from '../DTO/PayOrderResOxxoDto.js';
import {
  ConektaResDataDto,
  ConektaResDto,
  ConektaResObjChargePaidDto,
  ConektaResPrevAttrDto,
  OxxoRecurrentSourcesDto
} from '../DTO/ConektaDto.js';
import {NotificationContentDto, NotificationDataDto, NotificationDto} from '../DTO/NotificationDto.js';
import {DayScheduleDTO, WeekScheduleDto} from '../DTO/WeekScheduleDto.js';
import {iPaymentDelay, oResponse} from "ravcredit-lib";
import {HttpStatus} from '@nestjs/common';

export enum eCurrencies { MXN = 'MXN' }

export enum ePaymentMethods {
    cash = 'cash',
    card = 'card',
    bank_transfer = 'bank_transfer',
}

export const PaymentOptions = [
    ePaymentMethods.cash,
    ePaymentMethods.card,
    ePaymentMethods.bank_transfer,
];

export const cPaymentLink = 'PaymentLink';

export const cCustomerInfoDto: CustomerInfoDto = {
    phone: '',
    customer_id: ""
}

export const cAlternaChargesDataMethodsDto: AlternaChargesDataMethodsDto = {
    service_name: "",
    barcode_url: "",
    object: "",
    type: "",
    expires_at: 0,
    store_names: [],
    store_name: "",
    reference: ""
}

export const cMetadataDto: MetadataDto = {
    datos_extra: ""
}

export const cAlternaLineItemsDto: AlternaLineItemsDto = {
    object: "",
    has_more: false,
    total: 0,
    data: []
}

export const cChargesDto: ChargesDto = {
    object: "",
    has_more: false,
    total: 0,
    data: []
}

export const cPaymentMethodsDto: PaymentMethodsDto = {
    type: "",
    expires_at: 0
}

export const cOrderTemplateDto: OrderTemplateDto = {
    line_items: [],
    currency: "",
    customer_info: cCustomerInfoDto
}

export const cIDCTxnRowExtrasDto: IDCTxnRowExtrasDto = {
    reference: "",
    transaction: ""
}

export const cIDCAccountPropsDto: IDCAccountPropsDto = {
    clabe: "",
    pagaqui: "",
    start_date: "",
    expected_disbursed: 0,
    reference_pagaaqui: "",
    principal_disbursed: 0,
    amount_commission_opening: 0
}

export const cIDCAccountConfigDto: IDCAccountConfigDto = {
    contract: "",
    credit_type: "",
    periodicity: "",
    installments: 0,
    interest_base: "",
    interest_rate: 0,
    interest_arrears: 0,
    commission_opening: 0
}

export const cIDCMntryPymtAllPaidTotalDto: IDCMntryPymtAllPaidTotalDto = {
    amount: "",
    cycles: ""
}

export const cIDCMntryCycleDto: IDCMntryCycleDto = {
    date: "",
    late: 0,
    paid: 0,
    past: "",
    cycle: "",
    amount: 0,
    detail: {},
    status: ""
}

export const cIDCMntryPymtDueDto: IDCMntryPymtDueDto = {
    total: 0,
    cycles: [],
    new_cycle: cIDCMntryCycleDto,
    old_cycle: cIDCMntryCycleDto,
    total_amount: 0
}

export const cIDCMntryPymtDueTaxDto: IDCMntryPymtDueTaxDto = {
    expected: 0
}

export const cIDCMntryPymtPymtDto: IDCMntryPymtPymtDto = {
    paid: 0,
    expected: 0
}

export const cIDCMntryPymtAllDto: IDCMntryPymtAllDto = {
    late: 0,
    total: 0,
    va_cp: 0,
    actual: 0,
    cycles: [],
    vencido: 0,
    paid_total: cIDCMntryPymtAllPaidTotalDto,
    total_amount: 0
}

export const cIDCMntryPymtOpenDto: IDCMntryPymtOpenDto = {
    total: 0,
    cycles: [],
    new_cycle: cIDCMntryCycleDto,
    old_cycle: cIDCMntryCycleDto,
    total_amount: 0
}

export const cIDCMntryPymtPaidDto: IDCMntryPymtPaidDto = {
    total: 0,
    cycles: [],
    new_cycle: cIDCMntryCycleDto,
    old_cycle: cIDCMntryCycleDto,
    total_amount: 0
}

export const cIDCDataPiiDto: IDCDataPiiDto = {
    icc: "",
    rfc: "",
    city: "",
    curp: "",
    imei: "",
    name: "",
    term: "",
    brand: "",
    email: "",
    model: "",
    phone: "",
    score: {},
    state: "",
    amount: "",
    colony: "",
    estado: {},
    gender: "",
    period: "",
    street: "",
    num_ext: "",
    num_int: "",
    zipcode: "",
    financed: "",
    house_is: "",
    lastname: "",
    type_job: "",
    birthdate: "",
    birthstate: "",
    dicio_data: "",
    dicio_step: {},
    secondname: "",
    nationality: "",
    seller_name: "",
    down_payment: "",
    municipality: "",
    score_no_hit: "",
    study_degree: "",
    branch_office: "",
    identity_data: {},
    interest_rate: "",
    marital_status: "",
    monthly_income: "",
    motherlastname: "",
    score_rcc_fico: "",
    identity_selfie: {},
    amount_by_period: "",
    identity_id_back: {},
    identity_id_front: {},
    economic_dependents: "",
    identity_id_request: {},
    identity_verification: {},
    is_address_ine_currently_live: ""
}

export const cIDCMsgDto: IDCMsgDto = {
    code: 0,
    total: 0,
    data: []
}

export const cIDCClientQueryDto: IDCClientQueryDto = {
    filters: []
}

export const cIDCRefCustInfoDto: IDCRefCustInfoDto = {
    name: "",
    email: "",
    phone: ""
}

export const cIDCOxxoRefItemDto: IDCOxxoRefItemDto = {
    name: "",
    unit_price: 0,
    quantity: 0
}

export const cIDCOxxoRefPymtMthDto: IDCOxxoRefPymtMthDto = {
    type: ""
}

export const cIDCRefItemsDto: IDCRefItemsDto = {
    name: "",
    unit_price: 0,
    quantity: 0
}

export const cIDCRefPymtMethodDto: IDCRefPymtMethodDto = {
    type: ""
}

export const cAddressDto: AddressDto = {
    street: "",
    city: "",
    neighbor: "",
    zip: "",
    ext: "",
    int: "",
    state: ""
}

export const cDeviceDto: DeviceDto = {
    device: "",
    id: "",
    IMEI: ""
}

export const cBusinessDeadlineDto: BusinessDeadlineDto = {
    weeks: 0,
    interest: 0
}

export const cFinancialDto: FinancialDto = {
    deadlines: cBusinessDeadlineDto,
    financed: 0,
    initDate: 0,
    initial: 0,
    provider: "",
    total: 0,
    pendingOf: [],
    weeklyPayment: 0,
    clabe: ""
}

export const PassportProviderPassport: PassportProviders = {
    reference: '73407124368',
    centerId: 'passport',
};
export const PassportProviderConekta: PassportProviders = {
    reference: '93003831529864',
    centerId: 'conekta',
};
export const PassportProviderEnefevo: PassportProviders = {
    reference: '10003016999899152802369',
    centerId: 'enefevo',
};
export const PassportProviderPespay: PassportProviders = {
    reference: '10003016999899167453',
    centerId: 'pespay',
};

export const cPassportAdditionalDto: PassportAdditionalDto = {
    client: "",
    clientID: "",
    credit: ""
}

export const cPassportReferenceDataDto: PassportReferenceDataDto = {
    name: "",
    email: "",
    amount: 0,
    expirationDate: "",
    additional: cPassportAdditionalDto
}

export const cPassportReferenceResDto: PassportReferenceResDto = {
    type: "",
    data: cPassportReferenceDataDto,
    message: "",
    references: []
}

export const cPassportContract: PassportContract = {
    id: "",
    client: ""
}

export const cOxxoLineItemsOrderDataDto: OxxoLineItemsOrderDataDto = {
    name: "",
    unit_price: 0,
    quantity: 0,
    object: "",
    id: "",
    parent_id: "",
    metadata: {},
    antifraud_info: {}
}

export const cOxxoLineItemsOrderDto: OxxoLineItemsOrderDto = {
    object: "",
    has_more: false,
    total: 0,
    data: cOxxoLineItemsOrderDataDto
}

export enum eConektaRes {
    CUSTOMER_CREATED = 'customer.created',
    ORDER_PENDING_PAYMENT = 'order.pending_payment',
    ORDER_CREATED = 'order.created',
    CHARGE_CREATED = 'charge.created',
    ORDER_PAID = 'order.paid',
    CHARGE_PAID = 'charge.paid',
    REVERSE = 'inbound_payment.reverse',
    PAYMENT_ATTEMPT = 'inbound_payment.payment_attempt',
    LOOK_UP = 'inbound_payment.lookup',
}

export const cConektaResPrevAttrDto: ConektaResPrevAttrDto = {
    status: '',
};

export const cConektaResObjChargePaidDto: ConektaResObjChargePaidDto = {
    id: '',
    livemode: false,
    created_at: 0,
    currency: '',
    payment_method: {},
    object: '',
    description: '',
    status: '',
    amount: 0,
    paid_at: 0,
    fee: 0,
    customer_id: '',
    order_id: '',
};

export const cConektaResDataDto: ConektaResDataDto = {
    object: cConektaResObjChargePaidDto,
    previous_attributes: cConektaResPrevAttrDto,
};

export const cConektaRes: ConektaResDto = {
    data: cConektaResDataDto,
    livemode: false,
    webhook_status: '',
    webhook_logs: [],
    id: '',
    object: '',
    type: eConektaRes.PAYMENT_ATTEMPT,
    created_at: 0,
};

export const cOxxoRecurrentSourcesDto: OxxoRecurrentSourcesDto = {
    object: "",
    has_more: false,
    total: 0,
    data: []
}

export const cNotification: NotificationDto = {
    token: '',
    notification: {
        title: '',
        body: '',
    },
    data: {
        route: '',
    },
};

export const cNotificationContentDto: NotificationContentDto = {
    title: "",
    body: ""
}

export const cNotificationDataDto: NotificationDataDto = {
    route: ""
}

export const cDayScheduleDTO: DayScheduleDTO = {
    open: "",
    close: ""
}

export const cWeekScheduleDTO: WeekScheduleDto = {
    monday: cDayScheduleDTO,
    tuesday: cDayScheduleDTO,
    wednesday: cDayScheduleDTO,
    thursday: cDayScheduleDTO,
    friday: cDayScheduleDTO,
    saturday: cDayScheduleDTO,
    sunday: cDayScheduleDTO,
}

export const cPaymentDaley: iPaymentDelay = {
    today: 0,
    nextPayment: 0,
    daysDelay: 0,
    late: false,
};

export const cResponse: oResponse = {
    path: '',
    statusCode: HttpStatus.CONTINUE,
    epochTime: 0,
    data: null,
};
