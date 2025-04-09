import React from 'react';

const Category = () => {
  const categories = [
    { name: 'Electronics' },
    { name: 'Fashion' },
    { name: 'Home & Kitchen' },
    { name: 'Sports & Outdoors' },
    { name: 'Books' },
    { name: 'Electronics' },
    { name: 'Fashion' },
    { name: 'Home & Kitchen' },
    { name: 'Sports & Outdoors' },
    { name: 'Books' },
  ];

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-white">Add Category</h1>

      <form className="border rounded-lg p-6 bg-gray-800 flex flex-col gap-4 max-w-full mx-auto">
        <input
          type="text"
          placeholder="Enter New Category..."
          className="text-white border border-gray-600 bg-gray-900 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button className="text-white bg-green-600 rounded p-2 hover:bg-green-700 transition w-full">
          Add Category
        </button>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Existing Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Category;
