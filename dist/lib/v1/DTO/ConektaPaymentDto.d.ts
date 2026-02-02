import { ClientDto } from './ClientDto.js';
import { ContractDto } from './ContractDto.js';
import { ePaymentType } from "ravcredit-core";
export declare class PaymentConektaDto {
    client: ClientDto;
    contract: ContractDto;
    paymentType: ePaymentType;
}
