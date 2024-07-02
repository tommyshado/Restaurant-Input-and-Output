"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RestaurantImpl_1 = __importDefault(require("./RestaurantImpl"));
const RestaurantList_1 = __importDefault(require("./utils/RestaurantList"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
const Restaurant = new RestaurantImpl_1.default();
app.get("/api/menu", (req, res) => {
    const { restaurant } = req.query;
    const foundRestaurant = Restaurant.findRestaurant(RestaurantList_1.default, restaurant);
    if (foundRestaurant.name) {
        res.status(200).json(foundRestaurant);
    }
    res.status(404).send("Restaurant not found.");
});
app.listen(PORT, () => console.log("🚀 Restaurant Menu:", PORT));
