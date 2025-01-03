const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server running");
});

app.use("/category", categoryRoutes);
app.use("/brand", brandRoutes);
app.use("/product", productRoutes);

async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "e-comm-store-db",
  });
  console.log("MongoDB connected");
}

connectDB().catch((err) => {
  console.error(err);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
