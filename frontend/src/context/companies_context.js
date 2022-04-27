import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import {
  // EDIT_COMPANY_ADDR,
  // EDIT_COMPANY_IMAGE,
  // EDIT_COMPANY_NAME,
  // EDIT_COMPANY_DESC,
  GET_SINGLE_COMPANY_BEGIN,
  GET_SINGLE_COMPANY_ERROR,
  GET_SINGLE_COMPANY_SUCCESS,
  GET_COMPANIES_BEGIN,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_ERROR,
} from "../actions/types";
import { useSelector } from "react-redux";
import reducer from "../reducers/companies_reducer";
const url = "http://127.0.0.1:8000/v1/api/companys/";

const initialState = {
  companies_loading: false,
  companies_error: false,
  companies: [],
  featured_companies: [],
  single_company_loading: false,
  single_company_error: false,
  single_company: {
    // address: "",
    // city_name: "",
    // company_name: "",
    // description: "",
    // image: "",
    // email: "",
  },
};

const CompaniesContext = React.createContext();

export const CompaniesProvider = ({ children }) => {
  const st = useSelector((st) => st.auth);

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCompanies = async (url) => {
    dispatch({ type: GET_COMPANIES_BEGIN });
    try {
      const response = await axios.get(url);
      const companies = response.data;

      console.log(companies);
      dispatch({ type: GET_COMPANIES_SUCCESS, payload: companies });
    } catch (error) {
      dispatch({ type: GET_COMPANIES_ERROR });
    }
  };

  const fetchSingleCompany = async (url) => {
    dispatch({ type: GET_SINGLE_COMPANY_BEGIN });
    try {
      const response = await axios.get(
        `https://127.0.0.1:8000/v1/api/company/${st.user_id}/`
      );
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
    // fetchSingleCompany(`http://127.0.0.1:8000/v1/api/company/${st.user_id}/`);
    fetchCompanies(url);
  }, []);

  return (
    <CompaniesContext.Provider
      value={{
        ...state,
        fetchSingleCompany,
        fetchCompanies,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export const useCompaniesContext = () => {
  return useContext(CompaniesContext);
};
