import {
  GET_INTERNSHIPS_BEGIN,
  GET_INTERNSHIPS_ERROR,
  GET_INTERNSHIPS_SUCCESS,
  GET_SINGLE_INTERNSHIP_BEGIN,
  GET_SINGLE_INTERNSHIP_ERROR,
  GET_SINGLE_INTERNSHIP_SUCCESS,
} from "../actions/types";

const internships_reducer = (state, action) => {
  if (action.type === GET_INTERNSHIPS_BEGIN) {
    return { ...state, internships_loading: true };
  }
  if (action.type === GET_INTERNSHIPS_SUCCESS) {
    // const featured_internships = action.payload.filter(
    //   (internship) => internship.featured == true
    // );
    return {
      ...state,
      internships_loading: false,
      internships: action.payload,
      featured_internships: action.payload,
    };
  }
  if (action.type === GET_INTERNSHIPS_ERROR) {
    return { ...state, internships_loading: false, internships_error: true };
  }
  if (action.type === GET_SINGLE_INTERNSHIP_BEGIN) {
    return {
      ...state,
      single_internship_loading: true,
      single_internship_error: false,
    };
  }
  if (action.type === GET_SINGLE_INTERNSHIP_SUCCESS) {
    return {
      ...state,
      single_internship_loading: false,
      single_internship: action.payload,
    };
  }
  if (action.type === GET_SINGLE_INTERNSHIP_ERROR) {
    return {
      ...state,
      single_internship_loading: false,
      single_internship_error: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default internships_reducer;
