import _ from "lodash";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { connectRouter } from "connected-react-router";
import * as actions from "../actions";

import history from "../../history";
import { getTime } from "../utils.js";

const pictureFetchingState = handleActions(
  {
    [actions.fetchPictureRequest]() {
      return "requested";
    },
    [actions.fetchPictureFailure]() {
      return "failed";
    },
    [actions.fetchPictureSuccess]() {
      return "finished";
    },
  },
  "none"
);

const pictures = handleActions(
  {
    [actions.fetchPictureSuccess](state, { payload }) {
      return {
        byId: _.keyBy(payload.pictures, "id"),
        allIds: payload.pictures.map((p) => p.id),
      };
    },
    [actions.addPictureSuccess](state, { payload: { picture } }) {
      const { byId, allIds } = state;
      const {
        id,
        title,
        image_url
      } = picture;
      const time = getTime();
      return {
        byId: {
          ...byId,
          [picture.id]: { id, title, url: image_url, time }
        },
        allIds: [picture.id, ...allIds],
      };
    },
    [actions.removePicture](state, { payload: { id } }) {
      const { byId, allIds } = state;
      return {
        byId: _.omit(byId, id),
        allIds: _.without(allIds, id),
      };
    },
  },
  { byId: {}, allIds: [] }
);

export default combineReducers({
  router: connectRouter(history),
  pictures,
  pictureFetchingState,
});
