import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc fetch all products
//@route GET /api/products
//@access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc fetch a product
//@route GET /api/product/:id
//@access public
const getProductById = asyncHandler(async (req, res) => {
  const prod = await Product.findById(req.params.id);
  if (prod) {
    res.json(prod);
  } else {
    res.status(404);
    throw new Error("resource not Found");
  }
});

export { getProductById, getProducts };
