import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { isAuthenticated } from "./helpers/functions";
import { setAuthStatus, LogoutUserAction } from "./Store/Actions/authActions";
import { connect } from "react-redux";

// Components
import ProtectedRoute from "./Components/Hoc/ProtectedRoute";
import LoggedInRoute from "./Components/Hoc/LoggedInRoute";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Rentals from "./Components/Rentals/Rentals";
import RentalDetails from "./Components/Rentals/RentalDetails";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

class App extends Component {
  componentWillMount = () => {
    if (isAuthenticated()) {
      this.props.setAuthStatus();
    }
  };

  logoutUser = () => {
    if (this.props.LogoutUserAction()) {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <Fragment>
        <Header logout={this.logoutUser} />
        <Switch>
          <Route exact path="/" component={Rentals} />
          <ProtectedRoute
            exact
            path="/rentals/:rental"
            component={RentalDetails}
          />
          <LoggedInRoute exact path="/login" component={Login} />
          <LoggedInRoute exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(
  connect(
    null,
    { setAuthStatus, LogoutUserAction }
  )(App)
);
