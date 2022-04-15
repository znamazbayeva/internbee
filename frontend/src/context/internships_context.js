import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/internships_reducer";

import {
  GET_INTERNSHIPS_BEGIN,
  GET_INTERNSHIPS_SUCCESS,
  GET_INTERNSHIPS_ERROR,
  GET_SINGLE_INTERNSHIP_BEGIN,
  GET_SINGLE_INTERNSHIP_SUCCESS,
  GET_SINGLE_INTERNSHIP_ERROR,
} from "../actions/types.js";

// const url = "http://127.0.0.1:8000/v1/api/internship/all/";
const url = "https://cheerful-halva-5ca4ca.netlify.app/db.json";

const initialState = {
  internships_loading: false,
  internships_error: false,
  internships: [],
  featured_internships: [],
  single_internship_loading: false,
  single_internship_error: false,
  single_internship: {},
};

const InternshipsContext = React.createContext();

export const InternshipsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchInternships = async (url) => {
    dispatch({ type: GET_INTERNSHIPS_BEGIN });
    try {
      const response = await axios.get(url);
      const internships = response.data;

      console.log(internships);
      dispatch({ type: GET_INTERNSHIPS_SUCCESS, payload: internships });
    } catch (error) {
      dispatch({ type: GET_INTERNSHIPS_ERROR });
    }
  };

  const fetchSingleInternship = async (url) => {
    dispatch({ type: GET_SINGLE_INTERNSHIP_BEGIN });
    try {
      const response = await axios.get(url);
      const singleInternship = response.data;
      dispatch({
        type: GET_SINGLE_INTERNSHIP_SUCCESS,
        payload: singleInternship,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_INTERNSHIP_ERROR });
    }
  };

  useEffect(() => {
    fetchInternships(url);
  }, []);

  return (
    <InternshipsContext.Provider
      value={{
        ...state,
        fetchSingleInternship,
      }}
    >
      {children}
    </InternshipsContext.Provider>
  );
};
// make sure use
export const useInternshipsContext = () => {
  return useContext(InternshipsContext);
};
