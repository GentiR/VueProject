import mongoose from "mongoose";

//connection with mongo
const connection = await mongoose.connect("mongodb://localhost:27017/food-blogs-db")
console.log('connceted to mongo');

