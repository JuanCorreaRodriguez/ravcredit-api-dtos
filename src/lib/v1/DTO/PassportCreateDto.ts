import {IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {PassportProviders} from './PassportDto.js';
import {PassportReferenceDataDto} from './PassportReferenceDataDto.js';

export class CreatePassportDto {
    @IsString()
    type: string;

    @Type(() => PassportReferenceDataDto)
    @ValidateNested({each: true})
    data: PassportReferenceDataDto;

    @IsOptional()
    @Type(() => PassportProviders)
    @ValidateNested({each: true})
    references?: PassportProviders;
}
