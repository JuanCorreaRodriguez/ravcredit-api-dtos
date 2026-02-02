import { v4 } from 'uuid';
export class FactoryUtil {
    static async CreateUUID() {
        return v4();
    }
}
