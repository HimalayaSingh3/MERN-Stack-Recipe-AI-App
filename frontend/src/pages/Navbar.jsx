import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlignRight, X, BotMessageSquare } from "lucide-react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold">
          Recipe-<span className="text-blue-500">AI</span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-500 text-xl font-bold"
          >
            {isOpen ? <X /> : <AlignRight />}
          </button>
        </div>

        <ul
          className={`md:flex gap-4 items-center text-blue-500 font-semibold absolute md:static top-16 right-0 w-full md:w-auto bg-blue-100 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/" className="block py-2 px-4 hover:text-blue-700">
                  All
                </Link>
              </li>
              <li>
                <Link to="/add" className="block py-2 px-4 hover:text-blue-700">
                  Add
                </Link>
              </li>
              <li>
                <Link
                  to="/ask"
                  className="block py-2 px-4 hover:text-blue-700"
                >
                  <span className="flex">Ask <BotMessageSquare /></span>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <Button>Profile</Button>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <div className="flex gap-2">
                <Button variant="outline" className="text-black cursor-pointer">
                  Login
                </Button>
                <Button
                  variant="destructive"
                  className="cursor-pointer hover:bg-red-700"
                >
                  Register
                </Button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
