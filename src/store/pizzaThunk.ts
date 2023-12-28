import { createAsyncThunk } from "@reduxjs/toolkit";
import { PizzaApi } from "../types";
import axiosApi from "../axiosApi";

export const createPizza = createAsyncThunk<void, PizzaApi>(
  "pizza/create",
  async (pizza) => {
    await axiosApi.post("pizza.json", pizza);
  }
);
