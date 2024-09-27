export const selectTasks = (state) => state.tasks.items;
export const selectNameFilter = (state) => state.filters.name;
export const state = (state) => state;

export const selectLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;
