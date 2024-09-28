// import startContacts from "../components/contact.json";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCatalog, fetchCarId } from "./operations";
import { selectCatalog, selectNameFilter } from "./selectors";

const Slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    
  },
});

export const visibleCars = createSelector(
  [selectCatalog, selectNameFilter],
  (cars, filtersCar) => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(filtersCar.toLowerCase())
    );
  }
);


export const Reducer = Slice.reducer;
