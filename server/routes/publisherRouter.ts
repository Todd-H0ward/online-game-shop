import Router from "express";
import {PublisherController} from "../controllers/publisherController";
const router = Router();

router.post("/create", PublisherController.create);
router.get("/", PublisherController.getAll);

export default router;