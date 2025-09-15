import { Link } from "react-router-dom";
import { assets } from "../../mock/asset";
import { LuBell, LuSearch } from "react-icons/lu";

import { useState, useEffect, useRef } from "react";

import { HiOutlineCalendar, HiOutlineUser } from "react-icons/hi";
import { PiNotebookLight, PiCertificateLight } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";
import { SlBubbles } from "react-icons/sl";
import { BsToggleOff } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";

const ProfileModal = [
  {
    url: "/admin/calendar",
    title: "Calendar",
    icon: HiOutlineCalendar,
  },
  {
    url: "/admin/messages",
    title: "Community",
    icon: SlBubbles,
  },
];
const ProfileInfo = [
  {
    url: "/admin/settings",
    title: "Settings",
    icon: BsToggleOff,
  },
  {
    url: "",
    title: "Support",
    icon: MdInfoOutline,
  },
  {
    url: "/auth",
    title: "Sign out",
    icon: VscSignOut,
  },
];

const AdminHeader = () => {
  const profileRef = useRef(null);
  const [profileOptionModal, setProfileOptionModal] = useState(false);

  const handleProfileOptions = () => {
    setProfileOptionModal(!profileOptionModal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOptionModal(false);
      }
    };

    if (profileOptionModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOptionModal]);

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
              <>
                {/* <ProfileDrawer /> */}
                <div className="profile-options" ref={profileRef}>
                  <div className="user-profile">
                    <div className="img">
                      <img loading="lazy" src={assets.userProfile} alt="" />
                    </div>
                    <div className="info">
                      <h3>Full Names</h3>
                      <p>email@gmail.com</p>
                    </div>
                  </div>
                  <ul>
                    {ProfileModal.map((item, index) => (
                      <Link to={item.url} key={index}>
                        <span className="icon">
                          <item.icon />
                        </span>
                        <span className="txt">{item.title}</span>
                      </Link>
                    ))}
                  </ul>

                  <ul className="more">
                    {ProfileInfo.map((item, index) => (
                      <Link to={item.url} key={index}>
                        <span className="icon">
                          <item.icon />
                        </span>
                        <span className="txt">{item.title}</span>
                      </Link>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
