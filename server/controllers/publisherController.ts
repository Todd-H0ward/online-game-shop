import {Publisher} from "../models/models";
import { Request, Response } from "express";

export class PublisherController {
    static async create(req: Request, res: Response) {
        const {name} = req.body;
        const publisher = await Publisher.create({name});
        return res.json(publisher);
    }

    static async getAll(req: Request, res: Response) {
        const publishers = await Publisher.findAll();
        return res.json(publishers);
    }
}