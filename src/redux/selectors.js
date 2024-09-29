export const selectCatalog = (state) => state.cars.items;
export const selectCarById = (state) => state.cars.item;
export const selectNameFilter = (state) => state.filters.name;
export const state = (state) => state;
 
export const selectCurrentPage = (state) => state.cars.currentPage;
export const selectTotal = (state) => state.cas.total;

export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) =>  state.cars.error;