import path from "path";

require("dotenv").config();
import express from "express";
import sequelize from "./db";
import {User, Basket, BasketItem, Game, GameInfo, Publisher, Genre, Rating} from "./models/models";
import cors from "cors";
import fileUpload from "express-fileupload";
import router from "./routes/index";
import errorHandling from "./middleware/ErrorHandling";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHandling);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`App started on port ${PORT}`));
    } catch (error) {
        console.error(error);
    }
}

start();