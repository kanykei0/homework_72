import { createAsyncThunk } from "@reduxjs/toolkit";
import { PizzaApi, PizzaList, PizzaProps, UpdatePizza } from "../types";
import axiosApi from "../axiosApi";
import { AppDispatch } from "../app/store";

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

export const fetchAllPizza = createAsyncThunk<
  PizzaProps[],
  undefined,
  { dispatch: AppDispatch }
>("piiza/allPizza", async (_) => {
  const pizzaResponse = await axiosApi.get<PizzaList | null>("pizza.json");
  const pizza = pizzaResponse.data;

  let newPizza: PizzaProps[] = [];

  if (pizza) {
    newPizza = Object.keys(pizza).map((key) => {
      const pizzas = pizza[key];
      return {
        ...pizzas,
        id: key,
      };
    });
  }

  return newPizza;
});

export const deletePizza = createAsyncThunk<void, string>(
  "pizza/delete",
  async (id: string) => {
    await axiosApi.delete(`pizza/${id}.json`);
  }
);
