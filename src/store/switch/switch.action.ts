import { ThemeTypes } from "./switch.reducer";

export const setDarkTheme = (toggle: boolean) => {
  return { type: ThemeTypes.TOGGLE_DATA_THEME, payload: toggle };
};
