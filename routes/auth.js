const express = require("express");
const { signup, signin } = require("../controller/auth");
const Router = express.Router();

Router.post("/signup", signup);
Router.post("/signin", signin);

module.exports = Router;
