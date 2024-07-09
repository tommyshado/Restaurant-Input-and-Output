import express, { Request, Response } from "express";
import RestaurantImpl from "./RestaurantImpl";
import restaurantsList from "./utils/RestaurantList";
import path from "path";
import fs from "fs";
import { marked } from "marked";
import cors from "cors";
import { IRestaurant } from "./IRestaurant";

const app = express();
const PORT = process.env.PORT || 3000;
const Restaurant = new RestaurantImpl();

app.use(express.static("public"));
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
    const restaurants: IRestaurant[] = restaurantsList;
    if (restaurants.length >= 1) {
        res.status(200).json(restaurants);
    } else {
        res.status(404).send("Restaurants not found.");
    }
});

app.get("/api/menu", (req: Request, res: Response) => {
    const { restaurant } = req.query;
    if (!restaurant) return res.status(400).send("Restaurant name is required.");
    const foundRestaurant: IRestaurant = Restaurant.findRestaurant(
        restaurantsList,
        restaurant as string
    );
    if (foundRestaurant.name) {
        res.status(200).json(foundRestaurant);
    }
    res.status(404).send("Restaurant not found.");
});

app.get("/menu", (req: Request, res: Response) => {
    const { restaurant } = req.query;
    if (!restaurant) return res.status(400).send("Restaurant name is required.");
    try {
        const baseDir = path.resolve(__dirname, "../");
        const filePath = path.join(baseDir, "menu", `${restaurant}.md`);
        const file = fs.readFileSync(filePath, "utf8");
        const htmlContent = marked(file);
        res.status(200).send(htmlContent);
    } catch (error) {
        console.error(error);
        res.status(404).send("File not found.");
    }
});

app.listen(PORT, () => console.log("🚀 Restaurant Menu:", PORT));
