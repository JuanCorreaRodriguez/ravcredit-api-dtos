import {IsArray, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {PassportReferenceDataDto} from './PassportReferenceDataDto.js';

export class PassportProviders {
    reference: string;
    centerId: string;
}

export class PassportReferenceCentersDto {
    @IsString()
    name: string;

    @IsString()
    logo: string;
}

export class PassportReferenceDto {
    @IsString()
    reference: string;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => PassportReferenceCentersDto)
    centers: PassportReferenceCentersDto[];

    @IsNumber()
    centerId: number;

    @IsString()
    barcode: string;
}

export class PassportReferenceResDto {
    @IsString()
    type: string;

    @ValidateNested()
    @Type(() => PassportReferenceDataDto)
    data: PassportReferenceDataDto;

    @IsString()
    message: string;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => PassportReferenceDto)
    references: PassportReferenceDto[];
}

export class PassportContract {
    @IsString()
    id: string;

    @IsString()
    client: string;
}

export class PassportApiResponseDto {
    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => PassportReferenceResDto)
    reference: PassportReferenceResDto;

    @IsString()
    id: string;

    @ValidateNested({each: true})
    @Type(() => PassportContract)
    contract: PassportContract;
}

// export interface iPassportAdditional {
//   client: string;
//   clientID: string;
//   credit: string;
// }
//
// export interface iPassportReferenceData {
//   name: string;
//   email: string;
//   amount: number;
//   expirationDate: string;
//   additional: iPassportAdditional;
// }
//
// export interface iPassportReference {
//   type: string;
//   data: iPassportReferenceData;
// }
//
// export interface iPassportResponseData {
//   name: string;
//   email: string;
//   amount: number;
//   expirationDate: string;
//   additional: iPassportAdditional;
// }
//
// export interface iPassportReferenceCenters {
//   name: string;
//   logo: string;
// }
//
// export interface iPassportReference {
//   reference: string
//   centers: iPassportReferenceCenters[],
//   centerId: number,
//   barcode: string
// }
//
// export interface iPassportResponse {
//   type: string;
//   data: iPassportResponseData;
//   message: string;
//   references: iPassportReference[];
// }
//
// export interface iPassportApiResponse {
//   response: any,
//   id: string
//   contract: {
//     id: string
//     client: string
//   },
// }
