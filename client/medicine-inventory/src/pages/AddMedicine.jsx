import React from "react";
import IngredientsListWithId from "../components/IngredientsListWithId";
import AddMedicineForm from "../components/AddMedicineForm";
import GoHomeButton from "../components/GoHomeButton";

const AddMedicine = () => {
  return (
    <div>
      <IngredientsListWithId />
      <AddMedicineForm />
      <GoHomeButton />
    </div>
  );
};

export default AddMedicine;
