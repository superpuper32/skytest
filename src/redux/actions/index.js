import axios from "axios";
import { createAction } from "redux-actions";

export const fetchPictureRequest = createAction("PICTURES_FETCH_REQUEST");
export const fetchPictureSuccess = createAction("PICTURES_FETCH_SUCCESS");
export const fetchPictureFailure = createAction("PICTURES_FETCH_FAILURE");

export const removePictureRequest = createAction("PICTURE_REMOVE_REQUEST");
export const removePictureSuccess = createAction("PICTURE_REMOVE_SUCCESS");
export const removePictureFailure = createAction("PICTURE_REMOVE_FAILURE");

export const addPictureSuccess = createAction("PICTURE_ADD_SUCCESS");

export const fetchPicture = () => async (dispatch) => {
  dispatch(fetchPictureRequest());
  try {
    const url =
      "https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY";
    const response = await axios.get(url);
    dispatch(addPictureSuccess({ picture: response.data.data }));
  } catch (e) {
    dispatch(fetchPictureFailure());
    throw e;
  }
};