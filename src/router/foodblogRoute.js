const express = require("express");
const router = express.Router();

// const mongodb = require('../mongo/config')

const ProductModel = require("../mongo/models/foodblogs");

/*
  API for Product Schema
  Product Create and Read all Policies API 's

*/
router.route("/products")

  //  Create a new Product
  .post((req, res) => {
    const product = new ProductModel(); // create a new instance of the Product model

    product.productName = req.body.productName;
    product.productDescription = req.body.productDescription;
    product.productPrice = req.body.productPrice;
    product.productImage = req.body.productImage;
 

    // save the bear and check for errors
    product.save(product, (err, product) => {
      if (err) {
        res.send(err);
      }

      console.log("**********NEWLY CREATED SITEURL***********");
      console.log(product);
      res.send(product);
    });
  })
  // Get All products
  .get((req, res) => {
    ProductModel.find((err, data) => {
      if (err) {
        res.send(err);
      }
      console.log("data", data);
      res.json(data);
    });
  });


/*  ProductModel Update and Read by Id and delete products API's */
// on routes that end in /products/:product_id
// ----------------------------------------------------
router
  .route("/products/:product_id")

  // get the product with that id (accessed at GET http://localhost:8080/api/products/:product_id)
  .get(function(req, res) {
    ProductModel.findById(req.params.product_id, function(err, data) {
      if (err) {
        res.send(err);
      }
      console.log("data", data);
      res.json(data);
    });
  })

  // update the product with this id (accessed at PUT http://localhost:8080/api/products/:product_id)
  .put(function(req, res) {
    // use our product model to find the product we want
    ProductModel.findById(req.params.product_id, function(err, product) {
      if (err) {
        res.send(err);
      }

      product.productName = req.body.productName;
      product.productDescription = req.body.productDescription;
      product.productPrice = req.body.productPrice;
      product.productImage = req.body.productImage;
      // save the bear
      product.save(function(err, data) {
        if (err) {
          res.send(err);
        }
        console.log("Updating product", data);
        res.send(data);
      });
    });
  })

  // delete the product with this id (accessed at DELETE http://localhost:8080/api/products/:product_id)
  .delete(function(req, res) {
    ProductModel.remove(
      {
        _id: req.params.product_id,
      },
      function(err, product) {
        if (err) {
          res.send(err);
        }
        res.send(product);
      }
    );
  });

module.exports = router;