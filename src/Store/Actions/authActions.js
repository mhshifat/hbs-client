import axios from "axios";
import { FETCH_TOKEN, LOGOUT_USER } from "./types";

export const setAuthStatus = () => dispatch => {
  dispatch({ type: FETCH_TOKEN });
};

export const LogoutUserAction = () => dispatch => {
  localStorage.removeItem("auth_token");
  dispatch({ type: LOGOUT_USER });
  return true;
};

export const registerNewUserAction = (userData, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/users/register",
      userData
    );
    if (res.data.Registration) {
      history.push("/login");
    }
  } catch (err) {
    return Promise.reject(err.response.data.errors);
  }
};

export const loginExistingUser = (userData, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/users/auth",
      userData
    );
    if (res.data) {
      dispatch({
        type: FETCH_TOKEN
      });
      localStorage.setItem("auth_token", res.data);
      history.push("/");
    }
  } catch (err) {
    return Promise.reject(err.response.data.errors);
  }
};
