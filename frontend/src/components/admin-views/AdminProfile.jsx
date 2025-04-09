import React from "react";
import { ShieldCheck, Mail, CalendarDays } from "lucide-react";

const AdminProfile = () => {
  const admin = {
    name: "Himalaya Singh",
    email: "himalayasingh337@gmail.com",
    role: "Admin",
    joined: "October 1, 2023",
    avatar: `https://ui-avatars.com/api/?name=Himalaya+Singh&background=0D8ABC&color=fff`,
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Admin Profile</h1>

      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-md border border-white/10">
        <img
          src={admin.avatar}
          alt="Admin Avatar"
          className="w-32 h-32 rounded-full object-cover border-2 border-white/20"
        />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {admin.name}
            <ShieldCheck className="text-green-500 w-5 h-5" />
          </h2>

          <p className="flex items-center gap-2 text-gray-300">
            <Mail className="w-4 h-4" /> {admin.email}
          </p>

          <p className="flex items-center gap-2 text-gray-300">
            <CalendarDays className="w-4 h-4" /> Joined: {admin.joined}
          </p>

          <p className="mt-2 inline-block bg-blue-600 text-xs px-3 py-1 rounded-full font-semibold w-fit">
            {admin.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
