import React from "react";

const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 my-2 text-center mx-auto text-title">
        <h1 className="text-capitalize fw-fw-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
