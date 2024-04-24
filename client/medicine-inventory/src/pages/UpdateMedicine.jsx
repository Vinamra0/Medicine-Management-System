import React, { useEffect, useState } from "react";
import IngredientsListWithId from "../components/IngredientsListWithId";
import AddMedicineForm from "../components/AddMedicineForm";
import GoHomeButton from "../components/GoHomeButton";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateMedicine = () => {
  const { medicineId } = useParams();
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/medicines/${medicineId}`
        );
        setMedicine(response.data);
      } catch (error) {
        console.error("Error fetching medicine:", error);
      }
    };

    fetchMedicine();
  }, [medicineId]);
  return (
    <div>
      <IngredientsListWithId />
      <AddMedicineForm medicine={medicine} />
      <GoHomeButton />
    </div>
  );
};

export default UpdateMedicine;
