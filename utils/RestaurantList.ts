import YAML from "yaml";
import fs from "fs";
import { IRestaurant } from "../IRestaurant";

const restaurantsFile = fs.readFileSync("./restaurants.yaml", "utf8");
const restaurants = YAML.parse(restaurantsFile);
export default restaurants.restaurants_items as IRestaurant[];