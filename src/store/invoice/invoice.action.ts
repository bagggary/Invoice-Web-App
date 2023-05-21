import { IVOICES_ACTION_TYPES } from "./invoice.types";

export const setInvoicesMap = (invioces: any) => {
  return { type: IVOICES_ACTION_TYPES.SET_INVOICES_DATA, payload: invioces };
};
