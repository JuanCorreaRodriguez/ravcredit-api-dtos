import { ePaymentType } from 'ravcredit-lib';
import { ClientDto } from './ClientDto.js';
import { ContractDto } from './ContractDto.js';
export declare class PaymentConektaDto {
    client: ClientDto;
    contract: ContractDto;
    paymentType: ePaymentType;
}
