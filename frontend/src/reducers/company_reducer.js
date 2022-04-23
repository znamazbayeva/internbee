import {
  EDIT_COMPANY_ADDR,
  GET_SINGLE_COMPANY_SUCCESS,
} from "../actions/types";

const initialState = {
  company: {},
};

const company_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_COMPANY_SUCCESS:
      return {
        company: action.payload,
      };
    case EDIT_COMPANY_ADDR:
      return {
        ...state,
        company: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default company_reducer;
