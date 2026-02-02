import {PartialType} from '@nestjs/mapped-types';
import {DynamicCoreDto} from './DynamiCoreDto.js';

export class DynamicUpdateReferenceDto extends PartialType(DynamicCoreDto) {
}
