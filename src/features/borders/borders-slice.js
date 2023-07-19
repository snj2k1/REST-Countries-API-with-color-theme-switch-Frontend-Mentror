import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  error: null,
  borders: [],
};

export const loadBorders = createAsyncThunk(
  "@@borders/load-borders",
  async (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  }
);

const bordersSlice = createSlice({
  name: "@@borders",
  initialState,
  reducers: {
    clearBorders: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBorders.pending, (state, _) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadBorders.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(loadBorders.fulfilled, (state, action) => {
        state.status = "received";
        state.borders = action.payload.data;
      });
  },
});

export const bordersReducer = bordersSlice.reducer;

export const { clearBorders } = bordersSlice.actions;

export const selectBorders = (state) => ({
  status: state.borders.status,
  error: state.borders.error,
  borders: state.borders.borders,
});
