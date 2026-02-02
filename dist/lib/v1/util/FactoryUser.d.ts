import { eGCActions } from "ravcredit-lib";
import { UpdateUserDto, UserDto } from '../DTO/UserDto.js';
export declare class FactoryUser {
    static createUserObj(data: UpdateUserDto, action: eGCActions): Promise<any>;
    static UserFromServer(data: UserDto): any;
}
