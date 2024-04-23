import React from "react";
import { Link } from "react-router-dom";

const GoHomeButton = () => {
  return (
    <>
      <Link to={`/`}>
        <div>Go Home</div>
      </Link>
    </>
  );
};

export default GoHomeButton;
