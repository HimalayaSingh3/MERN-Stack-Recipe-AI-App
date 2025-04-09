import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/register";
import Navbar from "./pages/Navbar";
import Home from "./components/user-views/Home";
import Ask from "./components/user-views/Ask";
import All from "./components/user-views/All";
import Add from "./components/admin-views/Add";
import Profile from "./pages/Profile";
import Faviorites from "./components/user-views/Faviorites";
import ProductDetail from "./components/user-views/ProductDetail";
import UsersList from "./components/admin-views/UsersList";
import Admin from "./components/admin-views/Admin";
import Layout from "./pages/Layout";
import Category from "./components/admin-views/Category";
import AdminProfile from "./components/admin-views/AdminProfile";

const App = () => {
  return (
    <div>
      <Router>
        
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Routes with default layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="ask" element={<Ask />} />
          <Route path="profile" element={<Profile />} />
          <Route path="detail" element={<ProductDetail />} />
          <Route path="fav" element={<Faviorites />} />
          <Route path="home" element={<Home />} />
        </Route>

        {/* Admin Routes with admin layout */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Admin />} />
          <Route path="category" element={<Category />} />
          <Route path="add" element={<Add />} />
          <Route path="users" element={<UsersList />} />
          <Route path="admin-profile" element={<AdminProfile />} />
        </Route>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
