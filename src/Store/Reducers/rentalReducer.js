import { FETCH_RENTALS } from "../Actions/types";

const initialState = {
  rentals: null
};

const rentalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RENTALS:
      return { ...state, rentals: action.payload };
    default:
      return state;
  }
};

export default rentalReducer;
