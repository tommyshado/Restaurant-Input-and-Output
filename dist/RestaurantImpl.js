"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RestaurantImpl {
    findRestaurant(restaurantsList, restaurant) {
        for (let i = 0; i < restaurantsList.length; i++) {
            const currentRestaurant = restaurantsList[i];
            if (currentRestaurant.name === restaurant) {
                return currentRestaurant;
            }
            ;
        }
        ;
        return {
            name: "",
            site: "",
            email: "",
            phone_number: 0,
            menu_items: [],
        };
    }
    findRestaurants(restaurantsList) {
        return restaurantsList;
    }
    ;
}
exports.default = RestaurantImpl;
