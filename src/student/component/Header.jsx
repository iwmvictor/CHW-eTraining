import { Link } from "react-router-dom";
import { assets } from "../../mock/asset";
import { LuBell, LuSearch } from "react-icons/lu";

import "./../../style/trainee.scss";

const StudentHeader = () => {
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
              <div className="profile">
                <button>
                  <img src={assets.userProfile} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHeader;
