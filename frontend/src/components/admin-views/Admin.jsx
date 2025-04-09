import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Cat, Home, PlusCircle, Users } from 'lucide-react';
import Dashboard from './Dashboard';

const Admin = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Add Product', icon: <PlusCircle className="w-5 h-5" />, to: 'add' },
    { name: 'Add Category', icon: <Cat className="w-5 h-5" />, to: 'category' },
    { name: 'Manage Users', icon: <Users className="w-5 h-5" />, to: 'users' },
    { name: 'Admin Profile', icon: <Home className="w-5 h-5" />, to: 'admin-profile' },
  ];

  const isDashboardRoute = location.pathname === '/admin';

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-950 text-white p-4 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <nav className="space-y-2">
          {navItems.map(({ name, icon, to }) => (
            <Link
              key={name}
              to={to}
              className={`flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-700 transition ${
                location.pathname.includes(to) ? 'bg-gray-700' : ''
              }`}
            >
              {icon}
              {name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen p-6">
        {isDashboardRoute ? <Dashboard /> : <Outlet />}
      </main>
    </div>
  );
};

export default Admin;
