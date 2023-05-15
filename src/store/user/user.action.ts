import { USER_ACTION_TYPE } from "./user.types";
// import { createAction } from "../../util/reducer/reducer.util";

export const setCurrentUser = (user): any => {
  return { type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user };
};
