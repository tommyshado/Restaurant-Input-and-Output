import express from "express";
import YAML from "yaml";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 8000;
const restaurantsFile = fs.readFileSync("./restaurants.yaml", "utf8");
const restaurants = YAML.parse(restaurantsFile);

app.get("/api/menu", (req, res) => {
    const { restaurant } = req.query;
    const restaurantsList = restaurants.restaurants_items;

    for (let i = 0; i < restaurantsList.length; i++) {
        const currentRestaurant = restaurantsList[i];
        if (currentRestaurant.name === restaurant) {
            res.status(200).json(currentRestaurant);
        };
    };
    res.status(404).send("Restaurant not found.");
});

app.listen(PORT, () => console.log("🚀 Restaurant Menu:", PORT));
