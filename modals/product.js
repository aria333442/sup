const mongoose = require("mongoose");

const productScheema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 5,
      max: 1024,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    image: { type: String },
    tags: [
      {
        tag: { type: String },
        icon: { type: String },
      },
    ],
    details: {
      general: {
        type: String,
      },
      WYLI: {
        type: String,
      },
      formula: {
        type: String,
      },
      need: {
        info: {
          type: String,
        },
        image: {
          type: String,
        },
      },
      nutritionalInfo: [
        {
          name: { type: String },
          amount: { type: String },
        },
      ],
      infodetail: {
        type: String,
      },
    },
    price: {
      type: Number,
    },
  },
  { timestamp: true }
);
module.exports = mongoose.model("products", productScheema);
