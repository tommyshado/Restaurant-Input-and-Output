document.addEventListener("DOMContentLoaded", () => {
    let restaurantsTemplate = document.querySelector(".restaurants-template");
    let restaurantsInstance = Handlebars.compile(restaurantsTemplate.innerHTML);

    function findRestaurants() {
        let restaurantsReference = document.querySelector(".restaurants");
        axios.get("/api").then((results) => {
            const data = results.data;
            if (data) {
                restaurantsReference.innerHTML = restaurantsInstance(data);
            }
        });
    }
    findRestaurants();

    function findRestaurantMenu() {
        let menuReference = document.querySelector(".restaurant-menu");
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const restaurantParamValue = urlParams.get("restaurant");

        if (!restaurantParamValue) return "restaurant undefined";
        else
            axios
                .get(`/api/menu?restaurant=${restaurantParamValue}`)
                .then((results) => {
                    const data = results.data;
                    if (data) {
                        menuReference.innerHTML = restaurantsInstance(data);
                    }
                });
    }
    findRestaurantMenu();
});
