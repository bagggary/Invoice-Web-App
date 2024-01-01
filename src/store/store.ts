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
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["invoices"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWare = [
  import.meta.env.NODE_ENV !== "productoin" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancer = compose(applyMiddleware(...middleWare));
export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancer
);

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);
