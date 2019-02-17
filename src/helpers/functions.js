import jwt from "jsonwebtoken";
import moment from "moment";

export const isAuthenticated = () => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    const { exp } = jwt.decode(token);
    return moment().isBefore(moment.unix(exp));
  }
};

export const setAuthHeader = () => {
  const token = localStorage.getItem("auth_token");
  if (token)
    return {
      headers: { Authorization: `Bearer ${localStorage.getItem("auth_token")}` }
    };
};
