import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../mock/asset";

const LoginPage = () => {
  return (
    <div>
      <div className="auth">
        <div className="login">
          <div className="sidebar">
            <img src={assets.auth.bg} alt="background" />
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
                      </div>
                      <div>
                        <Link to={"/auth/register"}>
                          <span>Register</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <form>
                    <div className="input-group">
                      <div className="input">
                        <input type="email" name="email" required />
                        <label htmlFor="email">Email address</label>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input">
                      <input type="password" name="password" required />
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
                      <button>Log in</button>
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
