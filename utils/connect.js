import mongoose from 'mongoose';


export async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect to DB");
    }catch(error){
        console.log("error while connecting.");
    }
}