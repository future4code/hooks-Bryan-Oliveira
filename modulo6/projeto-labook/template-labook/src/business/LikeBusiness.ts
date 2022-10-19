import { LikeDatabase } from "../data/LikeDatabase";
import { PostDatabase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Like } from "../model/Like";

export class LikeBusiness{
    async likePost(input: any): Promise<void>{
        try {
            const {userId, postId} = input
            
            const findUsrById = await UserDatabase.getById(userId)

            if(!findUsrById.length)throw new Error("user not found");

            const findPostById = await PostDatabase.getById(postId)

            if(!findPostById)throw new Error("post not found");

            const findLikeByUserAndPosIds = await LikeDatabase.getByUserAndPostIds(userId, postId)

            if(findLikeByUserAndPosIds)throw new Error("user alredy liked this post!");
            
            const newLike = new Like(userId, postId)

            await LikeDatabase.create(newLike)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);  
        }
    }
}