import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  createPizza,
  deletePizza,
  fetchAllPizza,
  fetchOnePizza,
  updatePizza,
} from "./pizzaThunk";
import { RootState } from "../app/store";
import { PizzaApi, PizzaProps } from "../types";

interface PizzaState {
  pizza: PizzaApi | null;
  pizzas: PizzaProps[];
  fetchLoading: boolean;
  createLoading: boolean;
  onePizzaLoading: boolean;
  updateLoading: boolean;
  deleteLoading: false | string;
}

const initialState: PizzaState = {
  pizza: null,
  pizzas: [],
  fetchLoading: false,
  createLoading: false,
  onePizzaLoading: false,
  updateLoading: false,
  deleteLoading: false,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPizza.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createPizza.fulfilled, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createPizza.rejected, (state) => {
      state.createLoading = false;
    });
    builder.addCase(fetchOnePizza.pending, (state) => {
      state.onePizzaLoading = true;
    });
    builder.addCase(
      fetchOnePizza.fulfilled,
      (state, { payload: pizza }: PayloadAction<PizzaApi | null>) => {
        state.onePizzaLoading = false;
        state.pizza = pizza;
      }
    );
    builder.addCase(fetchOnePizza.rejected, (state) => {
      state.onePizzaLoading = false;
    });
    builder.addCase(updatePizza.pending, (state) => {
      state.updateLoading = true;
    });
    builder.addCase(updatePizza.fulfilled, (state) => {
      state.updateLoading = false;
    });
    builder.addCase(updatePizza.rejected, (state) => {
      state.updateLoading = false;
    });
    builder.addCase(fetchAllPizza.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchAllPizza.fulfilled, (state, { payload: pizzas }) => {
      state.fetchLoading = false;
      state.pizzas = pizzas;
    });
    builder.addCase(fetchAllPizza.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(deletePizza.pending, (state, { meta }) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deletePizza.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deletePizza.rejected, (state) => {
      state.deleteLoading = false;
    });
  },
});

export const pizzaReducer = pizzaSlice.reducer;

export const selectPizza = (state: RootState) => state.pizza.pizza;
export const selectAllPizza = (state: RootState) => state.pizza.pizzas;
export const selectCreateLoading = (state: RootState) =>
  state.pizza.createLoading;
export const selectOnePizzaLoading = (state: RootState) =>
  state.pizza.onePizzaLoading;
export const selectUpdatePizzaLoading = (state: RootState) =>
  state.pizza.updateLoading;
export const selectFetchAllPizzaLoading = (state: RootState) =>
  state.pizza.fetchLoading;
export const selectDeleteLoading = (state: RootState) =>
  state.pizza.deleteLoading;
