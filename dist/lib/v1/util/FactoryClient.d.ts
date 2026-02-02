import { ClientDto } from '../DTO/ClientDto.js';
import { PartialClientDto } from '../DTO/PartialClientDto.js';
import { IDCClientDto, IDCDataAccountDto } from '../DTO/DynamiCoreDto.js';
import { eGCActions } from "ravcredit-core";
export declare const cClient: ClientDto;
export declare class FactoryClient {
    static CreateClientObj(data: ClientDto | PartialClientDto, action: eGCActions): Promise<any>;
    static EncryptPassword(data: any): Promise<any>;
    static checkClientType(object: any): object is PartialClientDto;
    static CreateClientFromDynamicObj(account: IDCDataAccountDto, client: IDCClientDto): ClientDto;
}
