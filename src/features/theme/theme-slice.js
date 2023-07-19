import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "@@theme",
  initialState: "light",
  reducers: {
    changeTheme: (state, _) => {
      return state === "light" ? "dark" : "light";
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
