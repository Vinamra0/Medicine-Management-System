const express = require("express");
const Ingredient = require("../models/ingredient");
const Medicine = require("../models/medicine");

const router = express.Router();

// Create a new ingredient
router.post("/", async (req, res) => {
  try {
    const ingredient = new Ingredient(req.body);
    await ingredient.save();
    res.status(201).send(ingredient);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all ingredients
router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.send(ingredients);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).send();
    }
    res.send(ingredient);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update an ingredient by ID
router.patch("/:id", async (req, res) => {
  try {
    const ingredient = await Ingredient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!ingredient) {
      return res.status(404).send();
    }
    res.send(ingredient);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an ingredient by ID
router.delete("/:id", async (req, res) => {
  try {
    const ingredientId = req.params.id;

    // Check if the ingredient is used in any medicine
    const medicine = await Medicine.findOne({
      "ingredientsRequired.ingredientId": ingredientId,
    });

    if (medicine) {
      return res.status(400).json({
        error: "Ingredient is used in a medicine and cannot be deleted.",
      });
    }

    const ingredient = await Ingredient.findByIdAndDelete(ingredientId);
    if (!ingredient) {
      return res.status(404).send();
    }
    res.send(ingredient);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
