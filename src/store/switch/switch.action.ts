import { ToggleType } from "./switch.reducer";

export const setDarkTheme = (toggle: boolean) => {
  return { type: ToggleType.TOGGLE_DATA_THEME, payload: toggle };
};

export const setNewForm = (toggle: boolean) => {
  return { type: ToggleType.TOGGLE_NEW_FORM, payload: toggle };
};
