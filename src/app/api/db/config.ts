import mongoose from "mongoose";
import { env } from "process";

const MONGO_URL = String(env.MONGO_URL);

const Connection_db = async () => {
  try {
    await mongoose.connect(MONGO_URL, {});
    console.log("Database connected sucessfully");
  } catch (error: any) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default Connection_db;
