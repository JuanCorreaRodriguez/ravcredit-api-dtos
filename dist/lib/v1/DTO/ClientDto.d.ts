import { ScoreDto, ScoreNoHitDto } from "./ScoreDto.js";
import { NotificationDto } from './NotificationDto.js';
import { eIdentityTypes } from "ravcredit-core";
export declare class ClientPaymentsDto {
    date: number;
    dayPayment: number;
    amount: number;
    id: string;
}
export declare class UserReferenceDto {
    name: string;
    phone: string;
    relationship: string;
}
export declare class ClientReferencesDto {
    date?: number;
    amount?: number;
    id: string;
    url?: string;
    type?: string;
}
export declare class ClientDto {
    id: string;
    name: string;
    username: any;
    email: string;
    phone: string;
    curp: string;
    contract?: string;
    password: string;
    createdAt?: number;
    lastLogin?: number;
    payments?: ClientPaymentsDto[];
    reference?: string;
    references?: ClientReferencesDto[];
    token?: string;
    userReferences?: UserReferenceDto[];
    notifications?: NotificationDto[];
    contractUrl?: string;
    exists?: boolean;
    contract_temporary?: string;
    status: string;
    conekta_id?: string;
    passport_id?: string;
    dynamic_id?: string;
    dynamic_account?: string;
    dynamic_ref?: string;
    score?: any;
}
export declare class CurpDto {
    curp: string;
}
export declare class MediaIdentityDto {
    url: string;
    name: eIdentityTypes;
    active: boolean;
    metadata: any;
    uploaded: number;
}
export declare class oClientV2Dto extends ClientDto {
    score: ScoreDto;
    scoreNoHit?: ScoreNoHitDto;
    study_degree?: string;
    seller_id?: string;
}
export declare class UpdateNotificationSimpleDto {
    token: string;
    id: string;
}
export declare class NotificationSubscription {
    token: string[];
}
