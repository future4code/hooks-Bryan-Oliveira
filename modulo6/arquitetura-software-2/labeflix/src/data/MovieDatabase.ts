import { Movie } from "../types/movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    static TABLE_NAME: string = 'LABEFLIX_MOVIE'

    static async create(newMovie: Movie): Promise<void>{
        try {
            await MovieDatabase.connection(MovieDatabase.TABLE_NAME).insert(newMovie)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
}