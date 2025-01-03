const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
  name: String,
  shortDescription: String,
  description: String,
  price: Number,
  discount: Number,
  images: Array(String),
  categoryId: { type: Schema.Types.ObjectId, ref: "categories" },
  brandId: { type: Schema.Types.ObjectId, ref: "brands" },
});
const Product = mongoose.model("products", productSchema);
module.exports = Product;
