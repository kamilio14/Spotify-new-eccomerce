import { createSelector } from "reselect";

const selectAlbums = (state) => state.data;

export const selectDataAlbums = createSelector(
  [selectAlbums],
  (state) => state.albums
);
