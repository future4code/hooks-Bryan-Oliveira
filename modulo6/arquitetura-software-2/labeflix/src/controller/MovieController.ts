import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
    static movieBusiness: MovieBusiness = new MovieBusiness()

    public async createMovie(req: Request, res: Response){
        try {
            const {title, 
                "durationInMinutes": duration_in_minutes,
                "yearOfRElease": year_of_release,
                description
            } = req.body
            const input = {
                title,
                duration_in_minutes,
                year_of_release,
                description
            } 
            await MovieController.movieBusiness.create(input)

            res.status(201).send('movie created!')
        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    } 
}