import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    type: String,
    price: Number,
    description: String,
    userId: String,
  },
  { typeKey: "$type" }
);

const model = mongoose.model("products", schema);

export default model;