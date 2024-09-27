import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operation";
import { selectTasks, selectNameFilter } from "./selectors";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const visibleTasks = createSelector(
  [selectTasks, selectNameFilter],
  (tasks, filtersTask) => {
    return tasks.filter((task) =>
      task.name.toLowerCase().includes(filtersTask.toLowerCase())
    );
  }
);

export const taskReducer = tasksSlice.reducer;
