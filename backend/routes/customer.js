const express = require("express");
const {
  getNewProducts,
  getFeaturedProducts,
} = require("../handlers/product-handler");
const { getCategories } = require("../handlers/category-handler");
const router = express.Router();

router.get("/new-products", async function (req, res) {
  const products = await getNewProducts();
  res.send(products);
});

router.get("/featured-products", async function (req, res) {
  const products = await getFeaturedProducts();
  res.send(products);
});

router.get("/categories", async function (req, res) {
  const categories = await getCategories();
  res.send(categories);
});

module.exports = router;
