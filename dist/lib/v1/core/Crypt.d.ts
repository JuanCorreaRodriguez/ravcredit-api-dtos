export declare class Crypter {
    static isValidPassword(i: string, compare: string): Promise<boolean>;
    static encryptPassword(i: string): Promise<string>;
}
