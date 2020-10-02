import { createSelector } from "reselect";


const picturesSelector = (state) => state.pictures.byId;

const mapToArray = (selector) => createSelector(selector, Object.values);

const picturesListSelector = mapToArray(picturesSelector);

export const selectPicture = createSelector(
  picturesListSelector,
  (pictures) => pictures[pictures.length - 1]
);