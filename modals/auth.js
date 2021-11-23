const mongoose = require("mongoose");

const authScheema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  shipping_Address: {
    type: String,
    min: 5,
    max: 1024,
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  email_verified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("users", authScheema);
