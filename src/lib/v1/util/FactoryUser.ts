import {v4} from 'uuid';
import {UpdateUserDto, UserDto} from '../DTO/UserDto.js';
import {Crypter} from "../core/Crypt.js";
import {eGCActions} from "ravcredit-core";

export class FactoryUser {
    public static async createUserObj(data: UpdateUserDto, action: eGCActions) {
        const o: any = {};

        //Adjust attributes
        if (data['name']) o['name'] = data.name;
        if (data['username']) o['username'] = data.username;
        if (data['role']) o['role'] = data.role;

        if (action === eGCActions.LoginTime) {
            // Define Dates
            o['lastLogin'] = new Date().getTime();
        }

        if (action === eGCActions.Create) {

            // Define UUID
            o['id'] = v4();
            o['createdAt'] = new Date().getTime();

            // Encrypt Password
            if (data['password'])
                o['password'] = await Crypter.encryptPassword(data.password);
        }

        return o;
    }

    public static UserFromServer(data: UserDto) {
        const o: any = {};

        //Adjust attributes
        if (data.name) o['name'] = data.name;
        if (data.username) o['username'] = data.username;
        if (data.role) o['role'] = data.role;
        if (data.lastLogin) o['lastLogin'] = data.lastLogin;
        if (data.createdAt) o['createdAt'] = data.createdAt;

        return o;
    }
}
