import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "@@filters",
  initialState: {
    search: "",
    region: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    clearFilter: () => {
      return {
        search: "",
        region: "",
      };
    },
  },
});

export const { setSearch, setRegion, clearFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectFilters = (state) => ({
  search: state.filters.search,
  region: state.filters.region,
});
