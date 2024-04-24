import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MedicinePage from "./pages/MedicinePage";
import StockPage from "./pages/StockPage";
import AddMedicine from "./pages/AddMedicine";
import UpdateMedicine from "./pages/UpdateMedicine";
import AddIngredientPage from "./pages/AddIngredientPage";
import UpdateIngredient from "./pages/UpdateIngredient";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/medicines/:medicineId' element={<MedicinePage />} />
        <Route path='/medicines/add' element={<AddMedicine />} />
        <Route path='/ingredients/add' element={<AddIngredientPage />} />
        <Route
          path='/ingredients/update/:ingredientId'
          element={<UpdateIngredient />}
        />
        <Route
          path='/ingredients/update/:ingredientId'
          element={<AddMedicine />}
        />
        <Route
          path='/medicines/update/:medicineId'
          element={<UpdateMedicine />}
        />
        <Route path='/stock' element={<StockPage />} />
      </Routes>
    </Router>
  );
};

export default App;
