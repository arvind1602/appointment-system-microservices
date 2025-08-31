import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/User-Backend");
    console.log("mongodb conntected successfully from db.connection");
  } catch (error) {
    console.log("MONGODB connection failed .. from db.connection :- ", error);
  }
};

export default connectDB;
