import mongoose from "mongoose";
import { env } from "process";

const MONGO_URL = String(env.MONGO_URL);
const connection = { isConnected: false};

const Connection_db = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(MONGO_URL, {});
    console.log("Database connected sucessfully");
    
    connection.isConnected = db.connections[0].readyState == 1;

  } catch (error: any) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default Connection_db;
