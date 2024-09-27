import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./slice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
     task: taskReducer,
    filters: filterReducer,
  },
});
