const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredientsRequired: [
    {
      ingredientId: { type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" },
      amount: { type: Number, required: true },
    },
  ],
});

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;
