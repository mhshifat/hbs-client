import { FETCH_TOKEN, LOGOUT_USER } from "../Actions/types";

const initialState = {
  isAuth: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return { ...state, isAuth: true };
    case LOGOUT_USER:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

export default appReducer;
