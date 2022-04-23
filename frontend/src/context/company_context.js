import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import {
  // EDIT_COMPANY_ADDR,
  // EDIT_COMPANY_IMAGE,
  // EDIT_COMPANY_NAME,
  // EDIT_COMPANY_DESC,
  GET_SINGLE_COMPANY_BEGIN,
  GET_SINGLE_COMPANY_ERROR,
  GET_SINGLE_COMPANY_SUCCESS,
} from "../actions/types";
import reducer from "../reducers/company_reducer";

const initialState = {
  address: "",
  city_name: "",
  company_name: "",
  description: "",
  image: "",
  email: "",
};

const CompanyContext = React.createContext();

export const CompanyProvider = ({ children }) => {
  const st = useSelector((st) => st.auth);

  const [state, dispatch] = useReducer(reducer, initialState);

  // const fetchCompany = async (url) => {
  //   dispatch({ type: GET_COMPANY_BEGIN });
  //   try {
  //     const response = await axios.get(url);
  //     const internships = response.data;

  //     console.log(internships);
  //     dispatch({ type: GET_COMPANY_SUCCESS, payload: internships });
  //   } catch (error) {
  //     dispatch({ type: GET_COMPANY_ERROR });
  //   }
  // };

  const fetchSingleCompany = async (url) => {
    dispatch({ type: GET_SINGLE_COMPANY_BEGIN });
    try {
      const response = await axios.get(url);
      const singleCompany = response.data;
      dispatch({
        type: GET_SINGLE_COMPANY_SUCCESS,
        payload: singleCompany,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_COMPANY_ERROR });
    }
  };

  useEffect(() => {
    fetchSingleCompany(`http://127.0.0.1:8000/v1/api/company/${st.user_id}/`);
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        ...state,
        fetchSingleCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = () => {
  return useContext(CompanyContext);
};
