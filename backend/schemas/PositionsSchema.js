const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
  product: { type: String, unique: true },
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = { PositionsSchema };