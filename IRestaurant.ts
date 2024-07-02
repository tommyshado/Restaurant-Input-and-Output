interface IMenuItems {
    name: string;
    price: number;
    description: string;
};

export interface IRestaurant {
    name: string;
    site: string;
    email: string;
    phone_number: number;
    menu_items: IMenuItems[];
};