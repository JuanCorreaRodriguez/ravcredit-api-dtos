import { PassportProviders } from './PassportDto.js';
import { PassportReferenceDataDto } from './PassportReferenceDataDto.js';
export declare class CreatePassportDto {
    type: string;
    data: PassportReferenceDataDto;
    references?: PassportProviders;
}
