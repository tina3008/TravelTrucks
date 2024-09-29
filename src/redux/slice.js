// import startContacts from "../components/contact.json";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCatalog, fetchCarById } from "./operations";
import { selectCatalog, selectCarById, selectNameFilter } from "./selectors";

const Slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    totalPage: "",
    loading: false,
    error: null,
    item: [],
    camperDetails: {},
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
      })

      .addCase(fetchCarById.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carDetals = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = null;
    
      });
  },
});

export const visibleCars = createSelector(
  [selectCatalog || selectCarById, selectNameFilter],
  (cars, filtersCar) => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(filtersCar.toLowerCase())
    );
  }
);


export const Reducer = Slice.reducer;
