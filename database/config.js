import mongoose from "mongoose";

async function Connection(){
    
    try{
       await mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true});
       console.log("MongoDB Connected sucessfully");
    }
    catch(error){
    console.log("error while connecting database", error.message);
    }
}

export default Connection;