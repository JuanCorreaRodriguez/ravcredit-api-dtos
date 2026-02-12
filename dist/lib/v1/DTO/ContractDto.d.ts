import { AddressDto } from './AddressDto.js';
import { DeviceDto } from './DeviceDto.js';
import { FinancialDto } from './FinancialDto.js';
import { CompanyDto } from './CompanyDto.js';
import { oAssetDto } from './AssetDto.js';
import { eContractStatus, eVerificationStep } from "ravcredit-core";
import { MediaIdentityDto } from "./ClientDto.js";
export declare class ContractDto {
    id: string;
    client: string;
    address: AddressDto;
    device: DeviceDto;
    financial: FinancialDto;
    createdAt: number;
    lastPayment: number;
    by: string;
    active: boolean;
    dynamicAccount?: string | number;
    company: CompanyDto;
    status: string;
    asset: oAssetDto[];
}
export declare class ContractV2Dto extends ContractDto {
    company: CompanyDto;
    contract_status: eContractStatus;
    asset: oAssetDto[];
    amortization_id?: string;
    mediaSelfie?: MediaIdentityDto;
    mediaAddress?: MediaIdentityDto;
    mediaWithDevice?: MediaIdentityDto;
    mediaSelfieBack?: MediaIdentityDto;
    identityVerification?: eVerificationStep;
}
export declare class ContractDto2 {
    id: string;
    client: string;
    address: AddressDto;
    device: DeviceDto;
    financial: FinancialDto;
    createdAt: number;
    lastPayment: number;
    photo: string;
    by: string;
    active: boolean;
}
export declare class PaymentVerificationDTO {
    id: string;
}
