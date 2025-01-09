const express = require("express");
const {
  getNewProducts,
  getFeaturedProducts,
} = require("../handlers/product-handler");
const router = express.Router();

router.get("/new-products", async function (req, res) {
  const products = await getNewProducts();
  res.send(products);
});

router.get("/featured-products", async function (req, res) {
  const products = await getFeaturedProducts();
  res.send(products);
});

module.exports = router;
