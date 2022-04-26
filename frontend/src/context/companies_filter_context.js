import React, { useContext, useEffect, useReducer } from "react";
import {
  CLEAR_FILTERS,
  FILTER_COMPANIES,
  LOAD_COMPANIES,
  UPDATE_FILTERS,
} from "../actions/types";
import reducer from "../reducers/companies_filter_reducer";
import { useCompaniesContext } from "./companies_context";

const initialState = {
  filtered_companies: [],
  all_companies: [],
  filters: {
    text_title: "",
    text_location: "",
  },
};

const CompanyFilterContext = React.createContext();

export const CompanyFilterProvider = ({ children }) => {
  const { companies } = useCompaniesContext();
  console.log(companies);
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {};

  useEffect(() => {
    dispatch({ type: LOAD_COMPANIES, payload: companies });
  }, [companies]);

  useEffect(() => {
    dispatch({ type: FILTER_COMPANIES });
  }, [companies, state.filters]);

  return (
    <CompanyFilterContext.Provider
      value={{ ...state, updateFilters, clearFilters }}
    >
      {children}
    </CompanyFilterContext.Provider>
  );
};

export const useCompanyFilterContext = () => {
  return useContext(CompanyFilterContext);
};
