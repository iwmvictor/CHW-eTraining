import React from "react";
import { LuInstagram, LuLinkedin, LuTwitter, LuYoutube } from "react-icons/lu";
import { Link } from "react-router-dom";
import { assets } from "../mock/asset";

import "@/style/component.scss";

const LandingFooter = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="download-app">
          <div className="container">
            <div className="content">
              <div className="txt">
                <p>Ready to start your online courses?</p>
                <h2>Download or app and learn on go</h2>
              </div>
              <div className="img">
                <img src={assets.playstore} alt="PlayStore" />
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="container">
            <div className="content">
              <div className="col">
                <ul className="socials">
                  <li>
                    <Link>
                      <span>
                        <LuTwitter />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>
                        <LuInstagram />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>
                        <LuYoutube />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>
                        <LuLinkedin />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link>
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Careers</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Contact Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Terms</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3>Courses</h3>
                <ul>
                  <li>
                    <Link>
                      <span>Communicable diseases</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Maternal & Child Health</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>First Aid & Emergency Care</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Nutrition & Lifestyle</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <Link>
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Support</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Videos</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Documents</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="container">
            <div className="content">
              <div>
                <p>&copy; {year} CHW eTraining. All right reserved</p>
              </div>
              <div className="privacy">
                <Link>
                  <span>Privacy Policy</span>
                </Link>
                <Link>
                  <span>Terms and Condition</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
