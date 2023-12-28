import { createSlice } from "@reduxjs/toolkit";
import { createPizza } from "./pizzaThunk";
import { RootState } from "../app/store";

interface PizzaState {
  createLoading: boolean;
}

const initialState: PizzaState = {
  createLoading: false,
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
  },
});

export const pizzaReducer = pizzaSlice.reducer;

export const selectCreateLoading = (state: RootState) =>
  state.pizza.createLoading;
