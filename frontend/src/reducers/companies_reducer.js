// import {
//   EDIT_COMPANY_ADDR,
//   GET_SINGLE_COMPANY_SUCCESS,
// } from "../actions/types";

// const initialState = {
//   company: {},
// };

// const company_reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_SINGLE_COMPANY_SUCCESS:
//       return {
//         company: action.payload,
//       };
//     case EDIT_COMPANY_ADDR:
//       return {
//         ...state,
//         company: action.payload,
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// };

// export default company_reducer;

import {
  GET_COMPANIES_BEGIN,
  GET_COMPANIES_ERROR,
  GET_COMPANIES_SUCCESS,
  GET_SINGLE_COMPANY_BEGIN,
  GET_SINGLE_COMPANY_ERROR,
  GET_SINGLE_COMPANY_SUCCESS,
} from "../actions/types";

const companies_reducer = (state, action) => {
  if (action.type === GET_COMPANIES_BEGIN) {
    return { ...state, companies_loading: true };
  }
  if (action.type === GET_COMPANIES_SUCCESS) {
    // const featured_internships = action.payload.filter(
    //   (internship) => internship.featured == true
    // );
    return {
      ...state,
      companies_loading: false,
      companies: action.payload,
      featured_companies: action.payload,
    };
  }
  if (action.type === GET_COMPANIES_ERROR) {
    return { ...state, companies_loading: false, companies_error: true };
  }
  if (action.type === GET_SINGLE_COMPANY_BEGIN) {
    return {
      ...state,
      single_company_loading: true,
      single_company_error: false,
    };
  }
  if (action.type === GET_SINGLE_COMPANY_SUCCESS) {
    return {
      ...state,
      single_company_loading: false,
      single_company: action.payload,
    };
  }
  if (action.type === GET_SINGLE_COMPANY_ERROR) {
    return {
      ...state,
      single_company_loading: false,
      single_company_error: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default companies_reducer;
