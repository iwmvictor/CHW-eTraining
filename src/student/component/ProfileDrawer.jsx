import { useState } from "react";
import { motion } from "framer-motion";

export const ProfileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleDrawer}>Profile</button>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="drawer"
        >
          <button onClick={toggleDrawer}>Close</button>
          <nav>
            <ul>
              <li>
                <a href="/profile">My Profile</a>
              </li>
              <li>
                <a href="/settings">Settings</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </>
  );
};

