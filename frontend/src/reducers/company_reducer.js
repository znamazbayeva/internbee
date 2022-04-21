import {
  GET_SINGLE_COMPANY_SUCCESS,
  GET_SINGLE_COMPANY_ERROR,
  GET_SINGLE_COMPANY_BEGIN,
  EDIT_COMPANY_DESC,
  EDIT_COMPANY_ADDR,
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
