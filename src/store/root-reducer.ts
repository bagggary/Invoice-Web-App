import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { invoiceReducer } from "./invoice/invoice.reducer";
import { themeReducer } from "./switch/switch.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  invoices: invoiceReducer,
  theme: themeReducer,
});
