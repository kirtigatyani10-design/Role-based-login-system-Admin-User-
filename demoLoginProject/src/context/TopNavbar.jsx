import React, { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";

function TopNavbar({ toggleSidebar }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar
        bg={theme === "dark" ? "dark" : "light"}
        variant={theme === "dark" ? "dark" : "light"}
        expand="md"
        className="shadow-sm px-3"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2000,
        }}
      >
        <Container fluid className="d-flex align-items-center justify-content-between">

          {/* Sidebar Toggle (mobile only) */}
          <button
            className="btn d-md-none"
            style={{ fontSize: "28px" }}
            onClick={toggleSidebar}
          >
            ☰
          </button>

          {/* Navbar Title */}
          <Navbar.Brand className="fw-bold text-primary">
            Dashboard
          </Navbar.Brand>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-outline-primary rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

        </Container>
      </Navbar>

      {/* Prevent content overlap */}
      <div style={{ height: "70px" }}></div>
    </>
  );
}

export default TopNavbar;
