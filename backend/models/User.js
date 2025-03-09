const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    podcasts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "recipes",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User',User);