import {
  compose,
  legacy_createStore,
  applyMiddleware,
  Middleware,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWare = [
  import.meta.env.NODE_ENV !== "productoin" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancer = compose(applyMiddleware(...middleWare));
export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancer
);

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof rootReducer>;
