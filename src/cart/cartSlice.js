import { createSlice } from "@reduxjs/toolkit";

const cartTotalCount = (state) => {
  return state.cartItems.reduce((acc, item) => {
    return (acc = acc + item.total_tracks * item.quantity);
  }, 0);
};

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

const addToCartItem = (state, newAlbum) => {
  console.log("kurvy", JSON.stringify(state.cartItems[0]?.quantity));

  const existingAlbum = state.cartItems.find((item) => item.id === newAlbum.id);

  if (existingAlbum) {
    return state.cartItems.map((item) => {
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

  return [...state.cartItems, { ...newAlbum, quantity: 1 }];
};

const initialState = {
  cartItems: [],
  isCartOpened: false,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = addToCartItem(state, action.payload);
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
    setCartTotal: (state) => {
      state.cartTotal = cartTotalCount(state);
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
  setCartTotal,
} = cartSlice.actions;
