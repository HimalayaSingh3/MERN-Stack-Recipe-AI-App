import React from "react";
import { useState } from "react";
import { Upload } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Add = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-10 text-white">Add Recipe</h1>
      <form className="bg-white shadow-lg flex flex-col border p-10 rounded-lg gap-6">
        <div className="flex flex-col justify-center items-center text-center p-10 rounded-2xl bg-green-500 text-white w-full cursor-pointer hover:bg-green-700 transition">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center gap-2"
          >
            <Upload size={32} />
            <span>{fileName || "Click to upload an image"}</span>
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <Input type="text" placeholder="Enter Title . . ." className="p-5 border rounded-md"/>
        <textarea type="text" placeholder="Enter Recipe Ingredients . . ." className="p-5 border rounded-md"/>
        <textarea type="text" placeholder="Enter Recipe Instructions . . ." className="p-5 border rounded-md"/>
        <Button className="cursor-pointer p-6 bg-green-500 hover:bg-green-700">Add Recipe</Button>
      </form>
    </div>
  );
};

export default Add;
