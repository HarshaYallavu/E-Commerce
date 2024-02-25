import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
dotenv.config();
const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("npm started floks. but need to restart for any chnages....");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const prod = products.find((p) => p._id === req.params.id);
  res.json(prod);
});
app.listen(port, () => console.log(`server running on port: ${port}`));
