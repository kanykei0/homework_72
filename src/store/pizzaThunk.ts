import { createAsyncThunk } from "@reduxjs/toolkit";
import { PizzaApi, UpdatePizza } from "../types";
import axiosApi from "../axiosApi";

export const createPizza = createAsyncThunk<void, PizzaApi>(
  "pizza/create",
  async (pizza) => {
    await axiosApi.post("pizza.json", pizza);
  }
);

export const fetchOnePizza = createAsyncThunk<PizzaApi, string>(
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

export const updatePizza = createAsyncThunk<void, UpdatePizza>(
  "pizza/updatePizza",
  async ({ id, pizza }) => {
    await axiosApi.put(`pizza/${id}.json`, pizza);
  }
);
