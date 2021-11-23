const express = require("express");
const { createcategory, getcategories } = require("../controller/category");

const Router = express.Router();

Router.post("/category/create", createcategory);
Router.get("/category/get", getcategories);

module.exports = Router;
