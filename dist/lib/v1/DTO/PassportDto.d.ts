import { PassportReferenceDataDto } from './PassportReferenceDataDto.js';
export declare class PassportProviders {
    reference: string;
    centerId: string;
}
export declare class PassportReferenceCentersDto {
    name: string;
    logo: string;
}
export declare class PassportReferenceDto {
    reference: string;
    centers: PassportReferenceCentersDto[];
    centerId: number;
    barcode: string;
}
export declare class PassportReferenceResDto {
    type: string;
    data: PassportReferenceDataDto;
    message: string;
    references: PassportReferenceDto[];
}
export declare class PassportContract {
    id: string;
    client: string;
}
export declare class PassportApiResponseDto {
    reference: PassportReferenceResDto;
    id: string;
    contract: PassportContract;
}
