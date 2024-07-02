import express, { Request, Response } from "express";
import RestaurantImpl from "./RestaurantImpl";
import restaurantsList from "./utils/RestaurantList";
import path from "path";
import fs from "fs";
import { marked } from "marked";

const app = express();
const PORT = process.env.PORT || 8000;
const Restaurant = new RestaurantImpl();

app.get("/api/menu", (req: Request, res: Response) => {
    const { restaurant } = req.query;
    if (!restaurant) return res.status(400).send("Restaurant name is required.");
    try {
        const foundRestaurant = Restaurant.findRestaurant(
            restaurantsList,
            restaurant as string
        );
        if (foundRestaurant.name) {
            res.status(200).json(foundRestaurant);
        }
    } catch (error) {
        console.error(error);
        res.status(404).send("Restaurant not found.");
    }
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
