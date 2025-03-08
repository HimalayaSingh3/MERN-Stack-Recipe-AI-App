import React from "react";

const Profile = () => {
  const User = [
    {
      name: "Himalaya Singh",
      email: "himalayasingh337@gmail.com",
    },
  ];
  return (
    <div className="flex justify-center items-center mt-10 p-10">
      <div className="border p-4 shadow-lg rounded-lg flex flex-col ">
        <h1 className="text-3xl font-bold mt-4 text-center">
          Profile Card
        </h1>
        <div className="w-full p-4">
          <h2 className="text-xl font-semibold mt-4">Name : {User[0].name}</h2>
          <h2 className="text-xl font-semibold mt-4">
            Email : {User[0].email}
          </h2>
          <button className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
