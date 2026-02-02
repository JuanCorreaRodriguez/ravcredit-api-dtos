import { v4 } from 'uuid';

export class FactoryUtil {
  public static async CreateUUID(): Promise<string> {
    return v4();
  }
}
