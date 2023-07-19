import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadDetail = createAsyncThunk(
  "@@detail/load-detail",
  async (country, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(country));
  }
);

const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
};

const detailSlice = createSlice({
  name: "@@detail",
  initialState,
  reducers: {
    clearDetail: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDetail.pending, (state, _) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(loadDetail.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "rejected";
      })
      .addCase(loadDetail.fulfilled, (state, action) => {
        state.error = null;
        state.status = "recieved";
        state.currentCountry = action.payload.data[0];
      });
  },
});

export const detailReducer = detailSlice.reducer;

export const { clearDetail } = detailSlice.actions;

export const selectDetailCountry = (state) => ({
  status: state.detail.status,
  error: state.detail.error,
  currentCountry: state.detail.currentCountry,
});
