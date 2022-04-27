import {
  EDIT_STUDENT_ADDR,
  GET_SINGLE_STUDENT_SUCCESS,
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