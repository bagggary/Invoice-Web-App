import { User } from "firebase/auth";
import { USER_ACTION_TYPE } from "./user.types";

export const setCurrentUser = (user: User | null) => {
  return { type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user };
};
