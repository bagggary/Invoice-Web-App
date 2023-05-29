import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { invoiceReducer } from "./invoice/invoice.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  invoices: invoiceReducer,
});
