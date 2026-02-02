import {Type} from "class-transformer";
import {IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Validate, ValidateNested} from 'class-validator';
import {ScoreDto, ScoreNoHitDto} from "./ScoreDto.js";
import {NotificationDto} from './NotificationDto.js';
import {IsStringOrNumber} from '../core/Validators.js';
import {eIdentityTypes, eVerificationStep} from "ravcredit-core";

export class ClientPaymentsDto {
    @IsNumber()
    date: number = 0;

    @IsNumber()
    dayPayment: number = 0;

    @IsNumber()
    amount: number = 0;

    @IsString()
    id: string = "";
}

export class UserReferenceDto {
    @IsString()
    name: string = "";

    @IsString()
    phone: string = "";

    @IsString()
    relationship: string = "";
}

export class ClientReferencesDto {
    @IsOptional()
    @IsNumber()
    date?: number;

    @IsOptional()
    @IsNumber()
    amount?: number;

    @IsString()
    id: string;

    @IsOptional()
    @IsString()
    url?: string;

    @IsOptional()
    @IsString()
    type?: string;
}

export class ClientDto {
    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    name: string;

    @Validate(IsStringOrNumber)
    username: any;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    curp: string;

    @IsString()
    @IsOptional()
    contract?: string;

    @IsString()
    @IsOptional()
    password: string;

    @IsNumber()
    @IsOptional()
    createdAt?: number;

    @IsNumber()
    @IsOptional()
    lastLogin?: number;

    @IsArray()
    @IsOptional()
    payments?: ClientPaymentsDto[];

    @IsOptional()
    reference?: string;

    @IsArray()
    @IsOptional()
    references?: ClientReferencesDto[];

    @IsOptional()
    @IsString()
    token?: string;

    @IsArray()
    userReferences?: UserReferenceDto[];

    @IsOptional()
    @IsArray()
    notifications?: NotificationDto[];

    @IsString()
    @IsOptional()
    contractUrl?: string;

    @IsOptional()
    exists?: boolean;

    @IsOptional()
    contract_temporary?: string;

    @IsString()
    status: string;

    @IsString()
    @IsOptional()
    conekta_id?: string;

    @IsString()
    @IsOptional()
    passport_id?: string;

    @IsNumber()
    @IsOptional()
    dynamic_id?: string;

    @IsNumber()
    @IsOptional()
    dynamic_account?: string;

    @IsNumber()
    @IsOptional()
    dynamic_ref?: string;

    @IsOptional()
    score?: any;
}

export class CurpDto {
    @IsString()
    curp: string = "";
}

export class MediaIdentityDto {
    @IsString()
    url: string = "";

    @IsEnum(eIdentityTypes)
    name: eIdentityTypes = eIdentityTypes.SELFIE; // Replace with your default if needed

    @IsBoolean()
    active: boolean = false;

    @IsOptional()
    metadata: any = null;

    @IsNumber()
    uploaded: number = 0;
}

export class oClientV2Dto extends ClientDto {
    @ValidateNested()
    @Type(() => ScoreDto)
    score: ScoreDto = new ScoreDto();

    @IsOptional()
    @IsString()
    seller_id?: string = "";

    @IsOptional()
    @ValidateNested()
    @Type(() => ScoreNoHitDto)
    scoreNoHit?: ScoreNoHitDto = new ScoreNoHitDto();

    @IsOptional()
    @IsString()
    study_degree?: string = "";

    @IsOptional()
    @ValidateNested()
    @Type(() => MediaIdentityDto)
    mediaSelfie?: MediaIdentityDto = new MediaIdentityDto();

    @IsOptional()
    @ValidateNested()
    @Type(() => MediaIdentityDto)
    mediaAddress?: MediaIdentityDto = new MediaIdentityDto();

    @IsOptional()
    @ValidateNested()
    @Type(() => MediaIdentityDto)
    mediaWithDevice?: MediaIdentityDto = new MediaIdentityDto();

    @IsOptional()
    @ValidateNested()
    @Type(() => MediaIdentityDto)
    mediaSelfieBack?: MediaIdentityDto = new MediaIdentityDto();

    @IsOptional()
    @IsEnum(eVerificationStep)
    identityVerification?: eVerificationStep = eVerificationStep.IDLE;
}

export class UpdateNotificationSimpleDto {
    @IsString()
    token: string = "";

    @IsString()
    id: string = "";
}

export class NotificationSubscription {
    @IsString()
    token: string[] = [];
}
