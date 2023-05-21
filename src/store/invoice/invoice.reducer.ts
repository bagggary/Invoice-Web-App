import { AnyAction } from "redux";
import { IVOICES_ACTION_TYPES } from "./invoice.types";

const INVOICES_INITIAL_STATE = {
  invoicesMap: {},
};

export const invoiceReducer = (
  state = INVOICES_INITIAL_STATE,
  action: AnyAction
) => {
  const { type, payload } = action;
  switch (type) {
    case IVOICES_ACTION_TYPES.SET_INVOICES_DATA:
      return { ...state, invoicesMap: payload };
  }
  return state;
};
