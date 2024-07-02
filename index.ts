import express, { Request, Response } from "express";
import RestaurantImpl from "./RestaurantImpl";
import restaurantsList from "./utils/RestaurantList";

const app = express();
const PORT = process.env.PORT || 8000;
const Restaurant = new RestaurantImpl();

app.get("/api/menu", (req: Request, res: Response) => {
    const { restaurant } = req.query;
    const foundRestaurant = Restaurant.findRestaurant(restaurantsList, restaurant as string);
    if (foundRestaurant.name) {
        res.status(200).json(foundRestaurant);
    }
    res.status(404).send("Restaurant not found.");
});

app.listen(PORT, () => console.log("🚀 Restaurant Menu:", PORT));
