import axios from "axios";
import {
  EDIT_COMPANY_ADDR,
  GET_SINGLE_COMPANY_SUCCESS,
} from "../actions/types";

export const showCompany = (url) => (dispatch, getState) => {
  dispatch({
    type: GET_SINGLE_COMPANY_SUCCESS,
    payload: url,
  });
};

export const editCompanyAddr = (newAddress, url) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ newAddress });
  console.log(body);

  axios
    .post(`http://127.0.0.1:8000/v1/api/company/${url}`, body, config)
    .then((res) => {
      dispatch({
        type: EDIT_COMPANY_ADDR,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      //   dispatch({
      //     type: REGISTER_FUSER_FAILED,
      //   });
      console.log(err.response.data);
    });
};