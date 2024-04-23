import { Link } from "react-router-dom";
import MedicinesList from "../components/MedicinesList";
import AddMedicineButton from "../components/AddMedicineButton";

function Home() {
  return (
    <div>
      <MedicinesList />
      <AddMedicineButton />
      <Link to={`/stock`}>
        <div>Show Stock</div>
      </Link>
    </div>
  );
}

export default Home;
