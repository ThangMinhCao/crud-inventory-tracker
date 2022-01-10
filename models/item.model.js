const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
    category: {
      type: String,
      default: "Item"
    },
    date: {
      type: Date,
      default: new Date()
    },
    wareHouse: {
      type: String,
      required: true
    }
  },
  { timestamps: false }  
)

const Item = mongoose.Schema("item", itemSchema);

module.exports = Item;