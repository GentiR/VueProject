import express from "express";
import productController from "../controllers/productController";


const productRoute = express.Router();

productRoute.get("/list", productController.list);

productRoute.get("/:id", productController.get);

productRoute.post("/create", productController.create);

productRoute.put("/update", productController.put);


export default realEstateRoute;