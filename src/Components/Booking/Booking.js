import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import { connect } from "react-redux";

import { createNewBooking } from "../../Store/Actions/rentalsActions";

class Booking extends React.Component {
  state = {
    bookedOutDates: [],
    formValue: {
      startAt: "",
      endAt: "",
      guests: 0
    },
    errors: []
  };

  componentWillMount = () => {
    const { bookings } = this.props.rental;
    if (bookings && bookings.length > 0) {
      bookings.forEach(booking => {
        const bookedOutDates = [];
        const mEndAt = moment(booking.endAt);
        let mStartAt = moment(booking.startAt);

        while (mStartAt < mEndAt) {
          bookedOutDates.push(mStartAt.format("Y/MM/DD"));
          mStartAt = mStartAt.add(1, "day");
        }

        bookedOutDates.push(mEndAt.format("Y/MM/DD"));
        this.setState({
          bookedOutDates
        });
      });
    }
  };

  checkValidDate = date => {
    return (
      this.state.bookedOutDates.includes(date.format("Y/MM/DD")) ||
      date.diff(moment(), "days") < 0
    );
  };

  handleApplyClickEvent = (e, picker) => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        startAt: picker.startDate.format("Y/MM/DD"),
        endAt: picker.endDate.format("Y/MM/DD")
      }
    });
  };

  handleInputChangeEvent = e => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        guests: e.target.value
      }
    });
  };

  handleFormSubmit = () => {
    this.props.createNewBooking(this.state.formValue);
    const { startAt, endAt, guests } = this.state.formValue;
    if (!startAt || !endAt || !guests) return;
    const formValue = { ...this.state.formValue };
    formValue.rental = this.props.rental._id;
    this.props
      .createNewBooking(formValue, this.props.history)
      .then(res => {
        if (res) {
          return;
        }
      })
      .catch(errors => {
        if (errors.length > 0) {
          errors.map(err => {
            const errMessages2 = [];
            errMessages2.push(err.detail);
            return this.setState({
              errors: errMessages2
            });
          });
        }
      });
  };

  showErrorMessages = () => {
    const { errors } = this.state;
    if (errors.length > 0) {
      return (
        <div className="error-messages">
          {errors.map(error => {
            return (
              <div key={error} className="alert alert-danger">
                {error}
              </div>
            );
          })}
        </div>
      );
    }
    setTimeout(() => {
      this.setState({
        errors: []
      });
    }, 10000);
  };

  render() {
    const {
      formValue: { startAt, endAt, guests }
    } = this.state;
    const {
      rental: { dailyRate }
    } = this.props;
    return (
      <div className="booking">
        {this.showErrorMessages()}
        <h3 className="booking-price">
          $ {dailyRate} <span className="booking-per-night">per night</span>
        </h3>
        <hr />
        <div className="form-group">
          <label htmlFor="dates">Dates</label>
          <DateRangePicker
            opens="left"
            isInvalidDate={this.checkValidDate}
            containerStyles={{ display: "block" }}
            onApply={this.handleApplyClickEvent}
          >
            <input
              type="text"
              id="dates"
              name="date-range"
              className="form-control"
              value={startAt && `${startAt} to ${endAt}`}
              onChange={this.handleApplyClickEvent}
            />
          </DateRangePicker>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            className="form-control"
            id="guests"
            aria-describedby="emailHelp"
            placeholder=""
            onChange={this.handleInputChangeEvent}
            value={guests}
          />
        </div>
        <button
          onClick={this.handleFormSubmit}
          className="btn btn-bwm btn-confirm btn-block"
          style={{ background: "#20232A", color: "#fff" }}
        >
          Reserve place now
        </button>
        <hr />
        <p className="booking-note-title">
          People are interested into this house
        </p>
        <p className="booking-note-text">
          More than 500 people checked this rental in last month.
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  { createNewBooking }
)(Booking);
