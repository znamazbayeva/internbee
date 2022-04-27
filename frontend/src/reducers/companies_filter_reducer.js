import {
  LOAD_COMPANIES,
  UPDATE_FILTERS,
  FILTER_COMPANIES,
  CLEAR_FILTERS,
} from "../actions/types";

const companies_filter_reducer = (state, action) => {
  if (action.type === LOAD_COMPANIES) {
    return {
      ...state,
      all_companies: [...action.payload],
      filtered_companies: [...action.payload],
      filters: { ...state.filters },
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  }
  if (action.type === FILTER_COMPANIES) {
    const { all_companies } = state;
    const { text_title, text_location } = state.filters;
    let tempCompanies = [...all_companies];
    if (text_title) {
      tempCompanies = tempCompanies.filter((company) => {
        return company.user.email.toLowerCase().includes(text_title);
      });
    }
    if (text_location) {
      tempCompanies = tempCompanies.filter((company) => {
        const location = company.cityName;
        if (location) {
          return location.toLowerCase().includes(text_location);
        }
        return;
      });
    }
    return { ...state, filtered_companies: tempCompanies };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        text_title: "all",
        text_location: "all",
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default companies_filter_reducer;
