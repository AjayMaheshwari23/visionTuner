import mongoose from "mongoose";

const Connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true});
        console.log("Database connected sucessfully");
    }catch(error){
        console.log("Error while connecting with the database ", error.message);
    }
}

export default Connection;