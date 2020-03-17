import React from "react";
import logo from "../1.jpg";

import { NavLink } from "react-router-dom";
const NavBar = props => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ background: "black", borderBottom: "2px solid red" }}
      >
        <a className="navbar-brand" href="#">
          <img src={logo} style={{ height: "30px", width: "100px" }}></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item p-2">
              <NavLink className="nav-item" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item p-2">
              <NavLink className="nav-item" to="/movies">
                Movies
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink className="nav-item" to="/posts">
                Posts
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav justify-content-end">
            {!props.isLoggedIn && (
              <li className="nav-item p-2">
                <NavLink className="nav-item" to="/login">
                  Login
                </NavLink>
              </li>
            )}
            <li className="nav-item p-2">
              <NavLink className="nav-item" to="/register">
                Register
              </NavLink>
            </li>
            {props.isLoggedIn && (
              <li className="nav-item p-2">
                <NavLink
                  className="nav-item"
                  to="/logout"
                  onClick={() => props.setLogin(false)}
                >
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
