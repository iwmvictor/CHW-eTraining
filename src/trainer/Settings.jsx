import React, { useState } from "react";
import { LuCamera } from "react-icons/lu";
import { assets } from "../mock/asset";

const TrainerSettings = () => {
  const [profileTab, setProfileTab] = useState(true);
  const [coverPreview, setCoverPreview] = useState("");
  const [profilePreview, setProfilePreview] = useState("");

  // Form fields with value and focus tracking
  const [formFields, setFormFields] = useState({
    fullName: { value: "", isFocused: false },
    email: { value: "", isFocused: false },
    phone: { value: "", isFocused: false },
    role: { value: "", isFocused: false },
    district: { value: "", isFocused: false },
    sector: { value: "", isFocused: false },
    cell: { value: "", isFocused: false },
    village: { value: "", isFocused: false },
  });

  const handleInputChange = (key, val) => {
    setFormFields((prev) => ({
      ...prev,
      [key]: { ...prev[key], value: val },
    }));
  };

  const handleFocusChange = (key, isFocused) => {
    setFormFields((prev) => ({
      ...prev,
      [key]: { ...prev[key], isFocused },
    }));
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setCoverPreview(imgUrl);
    }
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setProfilePreview(imgUrl);
    }
  };

  const handleTabClick = (tab) => {
    setProfileTab(tab === "profile");
  };

  return (
    <div className="dashboard">
      <div className="trainer-settings">
        <div className="container">
          <div className="content">
            <div className="titles">
              <h2>Settings</h2>
              <ul className="tabs">
                <li
                  className={profileTab ? "active" : ""}
                  onClick={() => handleTabClick("profile")}
                >
                  <span>Profile</span>
                </li>
                <li
                  className={!profileTab ? "active" : ""}
                  onClick={() => handleTabClick("password")}
                >
                  <span>Password</span>
                </li>
              </ul>
            </div>

            {profileTab ? (
              <div className="profile-tab">
                <div className="media">
                  <div className="cover">
                    <img
                      src={coverPreview || assets.userProfileCover}
                      alt="cover"
                    />
                    <label htmlFor="cover-pic">
                      <span>Edit Cover Photo</span>
                    </label>
                    <input
                      type="file"
                      id="cover-pic"
                      style={{ display: "none" }}
                      onChange={handleCoverChange}
                    />
                  </div>
                  <div className="ppicture">
                    <img loading="lazy" src={profilePreview || assets.userProfile} alt="pp" />
                    <label htmlFor="profile-pic">
                      <span>
                        <LuCamera />
                      </span>
                    </label>
                    <input
                      type="file"
                      id="profile-pic"
                      style={{ display: "none" }}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <p className="photos-detail">
                    Profile Photo: 200x200 px • Cover Photo: 1200x300 px
                  </p>
                </div>

                <div className="form">
                  <div className="inputs">
                    <FloatingInput
                      id="full-name"
                      label="Full Name"
                      value={formFields.fullName.value}
                      focused={formFields.fullName.isFocused}
                      onChange={(val) => handleInputChange("fullName", val)}
                      onFocus={(focused) =>
                        handleFocusChange("fullName", focused)
                      }
                    />
                    <FloatingInput
                      id="email"
                      label="Email"
                      type="email"
                      value={formFields.email.value}
                      focused={formFields.email.isFocused}
                      onChange={(val) => handleInputChange("email", val)}
                      onFocus={(focused) => handleFocusChange("email", focused)}
                    />
                  </div>
                  <div className="inputs">
                    <FloatingInput
                      id="phone"
                      label="Phone Number"
                      type="tel"
                      value={formFields.phone.value}
                      focused={formFields.phone.isFocused}
                      onChange={(val) => handleInputChange("phone", val)}
                      onFocus={(focused) => handleFocusChange("phone", focused)}
                    />
                    <FloatingInput
                      id="role"
                      label="Role"
                      value={formFields.role.value}
                      focused={formFields.role.isFocused}
                      onChange={(val) => handleInputChange("role", val)}
                      onFocus={(focused) => handleFocusChange("role", focused)}
                    />
                  </div>
                  <div className="inputs">
                    <FloatingInput
                      id="district"
                      label="District"
                      value={formFields.district.value}
                      focused={formFields.district.isFocused}
                      onChange={(val) => handleInputChange("district", val)}
                      onFocus={(focused) =>
                        handleFocusChange("district", focused)
                      }
                    />
                    <FloatingInput
                      id="sector"
                      label="Sector"
                      value={formFields.sector.value}
                      focused={formFields.sector.isFocused}
                      onChange={(val) => handleInputChange("sector", val)}
                      onFocus={(focused) =>
                        handleFocusChange("sector", focused)
                      }
                    />
                  </div>
                  <div className="inputs">
                    <FloatingInput
                      id="cell"
                      label="Cell"
                      value={formFields.cell.value}
                      focused={formFields.cell.isFocused}
                      onChange={(val) => handleInputChange("cell", val)}
                      onFocus={(focused) => handleFocusChange("cell", focused)}
                    />
                    <FloatingInput
                      id="village"
                      label="Village"
                      value={formFields.village.value}
                      focused={formFields.village.isFocused}
                      onChange={(val) => handleInputChange("village", val)}
                      onFocus={(focused) =>
                        handleFocusChange("village", focused)
                      }
                    />
                  </div>
                  <div className="button">
                    <button>
                      <span>Update profile</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="password-tab">
                <div className="image">
                  <img loading="lazy" src={profilePreview || assets.userProfile} alt="pp" />
                </div>
                <div className="form">
                  <div className="input">
                    <label htmlFor="current-password">Current Password</label>
                    <input type="password" id="current-password" />
                  </div>
                  <div className="input">
                    <label htmlFor="new-password">New Password</label>
                    <input type="password" id="new-password" />
                  </div>
                  <div className="input">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" />
                  </div>
                  <div className="button">
                    <button>
                      <span>Update password</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerSettings;

// Floating Input Component
const FloatingInput = ({
  id,
  label,
  value,
  onChange,
  onFocus,
  focused,
  type = "text",
}) => {
  return (
    <div className={`input ${focused || value ? "active" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
      />
    </div>
  );
};
