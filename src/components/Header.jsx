import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { contacts } from "../mock/company";
import { LuMail, LuMenu, LuPhone, LuSearch } from "react-icons/lu";
import { formatPhoneNumber } from "../mock/functions";
import Theme from "./Theme";

import { useTranslation } from "react-i18next";
import LanguageSelector from "../i18n/Translator";

import "@/style/component.scss";

const LandingHeader = () => {
  const { t } = useTranslation();

  const [menuModal, setMenuModal] = useState(false);

  const handleMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <div className="header">
        <div className="top-header">
          <div className="container">
            <div className="content">
              <ul className="cont-list">
                <li>
                  <Link to={`mailto:${contacts.email1}`}>
                    <span>
                      <LuMail />
                    </span>
                    <span className="txt">{contacts.email1}</span>
                  </Link>
                </li>
                <li>
                  <Link to={`tel:${contacts.phone1}`}>
                    <span>
                      <LuPhone />
                    </span>
                    <span className="txt">
                      {formatPhoneNumber(contacts.phone1)}
                    </span>
                  </Link>
                </li>
              </ul>
              <ul className="top-actions">
                <li>
                  <Theme />
                </li>
                <li>
                  <LanguageSelector />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="container">
            <div className="content">
              <div className="left">
                <Link to="/" className="logo">
                  <h2>CHW</h2>
                </Link>

                <ul>
                  <li>
                    <NavLink to={"/"}>
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>
                      <span>About us</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/courses"}>
                      <span>Courses</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>
                      <span>Contact</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="right">
                <div className="search">
                  <input
                    type="search"
                    placeholder="Search here..."
                    aria-label="Search"
                  />
                  <span className="icon">
                    <LuSearch />
                  </span>
                </div>
                <Link to={"/auth/login"} className="auth">
                  <span>Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="phone-menu">
          <div className="container">
            <div className="content">
              <Link to="/" className="logo">
                <h2>CHW</h2>
              </Link>

              <div>
                <button
                  className={`${menuModal ? "active" : ""}`}
                  onClick={handleMenuModal}
                >
                  <span className="bar1"></span>
                  <span className="bar2"></span>
                  <span className="bar3"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {menuModal && (
        <div className="menu-modal">
          <div className="overlay">
            <div className="content">
              <ul>
                <li>
                  <NavLink to={"/"}>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>
                    <span>About us</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/courses"}>
                    <span>Courses</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>
                    <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingHeader;
