import React, { Component } from "react";
import { connect } from "react-redux";

import RegisterFrom from "./RegisterForm";
import { registerNewUserAction } from "../../Store/Actions/authActions";

class Register extends Component {
  state = {
    formValue: {
      username: "",
      email: "",
      password: ""
    },
    errors: []
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

  handleInputChange = e => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        [e.target.name]: e.target.value
      }
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const {
      formValue: { username, email, password },
      formValue
    } = this.state;
    const errMessages = [];
    if (!username || !email || !password) {
      errMessages.push("Please fill out all the empty fields");
    }
    this.setState({ errors: errMessages }, () => {
      this.props
        .registerNewUserAction(formValue, this.props.history)
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
    });
  };

  render() {
    return (
      <section className="container">
        {this.showErrorMessages()}
        <div className="row">
          <div className="col-md-6 col-sm-12 offset-md-3">
            <div className="register-wrapper">
              <h1 className="text-center">Register</h1>
              <RegisterFrom
                change={this.handleInputChange}
                formValue={this.state.formValue}
                submit={this.handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  { registerNewUserAction }
)(Register);
