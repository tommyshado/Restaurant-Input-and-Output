"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RestaurantImpl_1 = __importDefault(require("./RestaurantImpl"));
const RestaurantList_1 = __importDefault(require("./utils/RestaurantList"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const marked_1 = require("marked");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const Restaurant = new RestaurantImpl_1.default();
app.use(express_1.default.static("public"));
app.use((0, cors_1.default)());
app.get("/api", (req, res) => {
    const restaurants = RestaurantList_1.default;
    if (restaurants.length >= 1) {
        res.status(200).json(restaurants);
    }
    else {
        res.status(404).send("Restaurants not found.");
    }
});
app.get("/api/menu", (req, res) => {
    const { restaurant } = req.query;
    if (!restaurant)
        return res.status(400).send("Restaurant name is required.");
    const foundRestaurant = Restaurant.findRestaurant(RestaurantList_1.default, restaurant);
    if (foundRestaurant) {
        res.status(200).json(foundRestaurant);
    }
    res.status(404).send("Restaurant not found.");
});
app.get("/menu", (req, res) => {
    const { restaurant } = req.query;
    if (!restaurant)
        return res.status(400).send("Restaurant name is required.");
    try {
        const baseDir = path_1.default.resolve(__dirname, "../");
        const filePath = path_1.default.join(baseDir, "menu", `${restaurant}.md`);
        const file = fs_1.default.readFileSync(filePath, "utf8");
        const htmlContent = (0, marked_1.marked)(file);
        res.status(200).send(htmlContent);
    }
    catch (error) {
        console.error(error);
        res.status(404).send("File not found.");
    }
});
app.listen(PORT, () => console.log("🚀 Restaurant Menu:", PORT));
