import * as bcrypt from "bcrypt";
export class Crypter {
    static async isValidPassword(i, compare) {
        return await bcrypt.compare(i, compare);
    }
    static async encryptPassword(i) {
        return await bcrypt.hash(i, 10);
    }
}
