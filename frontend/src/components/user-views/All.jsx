import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import omellete from "../../assets/omellete.webp";
import { Link } from "react-router-dom";

const All = () => {
  const data = [
    {
      img: omellete,
      title: "Egg Omelette",
      category: "Non-Veg",
      description: "A fluffy omelette made with eggs, onions, and spices. Perfect for breakfast!",
    },
    {
      img: omellete,
      title: "Pancakes",
      category: "Veg",
      description: "Soft and fluffy pancakes served with maple syrup and berries.",
    },
    {
      img: omellete,
      title: "Grilled Cheese Sandwich",
      category: "Non-Veg",
      description: "Golden grilled sandwich filled with melted cheese and savory meat.",
    },
    {
      img: omellete,
      title: "Pancakes",
      category: "Veg",
      description: "A classic favorite — light, airy pancakes for a wholesome start to the day.",
    },
    {
      img: omellete,
      title: "Pancakes",
      category: "Non-Veg",
      description: "Pancakes with a twist — filled with ham and served with spicy mayo.",
    },
  ];

  // Map of category to background color classes
  const categoryColors = {
    "Veg": "bg-green-600",
    "Non-Veg": "bg-red-600",
    "Vegan": "bg-yellow-500",
    "Dessert": "bg-purple-600",
  };

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-10 text-white">All Recipes</h1>

      <div className="flex gap-2 mb-5">
        <Input
          type="text"
          placeholder="Ask AI To Create Dishes ..."
          className="p-5 bg-white text-black w-full"
        />
        <Button variant="destructive" className="p-5">
          <Search />
        </Button>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((recipe, index) => {
          const colorClass = categoryColors[recipe.category] || "bg-gray-500";

          return (
            <Link
              to="/detail"
              key={index}
              className="relative bg-white/10 backdrop-blur-md rounded-lg shadow-lg flex flex-col w-full text-white overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={recipe.img}
                alt="dish-img"
                className="rounded-t-lg w-full h-28 lg:h-48 object-cover"
              />

              <span className={`absolute top-2 right-2 ${colorClass} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}>
                {recipe.category}
              </span>

              <div className="flex flex-col lg:gap-2 px-4 py-2 w-full">
                <h1 className="font-bold text-md lg:text-lg">{recipe.title}</h1>
                <p className="text-[10px] lg:text-xs">{recipe.description}</p>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default All;
