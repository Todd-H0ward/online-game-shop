import Router from "express";
import {GameController} from "../controllers/gameController";
const router = Router();

router.post("/create", GameController.create);
router.get("/", GameController.getAll);
router.get("/:id", GameController.getOne);

export default router;