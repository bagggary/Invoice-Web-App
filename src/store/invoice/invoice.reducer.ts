import { AnyAction } from "redux";
import { INVOICES_ACTION_TYPES } from "./invoice.types";

const INVOICES_INITIAL_STATE = {
  invoicesMap: {},
  isLoading: false,
  error: null,
};

export const invoiceReducer = (
  state = INVOICES_INITIAL_STATE,
  action: AnyAction
) => {
  const { type, payload } = action;
  switch (type) {
    case INVOICES_ACTION_TYPES.FETCH_INVOICES_START:
      return { ...state, isLoading: true };
    case INVOICES_ACTION_TYPES.FETCH_INVOICES_SUCCESS:
      return { ...state, isLoading: false, invoicesMap: payload };
    case INVOICES_ACTION_TYPES.FETCH_INVOICES_FAILED:
      return { ...state, isLoading: false, error: payload };
    case INVOICES_ACTION_TYPES.CLEAR_INVOICES:
      return { ...state, invoicesMap: {} };
  }
  return state;
};
