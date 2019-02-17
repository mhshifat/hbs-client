import React from "react";
import RentalMap from "../Rentals/RentalMap";
import Booking from "../Booking/Booking";

const RentalDetailsContent = ({ rental }) => {
  return (
    <section id="rentalDetails">
      <div className="upper-section">
        <div className="row">
          <div className="col-md-6">
            <img src={rental.image} alt="" />
          </div>
          <div className="col-md-6">
            <RentalMap location={`${rental.city}, ${rental.street}`} />
          </div>
        </div>
      </div>

      <div className="details-section">
        <div className="row">
          <div className="col-md-8">
            <div className="rental">
              <h2 className={`rental-type ${rental.category}`}>
                {rental.shared ? "Shared" : "Whole"} {rental.category}
              </h2>
              <h1 className="rental-title">{rental.title}</h1>
              <h2 className="rental-city">{rental.city}</h2>
              <div className="rental-room-info">
                <span>
                  <i className="fa fa-building" />
                  {rental.bedrooms} bedrooms
                </span>
                <span>
                  <i className="fa fa-user" /> {rental.bedrooms + 4} guests
                </span>
                <span>
                  <i className="fa fa-bed" /> {rental.bedrooms + 2} beds
                </span>
              </div>
              <p className="rental-description">{rental.description}</p>
              <hr />
              <div className="rental-assets">
                <h3 className="title">Assets</h3>
                <div className="row">
                  <div className="col-md-6">
                    <span>
                      <i className="fa fa-asterisk" /> Cooling
                    </span>
                    <span>
                      <i className="fa fa-thermometer" /> Heating
                    </span>
                    <span>
                      <i className="fa fa-location-arrow" /> Iron
                    </span>
                  </div>
                  <div className="col-md-6">
                    <span>
                      <i className="fa fa-desktop" /> Working area
                    </span>
                    <span>
                      <i className="fa fa-cube" /> Washing machine
                    </span>
                    <span>
                      <i className="fa fa-cube" /> Dishwasher
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Booking rental={rental} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalDetailsContent;
