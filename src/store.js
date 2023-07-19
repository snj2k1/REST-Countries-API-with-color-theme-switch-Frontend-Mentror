import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";
import { themeReducer } from "./features/theme/theme-slice";
import { filtersReducer } from "./features/filters/filters-slice";
import { countriesReducer } from "./features/countries/countries-slice";
import { detailReducer } from "./features/detail/detail-slice";
import { bordersReducer } from "./features/borders/borders-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filters: filtersReducer,
    countries: countriesReducer,
    detail: detailReducer,
    borders: bordersReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
