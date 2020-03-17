import React, { Component } from "react";
import Movies from "./components/movies";
import { Route } from "react-router-dom";
import HomePage from "./components/homepage";
import Login from "./components/login";
import { Switch } from "react-router-dom";
import ErrorPage from "./components/404page";
import { Redirect } from "react-router-dom";
import MovieDetails from "./components/moviedetails";
import Register from "./components/registration";
import Employee from "./components/employees";
import Posts from "./components/posts";
import Logout from "./components/logout";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    isLoggedIn: false
  };
  render() {
    return (
      <div>
        <NavBar setLogin={this.setLogin} isLoggedIn={this.state.isLoggedIn} />
        <Switch>
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id?" component={MovieDetails} />

          <Route
            path="/login"
            render={props => (
              <Login
                setLogin={this.setLogin}
                isLoggedIn={this.state.isLoggedIn}
                {...props}
              />
            )}
          />

          <Route path="/register" component={Register} />
          <Route path="/employees" component={Employee} />
          <Route path="/" exact component={HomePage} />
          <Redirect from="/home" to="/" />
          <Route
            path="/logout"
            render={props => (
              <Logout
                setLogin={this.setLogin}
                isLoggedIn={this.state.isLoggedIn}
                {...props}
              />
            )}
          />
          <Route path="/posts" exact component={Posts} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
  setLogin = value => {
    this.setState({ isLoggedIn: value });
  };
}

export default App;
