import { eRoles } from 'ravcredit-lib';
export declare class UserDto {
    id: string;
    username: string;
    name: string;
    password: string;
    role: eRoles;
    createdAt?: number;
    lastLogin: number;
}
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<UserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
