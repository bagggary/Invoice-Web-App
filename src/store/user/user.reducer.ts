import { AnyAction } from "redux";
import { USER_ACTION_TYPE } from "./user.types";

type initialState = {
  currentUser: null | string;
};

const INITIAL_STATE: initialState = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
