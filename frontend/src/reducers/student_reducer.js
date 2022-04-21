import {
  GET_SINGLE_STUDENT_SUCCESS,
  GET_SINGLE_STUDENT_ERROR,
  GET_SINGLE_STUDENT_BEGIN,
  EDIT_STUDENT_DESC,
  EDIT_STUDENT_ADDR,
} from "../actions/types";

const initialState = {
  firstName: "",
};

const student_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_STUDENT_SUCCESS:
      return {
        ...state,
      };
    case EDIT_STUDENT_ADDR:
      return {
        ...state,
        firstName: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default student_reducer;
