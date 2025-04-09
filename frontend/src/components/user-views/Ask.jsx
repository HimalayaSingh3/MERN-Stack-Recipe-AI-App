import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import "../../App.css";

const Ask = () => {
  const [data, setData] = useState(false);

  return (
    <div className="p-10 h-screen">
      <h1 className="text-3xl font-bold mb-10 text-white">Ask AI</h1>
      <div className="flex">
        <Input
          type="text"
          placeholder="Ask AI To Create Dishes ..."
          className="p-5 bg-white "
        />
        <Button variant="destructive" className="cursor-pointer p-5">
          <Search />
        </Button>
      </div>
      {data ? (
        <div className="border mt-4 rounded-lg text-center p-2 bg-white">
          <div id="data" className="p-1 h-full">
            {data}
          </div>
          <Button className="mt-4 p-5 cursor-pointer w-full bg-blue-500 hover:bg-blue-600">
            Add This Recipe
          </Button>
        </div>
      ) : (
        <div className="text-center mt-4 text-white">Loading . . .</div>
      )}
    </div>
  );
};

export default Ask;
