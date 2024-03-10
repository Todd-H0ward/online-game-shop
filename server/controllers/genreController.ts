import {Genre} from "../models/models";
import { Request, Response } from "express";

export class GenreController {
    static async create(req: Request, res: Response) {
        const {name} = req.body;
        const genre = await Genre.create({name});
        return res.json(genre);
    }

    static async getAll(req: Request, res: Response) {
        const genres = await Genre.findAll();
        return res.json(genres);
    }
}