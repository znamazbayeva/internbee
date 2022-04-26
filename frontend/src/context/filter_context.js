import React, { useContext, useEffect, useReducer } from "react";
import {
  CLEAR_FILTERS,
  FILTER_INTERNSHIPS,
  LOAD_INTERNSHIPS,
  SORT_INTERNSHIPS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions/types";
import reducer from "../reducers/filter_reducer";
import { useInternshipsContext } from "./internships_context";

const initialState = {
  filtered_internships: [],
  all_internships: [],
  sort: "salary-lowest",
  filters: {
    text: "",
    company: "all",
    location: "all",
    category: "all",
    duration: null,
    min_salary: 0,
    max_salary: 0,
    salary: 0,
    created_at: null,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { internships } = useInternshipsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_INTERNSHIPS, payload: internships });
  }, [internships]);

  useEffect(() => {
    dispatch({ type: FILTER_INTERNSHIPS });
    dispatch({ type: SORT_INTERNSHIPS });
  }, [internships, state.sort, state.filters]);

  const updateSort = (e) => {
    // for demonstration
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name, value);
    // if (name === "category") {
    //   value = e.target.textContent;
    //   console.log(value);
    // }
    if (name === "salary") {
      value = Number(value);
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
