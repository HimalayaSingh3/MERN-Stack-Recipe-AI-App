import React from 'react';
import omellete from "../../assets/omellete.webp";
import { MoveLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const data = {
    img: omellete,
    title: "Egg Omelette",
    category: "Non-Veg",
    description:
      "A fluffy and delicious egg omelette made with fresh onions, green chilies, and a blend of spices. It's the perfect quick breakfast or snack!",
    ingredients: [
      "2 large eggs",
      "1 small onion (finely chopped)",
      "1 green chili (finely chopped)",
      "Salt to taste",
      "Black pepper to taste",
      "1 tbsp oil or butter",
      "Fresh coriander (optional)",
    ],
    steps: [
      "Crack the eggs into a bowl and beat them well.",
      "Add chopped onion, green chili, salt, and pepper. Mix well.",
      "Heat oil or butter in a pan over medium heat.",
      "Pour the egg mixture into the pan and spread evenly.",
      "Cook for 2-3 minutes until the bottom is set, then flip and cook the other side.",
      "Serve hot with toast or your favorite sauce.",
    ],
  };

  const navigate = useNavigate()

  return (
    <div className="p-4 sm:p-6 md:p-10 min-h-screen text-white">
      <div>
        <button onClick={() => navigate(-1)} className="cursor-pointer  bg-white/10 backdrop-blur-md p-1 rounded border border-white/20 mb-4 text-gray-300 hover:text-white transition duration-200">
          <MoveLeft/>
        </button>
      </div>
      <h1 className="flex items-center gap-3 text-3xl font-extrabold mb-8"><Search/> Product Detail</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <img
          src={data.img}
          alt={data.title}
          className="w-full lg:w-1/2 lg:h-96 h-72 rounded-2xl shadow-lg"
        />

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm w-fit">
            {data.category}
          </span>
          <p className="text-gray-300">{data.description}</p>

          <div>
            <h3 className="text-xl font-semibold mt-6 mb-2">🧂 Ingredients</h3>
            <ul className="list-disc list-inside text-gray-300">
              {data.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mt-6 mb-2">👨‍🍳 How to Make</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-1">
              {data.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
