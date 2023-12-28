import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createPizza, fetchOnePizza, updatePizza } from "./pizzaThunk";
import { RootState } from "../app/store";
import { PizzaApi } from "../types";

interface PizzaState {
  pizza: PizzaApi | null;
  createLoading: boolean;
  onePizzaLoading: boolean;
  updateLoading: boolean;
}

const initialState: PizzaState = {
  pizza: null,
  createLoading: false,
  onePizzaLoading: false,
  updateLoading: false,
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
  },
});

export const pizzaReducer = pizzaSlice.reducer;

export const selectPizza = (state: RootState) => state.pizza.pizza;
export const selectCreateLoading = (state: RootState) =>
  state.pizza.createLoading;
export const selectOnePizzaLoading = (state: RootState) =>
  state.pizza.onePizzaLoading;
export const selectUpdatePizzaLoading = (state: RootState) =>
  state.pizza.updateLoading;
