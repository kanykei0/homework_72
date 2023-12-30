import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { PizzaApi } from "../types";

export const fetchOneOrderPizza = createAsyncThunk<PizzaApi, string>(
  "pizza/fetchPizza",
  async (id) => {
    const response = await axiosApi.get<PizzaApi | null>(`pizza/${id}.json`);
    const pizza = response.data;

    if (pizza === null) {
      throw new Error("Not Found");
    }

    return pizza;
  }
);
