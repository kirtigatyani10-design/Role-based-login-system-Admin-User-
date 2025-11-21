import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/features/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import loginphoto from "../assets/loginphoto.avif";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      user.role === "admin"
        ? navigate("/dashboard/admin")
        : navigate("/dashboard/user");
    }
  }, []);

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Invalid credentials");
      return;
    }

    // Save in localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    dispatch({ type: "auth/setUser", payload: data.user });

    alert("Login Successful!");

    if (data.user.role === "admin") {
      navigate("/dashboard/admin");
    } else {
      navigate("/dashboard/user");
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div className="login-box shadow-lg rounded-4 bg-white p-0 overflow-hidden" style={{ maxWidth: "900px", width: "100%" }}>
        <div className="row g-0">

          <div className="col-md-6 d-none d-md-block p-0">
            <img
              src={loginphoto}
              alt="Login"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
            <h2 className="fw-bold text-primary text-center mb-3">Welcome Back</h2>
            <p className="text-center text-muted mb-4">Please login to your account</p>

            <form onSubmit={handleLogin}>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3 position-relative">
                <label className="form-label fw-semibold">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                  </button>
                </div>
              </div>

              <div className="text-end mb-3">
                <a href="#" className="text-decoration-none text-primary fw-semibold">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-primary w-100 btn-lg mb-3">
                Login
              </button>

              <p className="text-center">
                Don’t have an account?{" "}
                <Link to="/signup" className="fw-semibold text-primary text-decoration-none">
                  Register
                </Link>
              </p>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
