import { combineReducers } from "redux";
import formReducer from "../form/formSlice";

import cartSlice from "../cart/cartSlice";
import dataSlice from "../data/data.Slice";

export const rootReducer = combineReducers({
  form: formReducer,
  data: dataSlice,
  cart: cartSlice,
});
