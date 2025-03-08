import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { Search } from "lucide-react";
import omellete from "../assets/omellete.webp";

const All = () => {
  const data = [
    {
      img: omellete,
      title: "Egg Omelette",
      ingredients: [
        "2-3 eggs",
        "2 tbsp milk (optional, for fluffiness)",
        "Salt, to taste",
        "Black pepper, to taste",
        "1 tbsp butter or olive oil",
        "2 tbsp chopped onions (optional)",
        "2 tbsp chopped tomatoes (optional)",
        "2 tbsp diced bell peppers (optional)",
        "A handful of spinach or mushrooms (optional)",
        "Grated cheese (like cheddar or mozzarella), optional",
        "Fresh herbs like cilantro or parsley (optional)",
      ],
      instructions:
        "Beat the eggs with milk, salt, and pepper. Heat butter or oil in a pan, sauté optional veggies until soft. Pour in the egg mixture and cook on medium heat until set. Sprinkle cheese and herbs if desired, fold and serve.",
    },
    {
      img: omellete,
      title: "Pancakes",
      ingredients: [
        "1 cup all-purpose flour",
        "2 tbsp sugar",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "3/4 cup milk",
        "1 egg",
        "2 tbsp melted butter",
        "1 tsp vanilla extract",
      ],
      instructions:
        "In a bowl, mix dry ingredients. In another bowl, whisk wet ingredients. Combine both and stir until smooth. Heat a non-stick pan, pour batter, and cook until bubbles form. Flip and cook until golden brown. Serve with syrup or toppings of choice.",
    },
    {
      img: omellete,
      title: "Grilled Cheese Sandwich",
      ingredients: [
        "2 slices of bread",
        "2 slices of cheese (like cheddar or American)",
        "1 tbsp butter",
      ],
      instructions:
        "Butter one side of each bread slice. Place cheese between the unbuttered sides. Heat a pan over medium heat, grill the sandwich until golden brown on both sides and cheese is melted. Serve hot.",
    },
    {
      img: omellete,
      title: "Pancakes",
      ingredients: [
        "1 cup all-purpose flour",
        "2 tbsp sugar",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "3/4 cup milk",
        "1 egg",
        "2 tbsp melted butter",
        "1 tsp vanilla extract",
      ],
      instructions:
        "In a bowl, mix dry ingredients. In another bowl, whisk wet ingredients. Combine both and stir until smooth. Heat a non-stick pan, pour batter, and cook until bubbles form. Flip and cook until golden brown. Serve with syrup or toppings of choice.",
    },
    {
      img: omellete,
      title: "Pancakes",
      ingredients: [
        "1 cup all-purpose flour",
        "2 tbsp sugar",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "3/4 cup milk",
        "1 egg",
        "2 tbsp melted butter",
        "1 tsp vanilla extract",
      ],
      instructions:
        "In a bowl, mix dry ingredients. In another bowl, whisk wet ingredients. Combine both and stir until smooth. Heat a non-stick pan, pour batter, and cook until bubbles form. Flip and cook until golden brown. Serve with syrup or toppings of choice.",
    },
    {
      img: omellete,
      title: "Pancakes",
      ingredients: [
        "1 cup all-purpose flour",
        "2 tbsp sugar",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "3/4 cup milk",
        "1 egg",
        "2 tbsp melted butter",
        "1 tsp vanilla extract",
      ],
      instructions:
        "In a bowl, mix dry ingredients. In another bowl, whisk wet ingredients. Combine both and stir until smooth. Heat a non-stick pan, pour batter, and cook until bubbles form. Flip and cook until golden brown. Serve with syrup or toppings of choice.",
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-10">All Recipes</h1>
      <div className="flex mb-5">
        <Input type="text" placeholder="Ask AI To Create Dishes ..." className="p-5"/>
        <Button variant="destructive" className="cursor-pointer p-5">
          <Search />
        </Button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((recipe, index) => (
          <div
            key={index}
            className="shadow-xl p-6 sm:p-8 rounded-lg flex flex-col gap-2 w-full bg-purple-500 text-white"
          >
            <img src={recipe.img} alt="dish-img" className="rounded-lg" />
            <h1 className="font-bold text-xl text-center mb-2">
              {recipe.title}
            </h1>
            <Accordion
              type="single"
              collapsible
              className="bg-black px-6 rounded-lg"
            >
              <AccordionItem value={`ingredients-${index}`}>
                <AccordionTrigger>Recipe Ingredients</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5">
                    {recipe.ingredients.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="bg-black px-6 rounded-lg"
            >
              <AccordionItem value={`instructions-${index}`}>
                <AccordionTrigger>Recipe Instructions</AccordionTrigger>
                <AccordionContent>{recipe.instructions}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default All;
