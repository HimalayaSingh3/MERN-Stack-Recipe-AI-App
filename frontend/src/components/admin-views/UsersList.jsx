import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

const UsersList = () => {
  const [users, setUsers] = useState([
    {
      username: "Himalaya337",
      email: "himalayasingh337@gmail.com",
      password: "123456",
      role: "user",
      createdAt: "2023-10-01",
    },
    {
      username: "AdminGuy",
      email: "admin@example.com",
      password: "admin123",
      role: "admin",
      createdAt: "2023-09-15",
    },
  ]);

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      const updatedUsers = [...users];
      updatedUsers.splice(index, 1);
      setUsers(updatedUsers);
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-white">User List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user, index) => (
          <div key={index} className="border bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-white">{user.username}</h2>
                <p className="text-gray-400 text-sm mb-1">📧 {user.email}</p>
                <span
                  className={`inline-block text-xs px-2 py-1 rounded-full mb-2 ${
                    user.role === 'admin' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
                  }`}
                >
                  {user.role.toUpperCase()}
                </span>
                <p className="text-gray-500 text-xs">🗓 Created: {new Date(user.createdAt).toDateString()}</p>
              </div>

              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700 cursor-pointer"
                title="Delete User"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
