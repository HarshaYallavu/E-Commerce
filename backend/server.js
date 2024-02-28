import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errormiddleware.js";

dotenv.config();
const port = process.env.PORT;
connectDB(); //MongoDb connection
const app = express();

app.get("/", (req, res) => {
  res.send("npm started floks. but need to restart for any chnages....");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port: ${port}`));
