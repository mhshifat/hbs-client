import React from "react";
import { Link } from "react-router-dom";

const RentalCard = ({
  rental: { _id, image, shared, category, city, title, dailyRate }
}) => {
  return (
    <div className="col-md-3 col-xs-6">
      <div className="card bwm-card">
        <img className="card-img-top" src={image} alt="" />
        <div className="card-block">
          <h6 className="card-subtitle">
            {shared ? "Shared" : "Whole"} {category} &#183; {city}
          </h6>
          <h4 className="card-title">{title}</h4>
          <p className="card-text">
            ${dailyRate} per Night &#183; Free Cancellation
          </p>
          <Link to={`/rentals/${_id}`} className="card-link">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
