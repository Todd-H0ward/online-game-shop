import { v4 as uuidv4 } from "uuid";
import path from "path";
import { Request, Response, NextFunction } from "express";
import {Game, GameInfo} from "../models/models";
import {ApiError} from "../error/apiError";
import {UploadedFile} from "express-fileupload";

export interface IInfoTypes {
    title: string;
    description: string;
    gameId: number;
}

export class GameController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            let {name, price, publisherId, genreId, info} = req.body;
            const fileName = uuidv4() + ".jpg";
            const img = req.files.img as UploadedFile;
            await img.mv(path.resolve(__dirname, "..", "static", fileName));

            const game = await Game.create({name, price, publisherId, genreId, img: fileName})

            if (info) {
                info = JSON.parse(info);
                info.forEach((item: IInfoTypes)  => {
                    GameInfo.create({
                        title: item.title,
                        description: item.description,
                        gameId: game.get("id")
                    })
                })
            }

            return res.json(game);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    static async getAll(req: Request, res: Response) {
        const {genreId, publisherId} = req.query;
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 9;
        const offset = page * limit - limit;
        const where: Record<string, string> = {};
        if (genreId && typeof genreId === "string") {
            where.genreId = genreId;
        }
        if (publisherId && typeof publisherId === "string") {
            where.publisherId = publisherId;
        }

        const games = await Game.findAndCountAll({where, limit, offset});
        return res.json(games);
    }

    static async getOne(req: Request, res: Response) {
        const {id} = req.params;
        const game = await Game.findOne(
            {
                where: {id},
                include: [{model: GameInfo, as: "info"}]
            }
        )
        return res.json(game);
    }
}