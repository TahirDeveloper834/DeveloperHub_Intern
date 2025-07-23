import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://maliktahir4401:987654321@cluster0.3bqjqno.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}