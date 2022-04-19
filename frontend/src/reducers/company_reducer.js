import {
  EDIT_COMPANY_NAME,
  EDIT_COMPANY_IMAGE,
  EDIT_COMPANY_DESC,
  EDIT_COMPANY_ADDR,
} from "../actions/types";

const company_reducer = (state, action) => {
  if (action.type == EDIT_COMPANY_NAME) {
    return { ...state, name: action.payload };
  }
  if (action.type == EDIT_COMPANY_IMAGE) {
    return state;
  }
  if (action.type == EDIT_COMPANY_DESC) {
    return state;
  }
  if (action.type == EDIT_COMPANY_ADDR) {
    return state;
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default company_reducer;
