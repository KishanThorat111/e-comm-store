const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  date: String,
  items: Array(any),
  status: Number,
});
const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
