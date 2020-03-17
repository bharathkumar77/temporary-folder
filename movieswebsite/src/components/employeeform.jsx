import React from "react";
const EmployeeForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlfor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="EmpEmail"
            onChange={props.handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlfor="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="EmpName"
            onChange={props.handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlfor="exampleInputPassword1">Department</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="EmpDept"
            onChange={props.handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlfor="exampleInputPassword1">User ID</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="EmpID"
            onChange={props.handleInput}
          />
        </div>
        <button type="submit" className="btn btn-success">
          + Add Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
