import React, { Component } from "react";
import Input from "./input";
class Login extends Component {
  handlepwchange = event => {
    const account = this.state.account;
    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account: account });
  };
  state = {
    account: {
      email: "",
      password: ""
    },
    errors: {},
    activePage:1
  };
  handleOnSubmit = event => {
    this.setState({ password: true });
    event.preventDefault();
    const errors = {};
    const { email, password } = this.state.account;

    if (email == "") errors.email = "Email required";
    if (password == "") errors.password = "Password required";
    this.setState({ errors });
    if (email === "testuser@gmail.com" && password === "abc@123") {
      this.props.history.replace("/home");
      this.props.setLogin(true);
    } else {
      alert("You have entered wrong credentials");
    }
  };

  render() {
    return (
      <div
        className="col-lg-4 border rounded"
        style={{
          marginTop: "50px",
          marginLeft: "500px",
          width: "500px",
          paddingBottom: "30px"
        }}
      >
        <legend className="text-center mt-3">Login Form</legend>
        <hr style={{ backgroundColor: "red" }} />
        <form className=" mt-2" onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <Input
              inputName="email"
              value={this.state.account.email}
              type="email"
              handleInputField={this.handlepwchange}
              errorMessage={this.state.errors.email}
              label="email"
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
              errorMessage={this.state.errors.password}
              label="password"
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
    );
  }
}

export default Login;
