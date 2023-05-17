import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleWare = [logger];
const composedEnhancer = compose(applyMiddleware(...middleWare));
export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancer
);
export type RootState = ReturnType<typeof rootReducer>;
