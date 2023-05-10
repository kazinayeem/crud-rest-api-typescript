import mongoose from "mongoose";

export const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo");
    console.log("Database is conneced");
  } catch (error) {
    console.log(error);
  }
};
