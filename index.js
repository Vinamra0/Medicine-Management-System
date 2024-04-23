const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package
const ingredientRoutes = require("./routes/ingredientRoutes");
const medicineRoutes = require("./routes/medicineRoutes");

mongoose
  .connect(
    "mongodb+srv://aryantibrewal:HjnRAgtTZ3S9n5HD@cluster0.pubssfy.mongodb.net/medicine-inventory"
  )
  .then(() => {
    const app = express();
    app.use(cors()); // Use the cors middleware
    app.use(express.json());
    app.use("/api/ingredients", ingredientRoutes);
    app.use("/api/medicines", medicineRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
