import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart, PizzaProps } from "../types";
import { orderPizza } from "./cartThunk";
import { RootState } from "../app/store";

interface CartState {
  cartDishes: Cart[];
  addToCartLoading: boolean;
}

const initialState: CartState = {
  cartDishes: [],
  addToCartLoading: false,
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
  extraReducers: (builder) => {
    builder.addCase(orderPizza.pending, (state) => {
      state.addToCartLoading = true;
    });
    builder.addCase(orderPizza.fulfilled, (state) => {
      state.addToCartLoading = false;
    });
    builder.addCase(orderPizza.rejected, (state) => {
      state.addToCartLoading = false;
    });
  },
});

export const cartReducer = cartSlice.reducer;

export const { addPizza, deleteCartPizza, clearCart } = cartSlice.actions;
export const selectCartPizza = (state: RootState) => state.cart.cartDishes;
