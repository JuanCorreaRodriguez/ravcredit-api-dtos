import {IsOptional, IsString} from 'class-validator';
import {ConektaDto} from './ConektaDto.js';
import {PartialType} from '@nestjs/mapped-types';

export class ConektaUpdateDto extends PartialType(ConektaDto) {

    @IsString()
    @IsOptional()
    name: string

    @IsString()
    @IsOptional()
    email: string

    @IsString()
    @IsOptional()
    phone: string
}
