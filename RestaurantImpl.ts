import { IRestaurant } from "./IRestaurant";

export default class RestaurantImpl {
    findRestaurant(restaurantsList: IRestaurant[], restaurant: string): IRestaurant | boolean {
        for (let i = 0; i < restaurantsList.length; i++) {
            const currentRestaurant: IRestaurant = restaurantsList[i];
            if (currentRestaurant.name === restaurant) {
                return currentRestaurant;
            };
        };
        return false;
    }
}