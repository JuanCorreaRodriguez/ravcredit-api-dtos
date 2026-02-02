import { HttpStatus } from '@nestjs/common';
export var eCurrencies;
(function (eCurrencies) {
    eCurrencies["MXN"] = "MXN";
})(eCurrencies || (eCurrencies = {}));
export var ePaymentMethods;
(function (ePaymentMethods) {
    ePaymentMethods["cash"] = "cash";
    ePaymentMethods["card"] = "card";
    ePaymentMethods["bank_transfer"] = "bank_transfer";
})(ePaymentMethods || (ePaymentMethods = {}));
export const PaymentOptions = [
    ePaymentMethods.cash,
    ePaymentMethods.card,
    ePaymentMethods.bank_transfer,
];
export const cPaymentLink = 'PaymentLink';
export const cCustomerInfoDto = {
    phone: '',
    customer_id: ""
};
export const cAlternaChargesDataMethodsDto = {
    service_name: "",
    barcode_url: "",
    object: "",
    type: "",
    expires_at: 0,
    store_names: [],
    store_name: "",
    reference: ""
};
export const cMetadataDto = {
    datos_extra: ""
};
export const cAlternaLineItemsDto = {
    object: "",
    has_more: false,
    total: 0,
    data: []
};
export const cChargesDto = {
    object: "",
    has_more: false,
    total: 0,
    data: []
};
export const cPaymentMethodsDto = {
    type: "",
    expires_at: 0
};
export const cOrderTemplateDto = {
    line_items: [],
    currency: "",
    customer_info: cCustomerInfoDto
};
export const cIDCTxnRowExtrasDto = {
    reference: "",
    transaction: ""
};
export const cIDCAccountPropsDto = {
    clabe: "",
    pagaqui: "",
    start_date: "",
    expected_disbursed: 0,
    reference_pagaaqui: "",
    principal_disbursed: 0,
    amount_commission_opening: 0
};
export const cIDCAccountConfigDto = {
    contract: "",
    credit_type: "",
    periodicity: "",
    installments: 0,
    interest_base: "",
    interest_rate: 0,
    interest_arrears: 0,
    commission_opening: 0
};
export const cIDCMntryPymtAllPaidTotalDto = {
    amount: "",
    cycles: ""
};
export const cIDCMntryCycleDto = {
    date: "",
    late: 0,
    paid: 0,
    past: "",
    cycle: "",
    amount: 0,
    detail: {},
    status: ""
};
export const cIDCMntryPymtDueDto = {
    total: 0,
    cycles: [],
    new_cycle: cIDCMntryCycleDto,
    old_cycle: cIDCMntryCycleDto,
    total_amount: 0
};
export const cIDCMntryPymtDueTaxDto = {
    expected: 0
};
export const cIDCMntryPymtPymtDto = {
    paid: 0,
    expected: 0
};
export const cIDCMntryPymtAllDto = {
    late: 0,
    total: 0,
    va_cp: 0,
    actual: 0,
    cycles: [],
    vencido: 0,
    paid_total: cIDCMntryPymtAllPaidTotalDto,
    total_amount: 0
};
export const cIDCMntryPymtOpenDto = {
    total: 0,
    cycles: [],
    new_cycle: cIDCMntryCycleDto,
    old_cycle: cIDCMntryCycleDto,
    total_amount: 0
};
export const cIDCMntryPymtPaidDto = {
    total: 0,
    cycles: [],
    new_cycle: cIDCMntryCycleDto,
    old_cycle: cIDCMntryCycleDto,
    total_amount: 0
};
export const cIDCDataPiiDto = {
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
};
export const cIDCMsgDto = {
    code: 0,
    total: 0,
    data: []
};
export const cIDCClientQueryDto = {
    filters: []
};
export const cIDCRefCustInfoDto = {
    name: "",
    email: "",
    phone: ""
};
export const cIDCOxxoRefItemDto = {
    name: "",
    unit_price: 0,
    quantity: 0
};
export const cIDCOxxoRefPymtMthDto = {
    type: ""
};
export const cIDCRefItemsDto = {
    name: "",
    unit_price: 0,
    quantity: 0
};
export const cIDCRefPymtMethodDto = {
    type: ""
};
export const cAddressDto = {
    street: "",
    city: "",
    neighbor: "",
    zip: "",
    ext: "",
    int: "",
    state: ""
};
export const cDeviceDto = {
    device: "",
    id: "",
    IMEI: ""
};
export const cBusinessDeadlineDto = {
    weeks: 0,
    interest: 0
};
export const cFinancialDto = {
    deadlines: cBusinessDeadlineDto,
    financed: 0,
    initDate: 0,
    initial: 0,
    provider: "",
    total: 0,
    pendingOf: [],
    weeklyPayment: 0,
    clabe: ""
};
export const PassportProviderPassport = {
    reference: '73407124368',
    centerId: 'passport',
};
export const PassportProviderConekta = {
    reference: '93003831529864',
    centerId: 'conekta',
};
export const PassportProviderEnefevo = {
    reference: '10003016999899152802369',
    centerId: 'enefevo',
};
export const PassportProviderPespay = {
    reference: '10003016999899167453',
    centerId: 'pespay',
};
export const cPassportAdditionalDto = {
    client: "",
    clientID: "",
    credit: ""
};
export const cPassportReferenceDataDto = {
    name: "",
    email: "",
    amount: 0,
    expirationDate: "",
    additional: cPassportAdditionalDto
};
export const cPassportReferenceResDto = {
    type: "",
    data: cPassportReferenceDataDto,
    message: "",
    references: []
};
export const cPassportContract = {
    id: "",
    client: ""
};
export const cOxxoLineItemsOrderDataDto = {
    name: "",
    unit_price: 0,
    quantity: 0,
    object: "",
    id: "",
    parent_id: "",
    metadata: {},
    antifraud_info: {}
};
export const cOxxoLineItemsOrderDto = {
    object: "",
    has_more: false,
    total: 0,
    data: cOxxoLineItemsOrderDataDto
};
export var eConektaRes;
(function (eConektaRes) {
    eConektaRes["CUSTOMER_CREATED"] = "customer.created";
    eConektaRes["ORDER_PENDING_PAYMENT"] = "order.pending_payment";
    eConektaRes["ORDER_CREATED"] = "order.created";
    eConektaRes["CHARGE_CREATED"] = "charge.created";
    eConektaRes["ORDER_PAID"] = "order.paid";
    eConektaRes["CHARGE_PAID"] = "charge.paid";
    eConektaRes["REVERSE"] = "inbound_payment.reverse";
    eConektaRes["PAYMENT_ATTEMPT"] = "inbound_payment.payment_attempt";
    eConektaRes["LOOK_UP"] = "inbound_payment.lookup";
})(eConektaRes || (eConektaRes = {}));
export const cConektaResPrevAttrDto = {
    status: '',
};
export const cConektaResObjChargePaidDto = {
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
export const cConektaResDataDto = {
    object: cConektaResObjChargePaidDto,
    previous_attributes: cConektaResPrevAttrDto,
};
export const cConektaRes = {
    data: cConektaResDataDto,
    livemode: false,
    webhook_status: '',
    webhook_logs: [],
    id: '',
    object: '',
    type: eConektaRes.PAYMENT_ATTEMPT,
    created_at: 0,
};
export const cOxxoRecurrentSourcesDto = {
    object: "",
    has_more: false,
    total: 0,
    data: []
};
export const cNotification = {
    token: '',
    notification: {
        title: '',
        body: '',
    },
    data: {
        route: '',
    },
};
export const cNotificationContentDto = {
    title: "",
    body: ""
};
export const cNotificationDataDto = {
    route: ""
};
export const cDayScheduleDTO = {
    open: "",
    close: ""
};
export const cWeekScheduleDTO = {
    monday: cDayScheduleDTO,
    tuesday: cDayScheduleDTO,
    wednesday: cDayScheduleDTO,
    thursday: cDayScheduleDTO,
    friday: cDayScheduleDTO,
    saturday: cDayScheduleDTO,
    sunday: cDayScheduleDTO,
};
export const cPaymentDaley = {
    today: 0,
    nextPayment: 0,
    daysDelay: 0,
    late: false,
};
export const cResponse = {
    path: '',
    statusCode: HttpStatus.CONTINUE,
    epochTime: 0,
    data: null,
};
