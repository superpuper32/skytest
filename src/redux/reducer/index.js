import _ from "lodash";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { connectRouter } from "connected-react-router";
import * as actions from "../actions";

import history from "../../history";

const pictureFetchingState = handleActions(
  {
    [actions.fetchPictureRequest]() {
      return "requested";
    },
    [actions.fetchPictureFailure]() {
      return "failed";
    },
    [actions.addPictureSuccess]() {
      return "finished";
    },
  },
  "none"
);

const pictures = handleActions(
  {
    [actions.addPictureSuccess](state, { payload: { picture, time } }) {
      const { byId, allIds } = state;
      const { id, username, image_url } = picture;
      return {
        byId: {
          ...byId,
          [picture.id]: { id, title: username, url: image_url, time }
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
