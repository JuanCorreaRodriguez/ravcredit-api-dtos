import { UpdateUserDto, UserDto } from '../DTO/UserDto.js';
import { eGCActions } from "ravcredit-core";
export declare class FactoryUser {
    static createUserObj(data: UpdateUserDto, action: eGCActions): Promise<any>;
    static UserFromServer(data: UserDto): any;
}
