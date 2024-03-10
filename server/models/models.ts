import sequelize from "../db";
import {DataTypes} from "sequelize";

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "user"}
})

const Basket = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketItem = sequelize.define("basket_item", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Game = sequelize.define("game", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.FLOAT, allowNull: false},
    rating: {type: DataTypes.FLOAT, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const GameInfo = sequelize.define("game_info", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const Publisher = sequelize.define("publisher", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Genre = sequelize.define("genre", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define("rating", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketItem);
BasketItem.belongsTo(Basket);

Genre.hasMany(Game);
Game.belongsTo(Genre);

Game.hasMany(Rating);
Rating.belongsTo(Game);

Publisher.hasMany(Game);
Game.belongsTo(Publisher);

Game.hasMany(GameInfo, {as: "info"});
GameInfo.belongsTo(Game);

Game.hasMany(BasketItem);
BasketItem.belongsTo(Game);

Game.hasMany(GameInfo);
GameInfo.belongsTo(Game);

export {
    User,
    Basket,
    BasketItem,
    Game,
    GameInfo,
    Publisher,
    Genre,
    Rating,
}