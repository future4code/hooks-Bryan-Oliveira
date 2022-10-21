import { UserDatavbase } from "../data/UserDatabase"
import { User } from "../model/User";

type InputCreateUSer = {
    email: string, 
    name: string, 
    password: string
}

const userDb = new UserDatavbase()

export class UserBusiness{
    public async createUser(input: InputCreateUSer){
        try {
            const {name, email, password} = input

            if(!name || !email || !password)throw new Error("passe email, name e password no body");
            
            const id = Date.now().toString()

            const newUSer: User = new User(id, name, email, password)

            await userDb.create(newUSer)


        } catch (error: any) {
            throw new Error( error.message || 'erro ao criar usuario');
        
        }
    }

    public async getAll(): Promise<User[] | undefined> {
        try{
            const result =  await userDb.getAll()

            return result
        }catch (error: any){
            throw new Error( error.message || 'erro ao buscar usuarios');
        }
    }

    public async deleteUser(id: string): Promise<void>{
        try {
            await userDb.delete(id)
        } catch (error: any) {
            throw new Error( error.message || 'erro ao buscar usuarios');
        }
    }
}