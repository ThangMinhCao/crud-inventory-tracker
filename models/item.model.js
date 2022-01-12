const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      default: "Item"
    },
    date: {
      type: String,
      required: true
    },
    warehouse: {
      type: String,
      required: true
    }
  },
  { timestamps: false }  
)

const Item = mongoose.model("item", itemSchema);

module.exports = Item;