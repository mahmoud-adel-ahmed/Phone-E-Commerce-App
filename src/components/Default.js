import React from "react";
import { useLocation } from "react-router-dom";

const Default = () => {
  let { pathname } = useLocation();
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5 ">
          <h2 className="h1 display-3">404</h2>
          <h2 className="h1">error</h2>
          <h1>Page Not Found</h1>
          <h3>
            the requested URL
            <span className="text-danger fw-bold">{pathname}</span> was not
            found
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Default;
