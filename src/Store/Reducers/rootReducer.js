import { combineReducers } from "redux";

import appReducer from "./appReducer";
import rentalReducer from "./rentalReducer";

export default combineReducers({
  app: appReducer,
  rentals: rentalReducer
});
