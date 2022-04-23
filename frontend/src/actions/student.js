import axios from "axios";
import {
  EDIT_STUDENT_ADDR,
  GET_SINGLE_STUDENT_SUCCESS,
} from "../actions/types";

export const showStudent = (url) => (dispatch) => {
  dispatch({
    type: GET_SINGLE_STUDENT_SUCCESS,
    payload: url,
  });
};

export const editStudentEmail = (newAddress, url) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ newAddress });
  console.log(body);

  axios
    .put(`http://127.0.0.1:8000/v1/api/student/edit/${url}`, body, config)
    .then((res) => {
      dispatch({
        type: EDIT_STUDENT_ADDR,
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
