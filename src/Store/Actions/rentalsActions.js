import axios from "axios";
import { FETCH_RENTALS } from "./types";
import { setAuthHeader } from "../../helpers/functions";

export const fetchRentalsAction = () => async dispatch => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/rentals",
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
