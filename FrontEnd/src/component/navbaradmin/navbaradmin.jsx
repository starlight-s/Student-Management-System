import React from "react";
import { NavLink } from "react-router-dom";
import "./navbaradmin.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Logo from "./logo.jpg";

const Navbaradmin = () => {
  const menuData = [
    {
      path: "/",
      name: "Profile",
    },
    {
      path: "/upload",
      name: "Uplaod",
    },
    {
      path: "/attendance",
      name: "Attendance",
    },
    {
      path: "/module",
      name: "Module",
    },

    {
      path: "/notice",
      name: "Notice",
    },
    {
      path: "/Enquiry",
      name: "Enquiry",
    },
  ];
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav>
      <img src={Logo} alt="" className="logo" />
      <div className="bars">
        <FaBars onClick={toggle} />
      </div>
      <div className="menu" style={{ left: isOpen ? "-100%" : "0" }}>
        {menuData.map((item) => (
          <NavLink to={item.path} key={item.name}>
            <div className="list_item">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbaradmin;
