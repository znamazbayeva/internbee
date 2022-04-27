import axios from "axios";
import {
  CLIENT_USER_LOADED,
  CLIENT_USER_FAILED,
  FREELANCE_USER_LOADED,
  FREELANCE_USER_FAILED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_CUSER_SUCCESS,
  REGISTER_FUSER_FAILED,
  REGISTER_FUSER_SUCCESS,
  REGISTER_CUSER_FAILED,
} from "../actions/types";

export const getStudentUser = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const isStudent = getState().auth.isStudent;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token && isStudent) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .get("http://127.0.0.1:8000/v1/api/student/dashboard/", config)
    .then((res) => {
      dispatch({
        type: CLIENT_USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CLIENT_USER_FAILED,
      });
    });
};

// check token and load freelance user
export const getCompany = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const isStudent = getState().auth.isStudent;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token && !isStudent) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("http://127.0.0.1:8000/v1/api/company/dashboard/", config)
    .then((res) => {
      dispatch({
        type: FREELANCE_USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FREELANCE_USER_FAILED,
      });
    });
};

export const create_clientuser =
  ({ email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    console.log(body);
    axios
      .post("http://127.0.0.1:8000/v1/api/student/signup/", body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_CUSER_SUCCESS,
          payload: res.data,
        });
        console.log("SUCCESS ON CUSER REGISTRATION");
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_CUSER_FAILED,
        });
        console.log(err.response.data);
      });
  };

export const create_freelanceuser =
  ({ email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    console.log(body);
    axios
      .post("http://127.0.0.1:8000/v1/api/company/signup/", body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_FUSER_SUCCESS,
          payload: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FUSER_FAILED,
        });
        console.log(err.response.data);
      });
  };

export const login =
  ({ username, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ username, password });

    axios
      .post("http://127.0.0.1:8000/v1/api/login/", body, config)
      .then((response) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
        console.log("SUCCESS ON LOGIN");
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };

export const logout = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .post("http://127.0.0.1:8000/v1/api/logout/", null, config)
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
