const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      default: "Item",
    },
    date: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: false }
);

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
