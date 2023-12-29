import { configureStore } from "@reduxjs/toolkit";
import { pizzaReducer } from "../store/pizzaSlice";
import { cartReducer } from "../store/cartSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
