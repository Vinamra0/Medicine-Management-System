import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MedicinePage from "./pages/MedicinePage";
import StockPage from "./pages/StockPage";
import AddMedicine from "./pages/AddMedicine";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/medicines/:medicineId' element={<MedicinePage />} />
        <Route path='/medicines/add' element={<AddMedicine />} />
        <Route path='/stock' element={<StockPage />} />
      </Routes>
    </Router>
  );
};

export default App;
