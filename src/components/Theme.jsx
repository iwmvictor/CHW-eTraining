import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const Theme = () => {
  const [theme, setTheme] = useState("dark-mode");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark-mode";
    document.documentElement.className = savedTheme;
    setTheme(savedTheme);
  }, []);

  // TOGGLE LIGHT-DARK MODE
  const toggleTheme = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <div className="theme">
        <button className="themebtn" onClick={toggleTheme}>
          {theme === "light-mode" ? <CiLight /> : <CiDark />}
        </button>
      </div>
    </>
  );
};

export default Theme;
