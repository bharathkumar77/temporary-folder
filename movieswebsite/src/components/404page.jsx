import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div class="jumbotron mb-5">
        <h1 style={{ textAlign: "center" }}> 404: Page Not Found</h1>

        <h4 style={{ textAlign: "center", color: "black" }}>
          Redirect to Home Page.
          <Link className="text-success" to="/home">
            Click Here
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default ErrorPage;
