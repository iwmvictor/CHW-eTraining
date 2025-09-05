import { Link } from "react-router-dom";
import { assets } from "../mock/asset";
import { LuArrowLeft } from "react-icons/lu";
import { useRef } from "react";

const RecoverPassowrd = () => {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const newInputs = [...inputsRef.current];
    newInputs[index].value = value;

    if (value && index < 5) {
      newInputs[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="auth">
        <div className="login reset">
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
                  <h2>Change your password.</h2>
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
                    <h2>Reset your password!</h2>
                    <div className="div">
                      <div>
                        <p>
                          We've sent you a verification code to
                          <br />
                          ***@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <form>
                    <div className="code-group">
                      {Array.from({ length: 6 }, (_, i) => (
                        <input
                          type="text"
                          key={i}
                          inputMode="numeric"
                          maxLength={1}
                          className="code-input"
                          ref={(el) => (inputsRef.current[i] = el)}
                          onChange={(e) => handleChange(e, i)}
                          onKeyDown={(e) => handleKeyDown(e, i)}
                        />
                      ))}
                    </div>
                    <div className="input-group">
                      <div className="input">
                        <input type="password" name="password" required />
                        <label htmlFor="password">New Password</label>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input">
                        <input type="password" name="password" required />
                        <label htmlFor="password">Confirm Password</label>
                      </div>
                    </div>

                    <div className="button">
                      <button>
                        <span>Change password</span>
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

export default RecoverPassowrd;
