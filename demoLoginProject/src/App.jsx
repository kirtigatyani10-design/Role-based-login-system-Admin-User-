
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
import ThemeContextProvider from "./context/ThemeContext";
import Sidebar from "./pages/Sidebar";
import TopNavbar from "./context/TopNavbar";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import DashboardRedirector from "./pages/Dashboard/DashboardRedirector";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Employee from "./pages/Employee";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import MyProjects from "./pages/MyProjects";
import ProtectedRoute from "./route/ProtectedRoute";
import PublicRoute from "./route/PublicRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/style.css";
import "./styles/sidebar.css";



function App() {

  // ⭐ Sidebar toggle state for mobile
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <Router>
          <Routes>

            {/* PUBLIC ROUTES */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />

            {/* PROTECTED ROUTES */}
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <div className="d-flex">

                    {/* ⭐ SIDEBAR SECTION */}
                    <Sidebar isOpen={isSidebarOpen} />

                    {/* ⭐ MAIN CONTENT SECTION */}
                    <div className="main-content flex-grow-1">

                      {/* TOP NAVBAR */}
                      <TopNavbar
                        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                      />

                      {/* ROUTER INSIDE MAIN CONTENT */}
                      <div className="page-content p-3">
                        <Routes>
                          <Route path="/dashboard" element={<DashboardRedirector />} />
                          <Route path="/dashboard/admin" element={<AdminDashboard />} />
                          <Route path="/dashboard/user" element={<UserDashboard />} />
                          <Route path="/profile" element={<Profile />} />
                          <Route path="/employees" element={<Employee />} />
                          <Route path="/reports" element={<Reports />} />
                          <Route path="/settings" element={<Settings />} />
                          <Route path="/my-projects" element={<MyProjects />} />
                          <Route path="*" element={<Navigate to="/dashboard" />} />
                        </Routes>
                      </div>

                    </div>
                  </div>
                </ProtectedRoute>
              }
            />

          </Routes>
        </Router>
      </Provider>
    </ThemeContextProvider>
  );
}

export default App;
