//IMPORT
const mongoose = require("mongoose");
//SCHEMA
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default:
        "https://www.pngall.com/wp-content/uploads/12/Avatar-No-Background.png",
    },
  },
  { timestamps: true }
);
//EXPORT
module.exports = mongoose.model("User", UserSchema);
