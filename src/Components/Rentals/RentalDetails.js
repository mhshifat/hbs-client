import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Loader from "../Shared/Loader";
import RentalDetailsContent from "./RentalDetailsContent";

class RentalDetails extends Component {
  state = {
    rental: null
  };

  componentWillMount = () => {
    const { rentals } = this.props;
    if (rentals) {
      const rentalId = this.props.match.params.rental;
      const [rental] = rentals.filter(rental => rental._id === rentalId);
      this.setState({ rental });
    }
  };

  componentDidMount = () => {
    const { rentals } = this.props;
    setTimeout(() => {
      if (!rentals) return this.props.history.push("/");
    }, 3000);
  };

  renderRentalDetails = () => {
    const { rental } = this.state;
    return <RentalDetailsContent rental={rental} />;
  };

  render() {
    const { rental } = this.state;
    return (
      <Fragment>
        <div className="container">
          {rental ? this.renderRentalDetails() : <Loader />}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ rentals }) => ({
  rentals: rentals.rentals
});

export default connect(mapStateToProps)(RentalDetails);
