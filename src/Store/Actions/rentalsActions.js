import axios from "axios";
import { FETCH_RENTALS } from "./types";
import { setAuthHeader } from "../../helpers/functions";

export const fetchRentalsAction = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://hbs--server.herokuapp.com/api/v1/rentals",
      setAuthHeader()
    );
    dispatch({
      type: FETCH_RENTALS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const createNewBooking = (formData, history) => async dispatch => {
  try {
    const res = await axios.post(
      "https://hbs--server.herokuapp.com/api/v1/bookings",
      formData,
      setAuthHeader()
    );
    if (res.data.success) {
      history.push("/");
    }
  } catch (err) {
    return Promise.reject(err.response.data.errors);
  }
};
