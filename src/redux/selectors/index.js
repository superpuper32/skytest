import { createSelector } from "reselect";

const getPictureById = (state) => state.pictures.byId;
const getPictureIds = (state) => state.pictures.allIds;

const mapToArray = (selector) => createSelector(selector, Object.values);
const picturesListSelector = mapToArray(getPictureById);

export const picturesSelector = createSelector(
  [getPictureById, getPictureIds],
  (byId, allIds) => allIds.map((id) => byId[id])
);

export const pictureSelector = createSelector(
  picturesListSelector,
  (pictures) => pictures[pictures.length - 1]
);