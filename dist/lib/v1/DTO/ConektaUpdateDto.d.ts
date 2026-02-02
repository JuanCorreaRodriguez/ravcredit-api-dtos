import { ConektaDto } from './ConektaDto.js';
declare const ConektaUpdateDto_base: import("@nestjs/mapped-types").MappedType<Partial<ConektaDto>>;
export declare class ConektaUpdateDto extends ConektaUpdateDto_base {
    name: string;
    email: string;
    phone: string;
}
export {};
