import Router from "express";
import gameRouter from "./gameRouter";
import genreRouter from "./genreRouter";
import publisherRouter from "./publisherRouter";
import userRouter from "./userRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/game", gameRouter);
router.use("/publisher", publisherRouter);
router.use("/genre", genreRouter);

export default router;