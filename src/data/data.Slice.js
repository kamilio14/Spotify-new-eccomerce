import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albums: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setDataFromFetch: (state, actions) => {
      state.albums = actions.payload;
    },
  },
});

export default dataSlice.reducer;

export const { setDataFromFetch } = dataSlice.actions;
