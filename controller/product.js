const Product = require("../modals/product");
var formidable = require("formidable");

exports.createproduct = (req, res) => {
  const { name, category, image, details, price, tags } = req.body;
  Product.find({ category: category }).exec((err, prod) => {
    if (err) {
      res.status(500).json({
        message: err,
      });
    } else {
      let prodcount = 0;
      if (prod.length > 0) {
        prod.map((pro) => {
          if (pro.name === name) {
            prodcount = prodcount + 1;
          }
        });
      }
      if (prodcount > 0) {
        res.status(403).json({
          message: "this product already exist in this subcategory",
        });
      } else {
        const product = new Product({
          name,
          category,
          image,
          details,
          price,
          tags,
        });
        product.save((err, pro) => {
          if (err) {
            res.status(500).json({
              message: "something went wrong",
            });
          } else {
            res.status(201).json({
              message: "product created successfully",
            });
          }
        });
      }
    }
  });
};
exports.getproducts = (req, res) => {
  Product.find()
    .populate("category")
    .exec((err, prod) => {
      if (err) {
        res.status(500).json({
          mesage: "something went wrong",
        });
      } else {
        res.status(200).json(prod);
      }
    });
};
