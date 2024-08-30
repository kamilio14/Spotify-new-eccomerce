import { createSelector } from "reselect";
import cartSlice from "./cartSlice";

const selectCart = (state) => state.cart;

export const selectIsCartOpened = createSelector(
  [selectCart],
  (state) => state.isCartOpened
);

export const selectCartItems = createSelector(
  [selectCart],
  (state) => state.cartItems
);

export const selectCartTotal = createSelector(
  [selectCart],
  (state) => state.cartTotal
);
