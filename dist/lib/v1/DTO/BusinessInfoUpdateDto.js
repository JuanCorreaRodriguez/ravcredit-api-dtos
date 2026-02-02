import { PartialType } from "@nestjs/mapped-types";
import { BusinessInfoDto } from './BusinessInfoDto.js';
export class BusinessInfoUpdateDto extends PartialType(BusinessInfoDto) {
}
