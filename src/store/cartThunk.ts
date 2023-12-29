import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { CartPizza } from "../types";

export const orderPizza = createAsyncThunk<void, CartPizza>(
  "cart/add",
  async (cartPizza) => {
    await axiosApi.post("pizzaCart.json", cartPizza);
  }
);
