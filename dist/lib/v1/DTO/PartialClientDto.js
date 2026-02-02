import { PartialType } from '@nestjs/mapped-types';
import { ClientDto } from './ClientDto.js';
export class PartialClientDto extends PartialType(ClientDto) {
}
