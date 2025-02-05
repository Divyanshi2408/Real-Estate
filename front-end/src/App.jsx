import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddProperty from "./Pages/AddProperty";
import PropertyPage from "./Pages/Propertpage";
import PropertyDetails from "./Pages/PropertyDetails";
import UserProfile from "./Pages/UserProfile";
import Dashboard from "./Pages/Dashboard";
import PropertyManagement from "./Pages/PropertyManagement";
import UserManagement from "./Pages/UserManagement";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import UserDashboard from "./Pages/UserDashboard";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<AddProperty />} />
        <Route path="/propertyPage" element={<PropertyPage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/userDashboard" element={<UserDashboard/>} />

        {/* Nested Admin Routes */}
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />}>
          <Route path="properties" element={<PropertyManagement />} />
          <Route path="users" element={<UserManagement />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
