import { all, call } from "redux-saga/effects";
import { invoicesSaga } from "./invoice/invoice.saga";

export function* rootSaga() {
  yield all([call(invoicesSaga)]);
}
