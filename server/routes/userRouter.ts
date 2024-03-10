import Router from "express";
import {UserController} from "../controllers/userController";

const router = Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/auth", UserController.checkAuth);

export default router;