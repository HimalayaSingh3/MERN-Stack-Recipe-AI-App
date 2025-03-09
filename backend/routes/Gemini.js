const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";
const API_KEY = process.env.GEMINI_API_KEY;
const IMAGE_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateText";

router.post("/generate-recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;

    if (!ingredients || ingredients.length === 0) {
      return res.status(400).json({ error: "Ingredients are required" });
    }

    const prompt = `Generate a structured JSON recipe using these ingredients: ${ingredients.join(", ")}. 
    Format: {"title": "Recipe Title", "ingredients": ["item1", "item2"], "instructions": ["step1", "step2"]}`;

    const recipeResponse = await axios.post(`${GEMINI_API_URL}?key=${API_KEY}`, {
      prompt: { text: prompt },
    });

    const recipeText = recipeResponse.data.candidates[0].output;
    const recipe = JSON.parse(recipeText);

    const imagePrompt = `Create an image description for a dish called "${recipe.title}" made with these ingredients: ${ingredients.join(", ")}.`;
    
    const imageResponse = await axios.post(`${IMAGE_API_URL}?key=${API_KEY}`, {
      prompt: { text: imagePrompt },
    });

    const imageDescription = imageResponse.data.candidates[0].output;

    const imageUrl = `https://fakeimageapi.com/generate?description=${encodeURIComponent(imageDescription)}`;

    res.json({
      title: recipe.title,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      image: imageUrl,
    });

  } catch (error) {
    console.error("Error generating recipe:", error.message);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

module.exports = router;
