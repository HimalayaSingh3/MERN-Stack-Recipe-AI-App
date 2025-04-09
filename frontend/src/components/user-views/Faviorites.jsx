import React from "react";
import omellete from "../../assets/omellete.webp";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Faviorites = () => {
  const navigate = useNavigate();

  const faviorites = [
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
  ];

  const categoryColors = {
    "Veg": "bg-green-600",
    "Non-Veg": "bg-red-600",
  };

  const handleCardClick = () => {
    navigate("/detail");
  };

  const handleRemove = (e) => {
    e.stopPropagation(); // prevent navigation
    // add actual delete logic here
    alert("Item removed from favorites.");
  };

  return (
    <div className="text-white p-4 sm:p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8">Your Favourites</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {faviorites.map((item, index) => {
          const colorClass = categoryColors[item.category] || "bg-gray-500";

          return (
            <div
              key={index}
              onClick={handleCardClick}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-[1.02] duration-300 flex flex-col cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${colorClass}`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>

                <button
                  onClick={handleRemove}
                  className="cursor-pointer self-start border border-red-400 rounded px-3 py-1 flex items-center gap-2 text-sm text-red-400 hover:text-red-500 hover:border-red-500 transition"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faviorites;
