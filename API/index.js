//IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");
//SERVER WITH CORS
const app = express();
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
dotenv.config();
app.listen(process.env.PORT || 8000, () => {
  console.log("SERVER IS ON");
});
//MONGOOSE DATABASE
mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log("MONGOOSE IS ON");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
//ROUTESS
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
