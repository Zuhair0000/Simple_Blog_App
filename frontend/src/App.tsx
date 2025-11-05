import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.js";

import CreatePost from "../pages/CreatePost.js";
import ProtectedRoute from "../components/ProtectedRoute.js";
import Register from "../pages/Register.js";
import Login from "../pages/Login.js";
import Dashboard from "../pages/Dashboard.js";
import EditPost from "../pages/EditPost.js";
import Home from "../pages/Home.js";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
