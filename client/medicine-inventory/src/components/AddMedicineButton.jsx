import React from "react";
import { Link } from "react-router-dom";

const AddMedicineButton = () => {
  return (
    <>
      <Link to={`/medicines/add`}>
        <div>Add Medicine</div>
      </Link>
    </>
  );
};

export default AddMedicineButton;
