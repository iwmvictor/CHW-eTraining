import { Link } from "react-router-dom";
import { assets } from "../../mock/asset";
import { LuBell, LuSearch } from "react-icons/lu";

import "./../../style/trainee.scss";
import { useState } from "react";
import { ProfileDrawer } from "./ProfileDrawer";

const StudentHeader = () => {
  const [profileOptionModal, setProfileOptionModal] = useState(false);

  const handleProfileOptions = () => {
    setProfileOptionModal(!profileOptionModal);
  };

  return (
    <>
      <div className="student-header">
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
              <div className="profile" onClick={handleProfileOptions}>
                <button>
                  <img loading="lazy" src={assets.userProfile} alt="" />
                </button>
              </div>
            </div>

            {profileOptionModal && (
              // <div className="profile-options">
              //   <div className="user-profile">
              //     <div className="img">
              //       <img loading="lazy" src={assets.userProfile} alt="" />
              //     </div>
              //     <div className="info">
              //       <h3>Full Names</h3>
              //       <p>email@gmail.com</p>
              //     </div>
              //   </div>
              //   <ul>
              //     <li>
              //       <span className="icon"></span>
              //       <span className="txt"></span>
              //     </li>
              //   </ul>
              // </div>

              <>
              <ProfileDrawer/>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHeader;
