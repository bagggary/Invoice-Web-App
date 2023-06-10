import { AnyAction } from "redux";

export const enum ThemeTypes {
  TOGGLE_DATA_THEME = "TOGGLE_DATA_THEME",
}

type ThemeSwitch = {
  dataTheme: boolean;
};

const themeSwitch: ThemeSwitch = {
  dataTheme: false,
};

export const themeReducer = (state = themeSwitch, action: AnyAction) => {
  const { payload, type } = action;

  switch (type) {
    case ThemeTypes.TOGGLE_DATA_THEME:
      return { dataTheme: payload };
  }
  return state;
};
