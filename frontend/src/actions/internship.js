import { INTERNSHIP_LIST_LOADED } from "../actions/types";

export const addInternshipList = (url) => (dispatch, getState) => {
  dispatch({
    type: INTERNSHIP_LIST_LOADED,
    payload: url,
  });
};
