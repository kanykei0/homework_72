import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart, OrdersApi, PizzaProps } from "../types";
import { RootState } from "../app/store";

interface CartState {
  cartDishes: Cart[];
  orders: OrdersApi[];
  addToCartLoading: boolean;
  ordersLoading: boolean;
}

const initialState: CartState = {
  cartDishes: [],
  orders: [],
  addToCartLoading: false,
  ordersLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza: (state, { payload: dish }: PayloadAction<PizzaProps>) => {
      const index = state.cartDishes.findIndex(
        (cartDish) => cartDish.dish.id === dish.id
      );
      if (index !== -1) {
        state.cartDishes[index].amount++;
      } else {
        state.cartDishes.push({
          amount: 1,
          dish,
        });
      }
    },
    deleteCartPizza: (state, { payload: dish }: PayloadAction<PizzaProps>) => {
      state.cartDishes = state.cartDishes.filter((cartDish) => {
        return cartDish.dish.id !== dish.id;
      });
    },
    clearCart: (state) => {
      state.cartDishes = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addPizza, deleteCartPizza, clearCart } = cartSlice.actions;
export const selectCartPizza = (state: RootState) => state.cart.cartDishes;

export const selectOrders = (state: RootState) => state.cart.orders;
export const selectOrdersLoading = (state: RootState) =>
  state.cart.ordersLoading;
