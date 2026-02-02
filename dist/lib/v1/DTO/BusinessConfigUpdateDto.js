import { PartialType } from "@nestjs/mapped-types";
import { BusinessConfigDto } from './BusinessConfigDto.js';
export class BusinessConfigUpdateDto extends PartialType(BusinessConfigDto) {
}
