const Product = require("./../db/product");

async function addProduct(model) {
  let product = new Product({
    ...model,
  });
  await product.save();
  return product.toObject();
}

async function updateProduct(id, model) {
  await Product.findOneAndUpdate({ _id: id }, model);
}

async function deleteProduct(id) {
  await Product.findByIdAndDelete(id);
}

async function getAllProducts() {
  let products = await Product.find();
  return products.map((p) => p.toObject());
}

async function getProduct(id) {
  let product = await Product.findById(id);
  return product.toObject();
}

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
};
