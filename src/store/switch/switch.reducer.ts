import { AnyAction } from "redux";

export const enum ToggleType {
  TOGGLE_DATA_THEME = "TOGGLE_DATA_THEME",
  TOGGLE_NEW_FORM = "TOGGLE_NEW_FORM",
}

type ThemeSwitch = {
  dataTheme: true | false;
  newForm: boolean;
};

const themeSwitch: ThemeSwitch = {
  dataTheme: false,
  newForm: false,
};

export const themeReducer = (state = themeSwitch, action: AnyAction) => {
  const { payload, type } = action;

  switch (type) {
    case ToggleType.TOGGLE_DATA_THEME:
      return { ...state, dataTheme: payload };
    case ToggleType.TOGGLE_NEW_FORM:
      return { ...state, newForm: payload };
  }
  return state;
};
