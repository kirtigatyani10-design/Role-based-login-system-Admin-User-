import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out!");
    navigate("/login");
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">⚙️ Settings</h2>

      {/* Theme Section */}
      <div className="card p-4 mb-3 shadow-sm">
        <h5>Appearance</h5>
        <div className="form-check form-switch mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="themeSwitch"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <label className="form-check-label" htmlFor="themeSwitch">
            Enable Dark Mode
          </label>
        </div>
      </div>

      {/* Language Section */}
      <div className="card p-4 mb-3 shadow-sm">
        <h5>Language</h5>
        <select
          className="form-select mt-2"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
        </select>
      </div>

      {/* Notification Section */}
      <div className="card p-4 mb-3 shadow-sm">
        <h5>Notifications</h5>
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="notifCheck"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          <label className="form-check-label" htmlFor="notifCheck">
            Enable Email Notifications
          </label>
        </div>
      </div>

      {/* Logout Section */}
      <div className="card p-4 shadow-sm">
        <h5>Account</h5>
        <button
          className="btn btn-danger mt-3"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;
