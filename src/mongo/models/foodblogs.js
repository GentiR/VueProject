import mongoose from "mongoose";

const schema = mongoose.schema({
  productName: String,
  productDescription: String,
  productPrice: String,
  productImage: String,

});

const model = mongoose.model("products", schema)

export default model;