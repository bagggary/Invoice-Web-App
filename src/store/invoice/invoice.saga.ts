import { call, put, takeLatest, all } from "redux-saga/effects";
import { INVOICES_ACTION_TYPES } from "./invoice.types";
import { db, getInvoicesAndDocument } from "../../util/firebase.util";
import { fetchInvoicesFailed, fetchInvoicesSuccess } from "./invoice.action";
import { useDispatch } from "react-redux";
import { onValue, ref } from "firebase/database";

export function* fetchInvoicesAsync() {
  try {
    const invoicesArray = yield call(getInvoicesAndDocument);
    yield put(fetchInvoicesSuccess(invoicesArray));
  } catch (error: Error | any) {
    console.log(error);
    yield put(fetchInvoicesFailed(error));
  }
}

export function* onFetchInvoices() {
  yield takeLatest(
    INVOICES_ACTION_TYPES.FETCH_INVOICES_START,
    fetchInvoicesAsync
  );
}

export function* invoicesSaga() {
  yield all([call(onFetchInvoices)]);
}
