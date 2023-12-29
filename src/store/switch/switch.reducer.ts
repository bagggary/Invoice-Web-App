import { AnyAction } from "redux";

export const enum ToggleType {
  TOGGLE_DATA_THEME = "TOGGLE_DATA_THEME",
  TOGGLE_NEW_FORM = "TOGGLE_NEW_FORM",
  TOGGLE_EDIT_FORM = "TOGGLE_EDIT_FORM",
}

type ThemeSwitch = {
  dataTheme: true | false;
  newForm: boolean;
  editForm: boolean;
};

const themeSwitch: ThemeSwitch = {
  dataTheme: false,
  newForm: false,
  editForm: false,
};

export const themeReducer = (state = themeSwitch, action: AnyAction) => {
  const { payload, type } = action;

  switch (type) {
    case ToggleType.TOGGLE_DATA_THEME:
      return { ...state, dataTheme: payload };
    case ToggleType.TOGGLE_NEW_FORM:
      return { ...state, newForm: payload };
    case ToggleType.TOGGLE_EDIT_FORM:
      return { ...state, editForm: payload };
  }
  return state;
};
