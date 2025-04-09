import mongoose from "mongoose";

const Recipe = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    ingredients: [
      {
        name: { type: String, required: true },
      },
    ],
    instructions: [
      {
        step: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", Recipe);
