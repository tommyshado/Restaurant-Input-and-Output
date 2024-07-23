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
        return false;
    }
}
exports.default = RestaurantImpl;
