document.addEventListener("DOMContentLoaded", () => {
    // Compile the Handlebars templates
    const restaurantsTemplate = Handlebars.compile(document.getElementById("restaurants-template").innerHTML);
    const restaurantMenuTemplate = Handlebars.compile(document.getElementById("restaurant-menu-template").innerHTML);
    // Function to load and display restaurants
    function findRestaurants() {
        const restaurantsReference = document.querySelector(".restaurants");
        axios.get("/api").then((results) => {
            const data = results.data;
            if (data) {
                restaurantsReference.innerHTML = restaurantsTemplate(data);
            }
        }).catch(error => {
            console.error(error);
            restaurantsReference.innerHTML = `An error occurred while fetching restaurants.`;
        });
    }
    // Function to load and display the restaurant menu
    function findRestaurantMenu(restaurant) {
        const menuReference = document.querySelector(".restaurant-menu");
        axios.get(`/api/menu?restaurant=${restaurant}`).then(results => {
            const data = results.data;
            if (data) {
                menuReference.innerHTML = restaurantMenuTemplate(data);
            }
        }).catch(error => {
            console.error(error);
            menuReference.innerHTML = `An error occurred while fetching restaurant menu for ${restaurant}.`;
        });
    }
    function loadRestaurantMenu() {
        const hash = window.location.hash.substring(1);
        const urlParams = new URLSearchParams(hash);
        const restaurantName = urlParams.get("restaurant");
        if (restaurantName) {
            findRestaurantMenu(restaurantName);
        }
    }
    // Event listener for hash changes
    window.addEventListener('hashchange', loadRestaurantMenu);
    // Load the initial data
    findRestaurants();
});
