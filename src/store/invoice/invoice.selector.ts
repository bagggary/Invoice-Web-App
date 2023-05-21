export const selectInvoicesData = (state: { invoices: { invoicesMap: any } }) =>
  state.invoices.invoicesMap;
