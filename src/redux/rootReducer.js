import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-reducer";
import { countriesReducer } from "./countries/countries-reducer";
import { filtersReducer } from "./filters/filters-reducer";
import { detailReducer } from "./detail/detail-reducer";
import { bordersReducer } from "./borders/borders-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  filters: filtersReducer,
  detail: detailReducer,
  borders: bordersReducer,
});
