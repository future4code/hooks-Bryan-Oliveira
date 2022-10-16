import { PostDatabase } from "../data/PostDatabase"
import { NewPostInput, Post, POST_TYPES } from "../model/Post"
import { isValidStringDate } from "../services/isValidStringDate";

export class PostBusiness{
    async createPost(newPostInput: NewPostInput){

        try {      
            const { photo, description, type, authorId } = newPostInput
            let {createdAt} = newPostInput
            
            if(!photo || !description || !authorId ) throw new Error('"photo", "description" and "authorId" are required');

            if(type.toLowerCase()!== POST_TYPES.NORMAL &&
                type.toLowerCase()!== POST_TYPES.EVENT) throw new Error('type must be "normal" or "event"');

            if(createdAt && !isValidStringDate(createdAt as string)) throw new Error("createdAt must be in Date format");
            
            // createdAt = new Date(createdAt)

            const newPost: Post = new Post(authorId, description, photo, type, createdAt)

            await PostDatabase.create(newPost)
          
         } catch (error:any) {
           throw new Error(error.sqlMessage || error.message)
          
         }
    }

    async getAllPosts(): Promise<Post[]>{
        try {
           const posts =  await PostDatabase.getAll()

           if(!posts.length) throw new Error("no post found");

           return posts
           
        } catch (error: any) {
           throw new Error(error.sqlMessage || error.message)
            
        }
    }

    async getPostById(id: string): Promise<Post> {
        try {
            const post =  await PostDatabase.getById(id)

            if(!post) throw new Error("not found");

            return post 
        } catch (error: any) {
           throw new Error(error.sqlMessage || error.message)
            
        }
    }
}