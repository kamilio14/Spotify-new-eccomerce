import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectIsCartOpened = createSelector(
  [selectCart],
  (state) => state.isCartOpened
);

export const selectCartItems = createSelector(
  [selectCart],
  (state) => state.cartItems
);
