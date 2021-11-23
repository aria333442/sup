const express = require("express");
const app = express();
const server = require("http").createServer(app);
const mongoose = require("mongoose");
const cors = require("cors");
const auhtRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/products");

let port = process.env.PORT || 5000;

const hostname = "0.0.0.0";
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://muhammadAli:Journey!24@cluster0.qci00.mongodb.net/vitamin?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => {
    console.log("database connected nigga");
  });
app.use("/api", auhtRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

server.listen(port, () => {
  console.log("running nigga");
});
