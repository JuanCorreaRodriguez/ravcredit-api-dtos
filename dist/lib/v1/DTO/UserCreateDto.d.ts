import { eRoles } from 'ravcredit-lib';
export declare class UserCreateDto {
    id: string;
    username: string;
    name: string;
    password: string;
    role: eRoles;
    createdAt: number;
    lastLogin: number;
}
