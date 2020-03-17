import React from "react";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <div>
      <h4 class="text-center"> You have logged out Successfully !</h4>
      <h6 class="text-center">
        Click <Link to="/login">here to login</Link>
      </h6>
    </div>
  );
};

export default Logout;
