import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlignRight, X, BotMessageSquare ,HeartIcon} from "lucide-react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-index-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold text-green-500">
          Recipe-<span className="text-[#eaecc6]">AI</span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-xl font-bold"
          >
            {isOpen ? <X /> : <AlignRight />}
          </button>
        </div>

        <ul
          className={` md:flex gap-4 items-center text-white font-semibold absolute md:static top-16 right-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {isLoggedIn ? (
            <>
            <li>
                <Link to="/fav" className="block py-2 px-4 hover:text-white">
                  <span className="flex">
                    <HeartIcon className="text-red-500" size={20}/>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-4 hover:text-white">
                  All
                </Link>
              </li>
              <li>
                <Link to="/ask" className="block py-2 px-4 hover:text-white">
                  <span className="flex">
                    Ask <BotMessageSquare />
                  </span>
                </Link>
              </li>
              
              <li>
                <Link to="/profile">
                  <Button variant="destructive" className="cursor-pointer">Profile</Button>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <div className="flex gap-2">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="text-black cursor-pointer"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant="destructive"
                    className="cursor-pointer hover:bg-red-700"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
