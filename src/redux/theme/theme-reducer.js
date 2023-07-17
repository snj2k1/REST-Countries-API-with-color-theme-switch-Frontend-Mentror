import { CHANGE_THEME } from "./theme-action";

export const themeReducer = (state = "light", action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return state === "light" ? "dark" : "light";
    default:
      return "light";
  }
};
