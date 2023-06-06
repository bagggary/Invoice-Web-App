import { createSelector } from "reselect";

// export const selectInvoicesData = createSelector((state: { invoices: { invoicesMap: any } }) => state.invoices.invoicesMap.Data)
export const selectInvoicesData = (state: { invoices: { invoicesMap: any } }) =>
  state.invoices.invoicesMap;

export const selectIsLoadingData = (state: {
  invoices: { isLoading: boolean };
}) => state.invoices.isLoading;

export const selectErrorData = (state: { invoices: { error: any } }) =>
  state.invoices.error;
