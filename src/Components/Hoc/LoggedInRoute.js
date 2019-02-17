import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../helpers/functions";

const LoggedInRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default LoggedInRoute;
