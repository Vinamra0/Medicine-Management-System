import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MedicinesList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/medicines");
        setMedicines(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    fetchMedicines();
  }, []);

  return (
    <div>
      <h2>Medicines</h2>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine._id}>
            <Link to={`/medicines/${medicine._id}`}>{medicine.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicinesList;
