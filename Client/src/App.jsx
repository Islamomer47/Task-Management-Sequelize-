// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute element={<Tasks />} />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
