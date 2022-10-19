import { NewUserInput, User } from "../model/User"
import { UserDatabase } from "../data/UserDatabase"
import { FriendshipDatabase } from "../data/FriendsDatabase"



export class UserBusiness{
    create = async (NewUserInput: NewUserInput): Promise<void> => {
        try {
            const { name, email, password } = NewUserInput
     
            if (!name || !email || !password) throw new Error('"name", "email" and "password" must be provided')
           
            const findByEmail = await UserDatabase.getByEmail(email)

            if(findByEmail.length) throw new Error('email alredy used');

            if (password.length < 6) throw new Error('password must have more than 5 characters');
            
           
            const newUser: User = new User( name, email, password )

            await UserDatabase.create(newUser)
              
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
           
        }
     }

     async getAll(): Promise<User[]>{
      try {
        const users: User[] =  await UserDatabase.getAll()

        if(!users.length) throw new Error("not found");
        return users
      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
         
      }
     }

     async getUserFeed(id: string, page?: number){
        try {
            page = isNaN(Number(page))? 1 : page             
            const friendships = await FriendshipDatabase.getUserFriendships(id)
            const friends: string[] = friendships.map(friendship => friendship?.user1_id? friendship.user1_id : friendship.user2_id)
            
            const result = await UserDatabase.getUserFeed(friends, page)
            return result
        } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
            
        }
     }
}