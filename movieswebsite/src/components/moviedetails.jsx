import React, { Component } from "react";
class MovieDetails extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>This is the movie Details page</h1>
        <h1>Selected movie :{this.props.location.state.movie.title}</h1>
        <button className="btn btn-danger" onClick={this.handleback}>
          Back
        </button>
      </div>
    );
  }
  handleback = () => {
    this.props.history.push("/movies");
  };
}

export default MovieDetails;
