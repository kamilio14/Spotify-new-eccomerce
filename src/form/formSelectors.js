import { createSelector } from "reselect";

const selectValueForm = (state) => state.form;

export const selectFormValue = createSelector(
  [selectValueForm],
  (state) => state.formValue
);
