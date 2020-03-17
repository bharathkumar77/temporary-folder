import React, { Component } from "react";
import EmployeeForm from "./employeeform";

class Employee extends Component {
  state = {
    employee: [
      {
        EmpName: "Bharath",
        EmpID: "853780",
        EmpEmail: "gundskoti@cognizant.com",
        EmpDept: "BPO"
      },
      {
        EmpName: "Sharath",
        EmpID: "853784",
        EmpEmail: "bharath.varikoti@cognizant.com",
        EmpDept: "Sales"
      },
      {
        EmpName: "Okati",
        EmpID: "853788",
        EmpEmail: "okati@cognizant.com",
        EmpDept: "Marketing"
      }
    ],
    emp: {
      EmpName: "",
      EmpID: "",
      EmpEmail: "",
      EmpDept: ""
    },
    empupdate: {
      EmpName: "",
      EmpID: "",
      EmpEmail: "",
      EmpDept: ""
    },
    empfinal: {
      EmpName: "",
      EmpID: "",
      EmpEmail: "",
      EmpDept: ""
    }
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>EmpName</th>
              <th>EmpID</th>
              <th>EmpEmail</th>
              <th>EmpDept</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.employee.map(eachguy => (
              <tr>
                <td>{eachguy.EmpName}</td>
                <td>{eachguy.EmpID}</td>
                <td>{eachguy.EmpEmail}</td>
                <td>{eachguy.EmpDept}</td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    this.deleteEmp(eachguy.EmpID);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => this.handleUpdateSubmit(eachguy.EmpID)}
                  type="button"
                  className="btn btn-info btn-sm"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Update
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Update Details
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={this.handleUpdateFinal}>
                          <div className="form-group">
                            <label htmlfor="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              name="EmpEmail"
                              onChange={this.handleUpdateInput}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlfor="exampleInputPassword1">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              name="EmpName"
                              onChange={this.handleUpdateInput}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlfor="exampleInputPassword1">
                              Department
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              name="EmpDept"
                              onChange={this.handleUpdateInput}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlfor="exampleInputPassword1">
                              User ID
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              name="EmpID"
                              onChange={this.handleUpdateInput}
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" className="btn btn-success">
                              Save changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="col-lg-4 m-auto">
          <EmployeeForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
  deleteEmp = id => {
    const employee = this.state.employee.filter(empis => empis.EmpID !== id);
    this.setState({ employee });
  };
  handleUpdateSubmit = id => {
    const employee = this.state.employee.filter(empis => empis.EmpID === id);
    this.setState({ empupdate: employee });
  };

  handleInput = event => {
    const employee = this.state.employee;
    employee[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ emp: employee });
  };

  handleUpdateInput = event => {
    const employee = this.state.employee;
    employee[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ emp: employee });
  };
  handleUpdateFinal = event => {
    event.preventDefault();
    const employee = this.state.employee;
    const empupdate = this.state.empupdate;
    const index = employee.indexOf(empupdate);
    console.log(index);
    employee[index] = this.state.emp;
    this.setState({ employee });
  };

  handleSubmit = event => {
    event.preventDefault();
    const employee = [...this.state.employee, this.state.emp];
    this.setState({ employee });
  };
}

export default Employee;
