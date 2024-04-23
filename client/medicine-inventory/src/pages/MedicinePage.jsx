import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import GoHomeButton from "../components/GoHomeButton";

const MedicineDetails = () => {
  const { medicineId } = useParams();
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState(null);
  const [maxQuantity, setMaxQuantity] = useState(null);

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

    const fetchMaxQuantity = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/medicines/${medicineId}/calculate`
        );
        setMaxQuantity(response.data.maxQuantity);
      } catch (error) {
        console.error("Error fetching max quantity:", error);
      }
    };

    fetchMedicine();
    fetchMaxQuantity();
  }, [medicineId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/medicines/${medicineId}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting medicine:", error);
    }
  };

  if (!medicine) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h2>{medicine.name}</h2>
        <h3>Ingredients:</h3>
        <ul>
          {medicine.ingredientsRequired.map((ingredient) => (
            <li key={ingredient._id}>
              {ingredient.ingredientId.name} - {ingredient.amount}
            </li>
          ))}
        </ul>
        {maxQuantity != null && <p>Producible Quantity: {maxQuantity}</p>}
        <button onClick={handleDelete}>Delete Medicine</button>
      </div>
      <GoHomeButton />
    </>
  );
};

export default MedicineDetails;
