import * as bcrypt from "bcrypt";

export class Crypter {
  public static async isValidPassword(i:string,  compare: string){
    return await bcrypt.compare(i, compare)
  }
  public static async encryptPassword(i: string){
    return await bcrypt.hash(i, 10)
  }
}