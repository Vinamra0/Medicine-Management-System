const express = require("express");
const Medicine = require("../models/medicine");
const Ingredient = require("../models/ingredient");

const router = express.Router();

// Create a new medicine
router.post("/", async (req, res) => {
  try {
    const medicine = new Medicine(req.body);
    await medicine.save();
    res.status(201).send(medicine);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all medicines
router.get("/", async (req, res) => {
  try {
    const medicines = await Medicine.find().populate(
      "ingredientsRequired.ingredientId"
    );
    res.send(medicines);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const medicine = await Medicine.findById(id).populate(
      "ingredientsRequired.ingredientId"
    );
    res.send(medicine);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route handler to calculate the maximum quantity of a given medicine that can be made
router.get("/:id/calculate", async (req, res) => {
  const { id } = req.params;
  const medicine = await Medicine.findById(id).populate(
    "ingredientsRequired.ingredientId"
  );
  if (!medicine) {
    return res.status(404).send("Medicine not found");
  }

  let maxQuantity = Infinity;
  for (const { ingredientId, amount } of medicine.ingredientsRequired) {
    const ingredient = await Ingredient.findById(ingredientId);
    if (!ingredient) {
      return res.status(404).send("Ingredient not found");
    }
    const possibleQuantity = Math.floor(ingredient.quantity / amount);
    maxQuantity = Math.min(maxQuantity, possibleQuantity);
  }

  res.send({ maxQuantity });
});

// Update a medicine by ID
router.patch("/:id", async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!medicine) {
      return res.status(404).send();
    }
    res.send(medicine);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a medicine by ID
router.delete("/:id", async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndDelete(req.params.id);
    if (!medicine) {
      return res.status(404).send();
    }
    res.send(medicine);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
