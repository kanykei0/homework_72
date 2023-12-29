export interface PizzaProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

export type PizzaApi = Omit<PizzaProps, "id">;

export interface PizzaMutation {
  title: string;
  price: string;
  image: string;
}

export interface UpdatePizza {
  id: string;
  pizza: PizzaApi;
}

export interface PizzaList {
  [id: string]: PizzaApi;
}

export interface CartPizza {
  [id: string]: number;
}

export interface Cart {
  dish: Dish;
  amount: number;
}

export interface Customer {
  name: string;
  address: string;
  phone: string;
}

export interface ApiOrder {
  customer: Customer;
  dishes: CartPizza;
}
