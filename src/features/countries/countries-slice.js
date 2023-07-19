import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk(
  "@@countries//load-countries",
  async (_, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTRIES);
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

const countriesSlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state, _) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = "recieved";
        state.list = action.payload.data;
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;

export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectCountries = (
  state,
  filters = { search: "", region: "" }
) => {
  return state.countries.list.filter(
    (pos) =>
      pos.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      pos.region.includes(filters.region)
  );
};
