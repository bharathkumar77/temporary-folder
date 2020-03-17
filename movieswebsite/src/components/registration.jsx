import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class Registration extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push("/login");
  };

  handlepwchange = event => {
    const account = {};
    const errors = {};
    const { name, value } = event.currentTarget;
    account[name] = value;
    this.setState({ account });

    const obj = { [name]: value };
    const sch = { [name]: this.schema[name] };
    const result = Joi.validate(obj, sch);
    if (result.error !== null) {
      errors[name] = result.error.details[0].message;
      this.setState({ errors });
    } else {
      this.setState({ errors });
    }
  };

  state = {
    account: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    errors: {}
  };
  schema = {
    firstName: Joi.string()
      .min(3)
      .required(),
    lastName: Joi.string()
      .min(3)
      .required(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string()
      .min(8)
      .alphanum()
      .required()
  };

  render() {
    return (
      <div>
        <div
          className="col-lg-4 border rounded"
          style={{
            marginTop: "50px",
            marginLeft: "500px",
            width: "500px",
            paddingBottom: "30px"
          }}
        >
          <legend className="text-center mt-3">Register Form</legend>
          <hr style={{ backgroundColor: "red" }} />
          <form onSubmit={this.handleSubmit} className=" mt-2">
            <div className="form-group">
              <Input
                inputName="firstName"
                value={this.state.account.firstName}
                type="text"
                handleInputField={this.handlepwchange}
                label="First Name"
                error={this.state.errors.firstName}
              />
              <Input
                inputName="lastName"
                value={this.state.account.lastName}
                type="text"
                handleInputField={this.handlepwchange}
                label="Last Name"
                error={this.state.errors.lastName}
              />
              <Input
                inputName="email"
                value={this.state.account.email}
                type="email"
                handleInputField={this.handlepwchange}
                label="Email"
                error={this.state.errors.email}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <Input
                inputName="password"
                value={this.state.account.password}
                type="password"
                handleInputField={this.handlepwchange}
                label="Password"
                error={this.state.errors.password}
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-danger w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Registration;
