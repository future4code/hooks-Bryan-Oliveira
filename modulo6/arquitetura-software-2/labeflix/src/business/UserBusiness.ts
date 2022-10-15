import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { User } from "../types/User"

export class UserBusiness {

  private userDatabase = new UserDatabase()

  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    await this.userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  public async getAllUsers():Promise<User[]>{
    try {
      return this.userDatabase.getAll()
    } catch (error: any) {
      throw new Error(error.message || 'error in getAllUsers');
    }
  }
}
