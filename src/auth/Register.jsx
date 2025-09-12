import React, { useState } from "react";
import { assets, rwanda } from "../mock/asset";
import { Link } from "react-router-dom";

import "./../style/auth.scss";

const programs = [
  {
    name: "Community Malaria Response",
    roles: ["CHW", "Nurse"],
  },
  {
    name: "Child Nutrition Care",
    roles: ["CHW"],
  },
  {
    name: "Maternal Health Support",
    roles: ["CHW", "Midwife"],
  },
  {
    name: "HIV/AIDS Awareness",
    roles: ["CHW", "Nurse", "Counselor"],
  },
  {
    name: "Immunization Outreach",
    roles: ["CHW", "Nurse"],
  },
  {
    name: "Family Planning Education",
    roles: ["CHW", "Health Educator"],
  },
];

// Utility to get object keys safely
const getOptions = (obj) => (obj ? Object.keys(obj) : []);

const RegisterPage = () => {
  // Location states
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [village, setVillage] = useState("");

  // Program states
  const [program, setProgram] = useState("");
  const [role, setRole] = useState("");

  // Get all districts from all provinces
  const allDistricts = Object.entries(rwanda).flatMap(([_, districts]) =>
    Object.keys(districts)
  );

  // Get selected district's data
  const selectedDistrictData = Object.entries(rwanda)
    .map(([_, districts]) => districts[district])
    .find((d) => d);

  const sectorOptions = getOptions(selectedDistrictData);
  const cellOptions =
    sector && selectedDistrictData?.[sector]
      ? getOptions(selectedDistrictData[sector])
      : [];
  const villageOptions =
    cell && selectedDistrictData?.[sector]?.[cell]
      ? selectedDistrictData[sector][cell]
      : [];

  const roleOptions =
    (program && programs.find((p) => p.name === program)?.roles) || [];

  return (
    <div className="auth">
      <div className="register">
        <div className="sidebar">
          <img loading="lazy" src={assets.auth.bg} alt="background" />
          <div className="container">
            <div className="content">
              <div className="logo">
                <Link to="/">
                  <span>eLearn</span>
                </Link>
              </div>
              <div>
                <h2>Sign up and come on in.</h2>
                <p>
                  Simple, secure, and free training for community health workers
                  and nurses across Rwanda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="container">
            <div className="content">
              <div className="log">
                <div className="login">
                  <p>Already have an account?</p>
                  <Link to="/auth/login">
                    <span>Login</span>
                  </Link>
                </div>
              </div>

              <div className="form">
                <div className="form-title">
                  <h2>Welcome to CHW eTraining</h2>
                  <p>Join the Movement for Better Community Health</p>
                </div>

                <form>
                  <div className="input-group">
                    <div className="input">
                      <input type="text" name="fullnames" required />
                      <label htmlFor="fullnames">Full legal name</label>
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="input">
                      <input type="tel" name="phone" required />
                      <label htmlFor="phone">Phone number</label>
                    </div>
                    <div className="input">
                      <input type="email" name="email" required />
                      <label htmlFor="email">Email address</label>
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="input">
                      <select
                        name="district"
                        value={district}
                        onChange={(e) => {
                          setDistrict(e.target.value);
                          setSector("");
                          setCell("");
                          setVillage("");
                        }}
                      >
                        <option value="">Select District</option>
                        {allDistricts.map((d) => (
                          <option key={d} value={d}>
                            {d.charAt(0).toUpperCase() + d.slice(1)}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="district">District</label>
                    </div>

                    <div className="input">
                      <select
                        name="sector"
                        value={sector}
                        onChange={(e) => {
                          setSector(e.target.value);
                          setCell("");
                          setVillage("");
                        }}
                        disabled={!district}
                      >
                        <option value="">Select Sector</option>
                        {sectorOptions.map((s) => (
                          <option key={s} value={s}>
                            {s.charAt(0).toUpperCase() + s.slice(1)}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="sector">Sector</label>
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="input">
                      <select
                        name="cell"
                        value={cell}
                        onChange={(e) => {
                          setCell(e.target.value);
                          setVillage("");
                        }}
                        disabled={!sector}
                      >
                        <option value="">Select Cell</option>
                        {cellOptions.map((c) => (
                          <option key={c} value={c}>
                            {c.charAt(0).toUpperCase() + c.slice(1)}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="cell">Cell</label>
                    </div>

                    <div className="input">
                      <select
                        name="village"
                        value={village}
                        onChange={(e) => setVillage(e.target.value)}
                        disabled={!cell}
                      >
                        <option value="">Select Village</option>
                        {villageOptions.map((v) => (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="village">Village</label>
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="input">
                      <select
                        name="program"
                        value={program}
                        onChange={(e) => {
                          setProgram(e.target.value);
                          setRole("");
                        }}
                      >
                        <option value="">Select Program</option>
                        {programs.map((p) => (
                          <option key={p.name} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="program">Program</label>
                    </div>

                    <div className="input">
                      <select
                        name="roles"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        disabled={!program}
                      >
                        <option value="">Select Role</option>
                        {roleOptions.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="roles">Role</label>
                    </div>
                  </div>
                  <div className="button">
                    <button>
                      <span>Register</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
