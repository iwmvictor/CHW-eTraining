import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../mock/asset";
import { toast } from "react-toastify";

const dummyUsers = [
  { email: "student@chw.com", password: "123", role: "trainee" },
  { email: "trainer@chw.com", password: "123", role: "trainer" },
  { email: "admin@chw.com", password: "123", role: "admin" },
];

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = dummyUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      toast.success("Welcome!");

      // Navigate based on role
      if (foundUser.role === "trainee") {
        navigate("/trainee");
      } else if (foundUser.role === "admin") {
        navigate("/admin");
      } else if (foundUser.role === "trainer") {
        navigate("/trainer");
      }
    } else {
      setError("Invalid email or password");
      toast.error("Invalid credentials");
    }
  };

  return (
    <div>
      <div className="auth">
        <div className="login">
          <div className="sidebar">
            <img loading="lazy" src={assets.auth.bg} alt="background" />
            <div className="container">
              <div className="content">
                <div className="logo">
                  <Link to="/">
                    <span>eLearn</span>
                  </Link>
                </div>
                <div>
                  <h2>Login and come on in.</h2>
                  <p>
                    Simple, secure, and free training for community health
                    workers and nurses across Rwanda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="main">
            <div className="container">
              <div className="content">
                <div className="form">
                  <div className="form-title">
                    <h2>Welcome back!</h2>
                    <div className="div">
                      <div>
                        <p>Don't have an account yet?</p>
                        <p>
                          <Link to={"/trainee"}>learner</Link> {" . "}
                          <Link to={"/trainer"}>admin</Link>
                        </p>
                      </div>
                      <div>
                        <Link to={"/auth/register"}>
                          <span>Register</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="input-group">
                      <div className="input">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email">Email address</label>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input">
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    <div className="div">
                      <div className="remember">
                        <input type="checkbox" name="rememer" id="" />
                        <label htmlFor="remember">Remember me</label>
                      </div>
                      <div className="forgot">
                        <Link to={"/auth/reset-password"}>
                          <span>Forgot password?</span>
                        </Link>
                      </div>
                    </div>
                    <div className="button">
                      <button type="submit">Log in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
