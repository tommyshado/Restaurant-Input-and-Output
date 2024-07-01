"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const yaml_1 = __importDefault(require("yaml"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
const restaurantsFile = fs_1.default.readFileSync("./restaurants.yaml", "utf8");
const restaurants = yaml_1.default.parse(restaurantsFile);
app.get("/api/menu", (req, res) => {
    const { restaurant } = req.query;
    const restaurantsList = restaurants.restaurants_items;
    for (let i = 0; i < restaurantsList.length; i++) {
        const currentRestaurant = restaurantsList[i];
        if (currentRestaurant.name === restaurant) {
            res.status(200).json(currentRestaurant);
        }
        ;
    }
    ;
    res.status(404).send("Restaurant not found.");
});
app.listen(PORT, () => console.log("🚀 Restaurant Menu:", PORT));
