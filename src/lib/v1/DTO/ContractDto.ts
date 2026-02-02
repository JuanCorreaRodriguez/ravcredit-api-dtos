import {IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Validate, ValidateNested} from 'class-validator';
import {Transform, Type} from 'class-transformer';
import {AddressDto} from './AddressDto.js';
import {DeviceDto} from './DeviceDto.js';
import {FinancialDto} from './FinancialDto.js';
import {IsStringOrNumber} from "../core/Validators.js";
import {CompanyDto} from './CompanyDto.js';
import {oAssetDto} from './AssetDto.js';
import {eContractStatus} from 'ravcredit-lib'

export class ContractDto {
    @IsString()
    id: string;

    @IsString()
    client: string;

    @ValidateNested()
    @Type(() => AddressDto)
    address: AddressDto;

    @ValidateNested()
    @Type(() => DeviceDto)
    device: DeviceDto;

    @ValidateNested()
    @Type(() => FinancialDto)
    financial: FinancialDto;

    @IsNumber()
    createdAt: number;

    @IsNumber()
    lastPayment: number;

    @IsString()
    by: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean;

    @IsBoolean()
    active: boolean;

    @IsOptional()
    @Validate(IsStringOrNumber)
    dynamicAccount?: string | number;
}

export class ContractV2Dto extends ContractDto {
    @ValidateNested()
    @Type(() => CompanyDto)
    company: CompanyDto = new CompanyDto();

    @IsEnum(eContractStatus)
    contract_status: eContractStatus = eContractStatus.APPROVED; // Or your default enum value

    @ValidateNested()
    @Type(() => oAssetDto)
    asset: oAssetDto = new oAssetDto();
}

export class ContractDto2 {

    @Transform(({value}) => value.trim())
    @IsString()
    id: string;

    @Transform(({value}) => value.trim())
    @IsString()
    client: string;

    @ValidateNested({each: true})
    @Type(() => AddressDto)
    address: AddressDto;

    @ValidateNested({each: true})
    @Type(() => DeviceDto)
    device: DeviceDto;

    @Type(() => FinancialDto)
    @ValidateNested({each: true})
    financial: FinancialDto;

    @IsNumber()
    @IsOptional()
    createdAt: number;

    @IsNumber()
    @IsOptional()
    lastPayment: number;

    @IsString()
    @IsOptional()
    photo: string;

    @IsString()
    by: string;

    @IsOptional()
    @IsBoolean()
    active: boolean = true;

}

export class PaymentVerificationDTO {
    @IsString()
    id: string;
}
