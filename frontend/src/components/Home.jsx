import React from "react";
import dish from "../assets/dish.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center p-6">
      <div className="flex flex-col md:flex-row items-center max-w-screen-lg w-full gap-8">
        {/* Right Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center mr-8 w-full">
          <img src={dish} alt="Dish" className="h-[100] w-[100]" />
        </div>

        {/* Left Section */}
        <div className="flex flex-col gap-2 text-center md:text-left md:w-2/4">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold">
            Learn. Cook. Share.
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold flex justify-center md:justify-start items-center">
            Cooking Made Easy.
          </h1>
          <p className="text-2xl">
            Say goodbye to long and frustrating food blogs and recipe videos.
            Access our recipe cards to prepare any dish in minutes and also ask
            the AI assistant.
          </p>
          <Link
            to="/"
            className="mt-5 w-full sm:w-96 text-lg bg-blue-500 rounded-lg p-2 cursor-pointer text-white text-center hover:bg-blue-600"
          >
            Browse Dish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
