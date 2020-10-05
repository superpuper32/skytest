import axios from "axios";
import { createAction } from "redux-actions";
import { getTime } from "../utils.js";

export const fetchPictureRequest = createAction("PICTURES_FETCH_REQUEST");
export const fetchPictureFailure = createAction("PICTURES_FETCH_FAILURE");

export const addPictureSuccess = createAction("PICTURE_ADD_SUCCESS");
export const removePicture = createAction("PICTURE_REMOVE");

export const fetchPicture = () => async (dispatch) => {
  dispatch(fetchPictureRequest());
  try {
    const url =
      "https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY";
    const response = await axios.get(url);
    const time = getTime();
    dispatch(addPictureSuccess({ picture: response.data.data, time }));
  } catch (e) {
    dispatch(fetchPictureFailure());
    throw e;
  }
};