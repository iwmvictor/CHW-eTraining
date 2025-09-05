import React from "react";
import { Link } from "react-router-dom";

const StudentFooter = () => {
  return (
    <>
      <div className="student-footer">
        <div className="container">
          <div className="content">
            <div className="copy">
              <p>
                &copy; {new Date().getFullYear()} eLearn. All right reserved
              </p>
            </div>
            <ul>
              <li>
                <Link to={"/privacy"}>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to={"/terms"}>
                  <span>Terms and Conditions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentFooter;
