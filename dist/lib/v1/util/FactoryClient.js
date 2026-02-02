import { Crypter } from "../core/Crypt.js";
import { eClientStatus, eGCActions } from "ravcredit-core";
export const cClient = {
    id: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    curp: '',
    createdAt: 0,
    userReferences: [],
    status: '',
    contract: '',
    password: '',
    lastLogin: 0,
    payments: [],
    reference: '',
    references: [],
    token: '',
    notifications: [],
    contractUrl: '',
    exists: false,
    contract_temporary: '',
    conekta_id: '',
    passport_id: '',
    dynamic_id: '',
    dynamic_account: '',
};
export class FactoryClient {
    static async CreateClientObj(data, action) {
        const o = {};
        if (data.id)
            o['id'] = data.id;
        if (data.name)
            o['name'] = data.name;
        if (data.username)
            o['username'] = data.username;
        if (data.email)
            o['email'] = data.email;
        if (data.phone)
            o['phone'] = data.phone;
        if (data.curp)
            o['curp'] = data.curp;
        if (data.contract)
            o['contract'] = data.contract;
        if (data.conekta_id)
            o['conekta_id'] = data.conekta_id;
        if (data.payments)
            o['payments'] = data.payments;
        if (data.reference)
            o['reference'] = data.reference;
        if (data.userReferences)
            o['userReferences'] = data.userReferences;
        if (data.contractUrl)
            o['contractUrl'] = data.contractUrl;
        if (data.status)
            o['status'] = data.status;
        if (data.dynamic_id)
            o['dynamic_id'] = data.dynamic_id;
        if (data.dynamic_account)
            o['dynamic_account'] = data.dynamic_account;
        if (action === eGCActions.LoginTime) {
            // Define Dates
            o['lastLogin'] = new Date().getTime();
        }
        if (action === eGCActions.Create) {
            // Define UUID
            // o["id"] = v4()
            o['createdAt'] = new Date().getTime();
            // Encrypt Password
            if (data['password'])
                o['password'] = await Crypter.encryptPassword(data.password);
            o['status'] = 'active';
        }
        return o;
    }
    static async EncryptPassword(data) {
        const o = {};
        // Encrypt Password
        if (data['password'])
            o['password'] = await Crypter.encryptPassword(data.password);
        return o;
    }
    //Guard Type
    static checkClientType(object) {
        return 'conekta' in object;
    }
    static CreateClientFromDynamicObj(account, client) {
        const createdAt = new Date(client.created_at).getTime();
        const o = {
            id: '',
            name: [client.pii.name, client.pii.lastname, client.pii.motherlastname].join(' '),
            username: String(client.pii.phone),
            password: client.pii.curp,
            email: client.pii.email,
            phone: String(client.pii.phone),
            curp: client.pii.curp,
            userReferences: [],
            createdAt: createdAt,
            status: eClientStatus.ACTIVE,
        };
        if (client.id)
            o.dynamic_id = String(client.id);
        if (account.id)
            o.dynamic_account = String(account.id);
        return o;
    }
}
