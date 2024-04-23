import React from "react";
import IngredientsList from "../components/IngredientsList";
import GoHomeButton from "../components/GoHomeButton";
import AddIngredientForm from "../components/AddIngredientForm";

const StockPage = () => {
  return (
    <div>
      <IngredientsList />
      <AddIngredientForm />
      <GoHomeButton />
    </div>
  );
};

export default StockPage;
