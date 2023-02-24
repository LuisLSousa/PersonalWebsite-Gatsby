import React from "react";
import "./heading.css"

const Heading = ({ title }) => {

  return (
    <div className="heading">
      <h1 className="">{title}</h1>
    </div>
  );
};

export default Heading;