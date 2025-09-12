import { Link } from "react-router-dom";
import { assets } from "../mock/asset";
import { LuArrowLeft } from "react-icons/lu";

const ResetPassword = () => {
  return (
    <>
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
                  <h2>Reset your password.</h2>
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
                    <h2>Forgot password!</h2>
                    <div className="div">
                      <div>
                        <p>
                          All good. Enter your account's email address and we'll{" "}
                          <br />
                          send you a codes to reset your account.
                        </p>
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

                    <div className="button">
                      <button>
                        <span>Send reset code</span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="back">
                  <Link to={"/auth/login"}>
                    <span>
                      <LuArrowLeft />
                    </span>
                    <span>Return to login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
