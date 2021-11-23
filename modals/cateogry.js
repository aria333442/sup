const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    min: 5,
    max: 1024,
    trim: true,
  },
  slug: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("categories", categorySchema);
