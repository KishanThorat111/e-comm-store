const express = require("express");
const {
  getNewProducts,
  getFeaturedProducts,
  getProductForListing,
} = require("../handlers/product-handler");
const { getCategories } = require("../handlers/category-handler");
const { getBrands } = require("../handlers/brand-handler");
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

router.get("/brands", async function (req, res) {
  const brands = await getBrands();
  res.send(brands);
});

router.get("/products", async function (req, res) {
  const { searchTerm, categoryId, sortBy, sortOrder, brandId, page, pageSize } =
    req.query;
  const products = await getProductForListing(
    searchTerm,
    categoryId,
    page,
    pageSize,
    sortBy,
    sortOrder,
    brandId
  );
  res.send(products);
});

module.exports = router;
