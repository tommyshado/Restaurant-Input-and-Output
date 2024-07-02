import { IRestaurant } from "./IRestaurant";

export default class RestaurantImpl {
    findRestaurant(restaurantsList: IRestaurant[], restaurant: string): IRestaurant {
        for (let i = 0; i < restaurantsList.length; i++) {
            const currentRestaurant: IRestaurant = restaurantsList[i];
            if (currentRestaurant.name === restaurant) {
                return currentRestaurant;
            };
        };
        return {
            name: "",
            site: "",
            email: "",
            phone_number: 0,
            menu_items: [],
        }
    }
}