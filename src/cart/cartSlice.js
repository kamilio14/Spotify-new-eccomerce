import { createSlice } from "@reduxjs/toolkit";

const decreaseCartItems = (cartItems, itemToBeDecreased) => {
  const filterredItems = cartItems.filter((item) => item.quantity > 1);

  return filterredItems.map((item) => {
    if (item.id === itemToBeDecreased.id) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    } else return item;
  });
};

const increaseCartItems = (cartItems, itemToBeIncreased) => {
  return cartItems.map((item) => {
    if (item.id === itemToBeIncreased.id) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    } else return item;
  });
};

const deleteFromCartItem = (cartItems, itemToBeDeleted) => {
  return cartItems.filter((item) => item.id !== itemToBeDeleted.id);
};

const addToCartItem = (cartItems, newAlbum) => {
  const existingAlbum = cartItems.find((item) => item.id === newAlbum.id);

  if (existingAlbum) {
    return cartItems.map((item) => {
      if (item.id === newAlbum.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
  }

  return [...cartItems, { ...newAlbum, quantity: 1 }];
};

const initialState = {
  cartItems: [],
  isCartOpened: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = addToCartItem(state.cartItems, action.payload);
    },
    setIsCartOpened: (state, action) => {
      state.isCartOpened = action.payload;
    },
    deleteItemFromCart: (state, action) => {
      state.cartItems = deleteFromCartItem(state.cartItems, action.payload);
    },
    increaseQuantity: (state, action) => {
      state.cartItems = increaseCartItems(state.cartItems, action.payload);
    },
    decreaseQuantity: (state, action) => {
      state.cartItems = decreaseCartItems(state.cartItems, action.payload);
    },
  },
});

export default cartSlice.reducer;

export const {
  addItemToCart,
  setIsCartOpened,
  deleteItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
