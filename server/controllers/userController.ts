import {ApiError} from "../error/apiError";
import {NextFunction, Request, Response} from "express";

export class UserController {
    static async registration(req: Request, res: Response) {

    }

    static async login(req: Request, res: Response) {

    }

    static async checkAuth(req: Request, res: Response, next: NextFunction) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest("Empty id field"))
        }
        res.json(id);
    }
}