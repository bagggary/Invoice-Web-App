import { INVOICES_ACTION_TYPES } from "./invoice.types";

export const clearInvoices = () => {
  return { type: INVOICES_ACTION_TYPES.CLEAR_INVOICES };
};

export const fetchInvoicesStart = () => {
  return { type: INVOICES_ACTION_TYPES.FETCH_INVOICES_START };
};

export const fetchInvoicesSuccess = (invoices) => {
  return {
    type: INVOICES_ACTION_TYPES.FETCH_INVOICES_SUCCESS,
    payload: invoices,
  };
};

export const fetchInvoicesFailed = (error: Error) => {
  return { type: INVOICES_ACTION_TYPES.FETCH_INVOICES_FAILED, payload: error };
};
