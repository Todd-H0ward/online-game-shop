import Router from "express";
import {GenreController} from "../controllers/genreController";

const router = Router();

router.post("/create", GenreController.create);
router.get("/", GenreController.getAll);

export default router;