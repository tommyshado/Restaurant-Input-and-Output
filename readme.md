# Restaurant Inputs and Outputs

## Overview

This project involves exploring various inputs and outputs using different restaurant menus stored in a YAML file. It demonstrates reading the restaurant menu data from a YAML file, converting it into a computer-readable format and displays on the screen using an API endpoint. It also demonstrates reading the name of a readme.md file and converting the content into HTML elements.

## Getting Started

1. Clone the repository using `git clone <project_URL>`.
2. Navigate into the repository using `cd Restaurant-Inputs-and-Outputs`.
3. Inside the directory install all the necessary dependencies using `npm install`.

## API Documentation

The Application URL and Base URL for all the endpoints is:

``` api
https://restaurant-inputs-and-outputs-r0fi.onrender.com/
```

1. **Fetch all the restaurant menu from the** `restaurants.yaml file`

    * **End point:** `/api`
    * **Method:** `GET`
    * **Description:** `Fetches all the restaurants`

2. **Fetch restaurant menu for specified a restaurant from the** `restaurant.yaml file`

    * **End point:** `/api/menu?restaurant={restaurant_name}`
    * **Method:** `GET`
    * **Params:** `Specify a parameter like this: restaurant={restaurant_name}`
    * **Description:** `Fetches restaurant menu for a specified restaurant`

3. **Convert readme files in the `menu folder` into HTML elements**

    * **End point:** `/menu?restaurant={restaurant_file_name}`
    * **Method:** `GET`
    * **Params:** `Specify a parameter like this: restaurant={restaurant_file_name}`
    * **Description:** `Converts readme files in the menu folder into HTML elements`

## Contributing

If you're interested in contributing to this project, please feel free to contribute and fix any issues.

## License

This project is licensed under the MIT LICENSE. See the `LICENSE` file for details.