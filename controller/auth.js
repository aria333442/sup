const Auth = require("../modals/auth");
const jwt = require("jsonwebtoken");
exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  Auth.findOne({ email }).exec((err, user) => {
    if (err) {
      res.status(500).json({
        message: "something went wrong",
      });
    } else if (user) {
      res.status(403).json({
        message: "user already exist",
      });
    } else {
      const auth = new Auth({
        name,
        email,
        password,
      });
      auth.save((err, user) => {
        if (err) {
          res.status(500).json({
            message: "something went wrong",
          });
        } else {
          res.status(201).json({
            message: "user created successfully",
          });
        }
      });
    }
  });
};
exports.signin = (req, res) => {
  const { email, password } = req.body;
  Auth.findOne({ email }).exec((err, user) => {
    if (err) {
      res.status(500).json({
        message: "something went wrong",
      });
    } else if (user) {
      if (password === user.password) {
        const token = jwt.sign(
          {
            _id: user._id,
            role: user.role,
            email: user.email,
          },
          "MERNSECRET"
        );
        const { name, email, role, _id } = user;
        res.status(200).json({
          message: "log in successfull",
          token,
          user: {
            name,
            email,
            role,
            _id,
          },
        });
      } else {
        res.status(401).json({
          mesage: "email or password is incorrect",
        });
      }
    }
  });
};
