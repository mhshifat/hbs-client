import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import RentalCard from "./RentalCard";

import { fetchRentalsAction } from "../../Store/Actions/rentalsActions";

import Loader from "../Shared/Loader";

class Rentals extends Component {
  componentWillMount = () => {
    this.props.fetchRentalsAction();
  };

  renderRentals = () => {
    const { rentals } = this.props;
    if (rentals) {
      return rentals.map(rental => (
        <RentalCard key={rental._id} rental={rental} />
      ));
    } else {
      return <Loader />;
    }
  };

  render() {
    const { rentals } = this.props;
    return (
      <div className="container">
        <section id="rentalListing">
          <h1 className="page-title">
            {rentals ? "Your Home All Around the World" : null}
          </h1>
          <div className="row">{this.renderRentals()}</div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ rentals }) => ({
  rentals: rentals.rentals
});

export default connect(
  mapStateToProps,
  { fetchRentalsAction }
)(Rentals);
