
// import { createSlice } from "@reduxjs/toolkit";

// const filterSlice = createSlice({
//   name: "filters",
//   initialState: {
//     values: {
//       location: "",
//       ac: false,
//       transmission: "",   
//       kitchen: false,
//       tv: false,
//       bathroom: false,
//       form: "",
//     },
//   },

//   reducers: {
//     setStatusFilter: (state, action) => {
//       state.values = { ...state.values, ...action.payload };
//     },
//     setStatusLocationFilter: (state, action) => {
//       state.values.location = action.payload;
//     },
//     resetFilters: (state) => {
//       state.values = {
//         location: "",
//         ac: false,
//         transmission: "",      
//         kitchen: false,
//         tv: false,
//         bathroom: false,
//         form: "",
//       };
//     },
//   },
// });

// export const { setStatusFilter, setStatusLocationFilter, resetFilters } =
//   filterSlice.actions;
// export const filterReducer = filterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    values: {
      location: "",
      ac: false,
      transmission: "",
      automatic: false,
      kitchen: false,
      tv: false,
      bathroom: false,
      form: "",
    },
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.values = { ...state.values, ...action.payload };
    },
    setStatusLocationFilter: (state, action) => {
      state.values.location = action.payload;
    },
    resetFilters: (state) => {
      state.values = {
        location: "",
        ac: false,
        transmission: "",
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
        form: "",
      };
    },
  },
});

export const { setStatusFilter, setStatusLocationFilter, resetFilters } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;