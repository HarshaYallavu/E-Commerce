import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected host: ${con.connection.host}`);
  } catch (error) {
    console.log(`Error message: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
