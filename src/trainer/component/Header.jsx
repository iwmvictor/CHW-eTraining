import React from "react";
import { LuBell, LuSearch } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../../mock/asset";

import "./../../style/trainer.scss";

const TrainerHeader = () => {
  return (
    <>
      <div className="trainer-header">
        <div className="top-header">
          <div className="container">
            <div className="content">
              <div className="left">
                <Link to={"/trainer"} className="logo">
                  <span>CHW</span>
                </Link>
                <div className="search">
                  <span className="icon">
                    <LuSearch />
                  </span>
                  <input type="search" />
                </div>
              </div>
              <div className="right">
                <div>
                  <button className="bell">
                    <span>
                      <LuBell />
                    </span>
                  </button>
                </div>
                <div className="profile">
                  <button>
                    <img loading="lazy" src={assets.userProfile} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="container">
            <div className="content">
              <ul>
                <li>
                  <NavLink to={"/trainer"} end>
                    <span>Overview</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/trainer/courses"}
                  >
                    <span>My Courses</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/trainer/students"}>
                    <span>Students</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/trainer/analytics"}>
                    <span>Analytics</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/trainer/inbox"}>
                    <span>Messages</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/trainer/settings"}>
                    <span>Settings</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerHeader;
