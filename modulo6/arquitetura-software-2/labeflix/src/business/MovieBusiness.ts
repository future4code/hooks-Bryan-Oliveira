import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'
import { Movie } from "../types/movie"

type InputCreateMovie = {
    title: string,
    description: string,
    duration_in_minutes: number,
    year_of_release: number,
}

export class MovieBusiness{
    static movieDatabase: MovieDatabase = new MovieDatabase()

    public async create(input: InputCreateMovie):Promise<void>{
        try {
            const {description, duration_in_minutes, year_of_release, title} = input
            const id = generateId()
            const newMovie: Movie = new Movie(id, title, description, duration_in_minutes, year_of_release )
            await MovieDatabase.create(newMovie)
        } catch (error: any) {
            throw new Error(error.message);
            
        }
    }
}