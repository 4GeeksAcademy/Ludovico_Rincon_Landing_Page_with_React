import React from "react";

export const Jumbotron = () => {
  return (
    <div className="rounded-3 bg-light">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome to magical NBA!</h1>
        <p className="col-md-8 fs-4">In the following links you will know more details of the career of some of the best players of the history of the league.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
  );
}