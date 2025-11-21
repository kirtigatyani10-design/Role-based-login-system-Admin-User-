import React from "react";
import { Nav } from "react-bootstrap";
import {
  HouseDoor,
  Person,
  People,
  Gear,
  BoxArrowRight,
  ListCheck,
} from "react-bootstrap-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/features/authSlice";

function Sidebar({ isOpen}) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get role from Redux (authSlice me save hua h)
  const role = useSelector((state) => state.auth.user?.role);

  // Highlight active links
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={`sidebar d-flex flex-column p-3 vh-100 ${isOpen ? "open" : ""}`}>
      <h4 className="text-center text-primary fw-bold mb-4">
        {role === "admin" ? "Admin Panel" : "User Panel"}
      </h4>

      <Nav className="flex-column gap-3">

        {/* Dashboard */}
        <Nav.Link
          as={Link}
          to={role === "admin" ? "/dashboard/admin" : "/dashboard/user"}
          className={`d-flex align-items-center gap-2 ${
            isActive(role === "admin" ? "/dashboard/admin" : "/dashboard/user")
              ? "active-link"
              : "text-light"
          }`}
        >
          <HouseDoor /> Dashboard
        </Nav.Link>

        {/* Profile (common) */}
        <Nav.Link
          as={Link}
          to="/profile"
          className={`d-flex align-items-center gap-2 ${
            isActive("/profile") ? "active-link" : "text-light"
          }`}
        >
          <Person /> Profile
        </Nav.Link>

        {/* Admin-only Links */}
        {role === "admin" && (
          <>
            <Nav.Link
              as={Link}
              to="/employees"
              className={`d-flex align-items-center gap-2 ${
                isActive("/employees") ? "active-link" : "text-light"
              }`}
            >
              <People /> Employees
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/reports"
              className={`d-flex align-items-center gap-2 ${
                isActive("/reports") ? "active-link" : "text-light"
              }`}
            >
              <ListCheck /> Reports
            </Nav.Link>
          </>
        )}

        {/* User-only Links */}
        {role === "user" && (
          <Nav.Link
            as={Link}
            to="/my-projects"
            className={`d-flex align-items-center gap-2 ${
              isActive("/my-projects") ? "active-link" : "text-light"
            }`}
          >
            <ListCheck /> My Projects
          </Nav.Link>
        )}

        {/* Common Settings */}
        <Nav.Link
          as={Link}
          to="/settings"
          className={`d-flex align-items-center gap-2 ${
            isActive("/settings") ? "active-link" : "text-light"
          }`}
        >
          <Gear /> Settings
        </Nav.Link>
      </Nav>

      {/* Logout (common) */}
      <div className="mt-auto">
        <Nav.Link
          onClick={handleLogout}
          className="text-danger d-flex align-items-center gap-2"
          style={{ cursor: "pointer" }}
        >
          <BoxArrowRight /> Logout
        </Nav.Link>
      </div>
    </div>
  );
}

export default Sidebar;


