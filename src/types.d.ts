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
