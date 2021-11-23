const Category = require("../modals/cateogry");
const slugify = require("slugify");
const shortid = require("shortid");
exports.createcategory = (req, res) => {
  const { name } = req.body;
  Category.findOne({ name }).exec((err, cat) => {
    if (err) {
      res.status(500).json({
        message: "something went wrong",
      });
    } else {
      if (cat) {
        res.status(403).json({
          message: "category already exists",
        });
      } else {
        let slug = slugify(name);
        let id = shortid.generate();

        const category = new Category({
          name,
          slug: slug,
        });
        category.save((err, cate) => {
          if (err) {
            res.status(500).json({
              message: "somthing went wrong",
            });
          } else {
            res.status(201).json({
              message: "category created successfully",
            });
          }
        });
      }
    }
  });
};
exports.getcategories = (req, res) => {
  Category.find().exec((err, cat) => {
    if (err) {
      res.status(500).json({
        message: "something went wrong",
      });
    } else {
      res.status(200).json(cat);
    }
  });
};
