import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValue: "",
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    updateFormAction: (state, actions) => {
      state.formValue = actions.payload;
    },
  },
});

export default formSlice.reducer;

export const { updateFormAction } = formSlice.actions;
