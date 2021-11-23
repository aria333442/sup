const express = require("express");
const { createproduct, getproducts } = require("../controller/product");

const Router = express.Router();

Router.post("/product/create", createproduct);
Router.get("/product/get", getproducts);

module.exports = Router;
