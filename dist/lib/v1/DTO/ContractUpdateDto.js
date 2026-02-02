import { PartialType } from "@nestjs/mapped-types";
import { ContractDto } from './ContractDto.js';
export class ContractUpdateDto extends PartialType(ContractDto) {
}
