import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Logo from "./logo.jpg";
import { useEffect } from "react";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Login, Pages, PortraitSharp } from "@mui/icons-material";

const Navbar = (props) => {
  const menuData = [
    {
      path: "/profile",
      name: "Profile",
    },
    {
      path: "/attendance",
      name: "attendance",
    },
    {
      path: "/module",
      name: "module",
    },
    {
      path: "/idcard",
      name: "idcard",
    },
    {
      path: "/notice",
      name: "notice",
    },
    {
      path: "/Enquiry",
      name: "Enquiry",
    },
  ];

  const adminMenuData = [
    {
      path: "/adminprofile",
      name: "Profile",
    },
    {
      path: "/attendance",
      name: "attendance",
    },
    {
      path: "/module",
      name: "module",
    },
    {
      path: "/notice",
      name: "notice",
    },
    {
      path: "/Enquiry",
      name: "Enquiry",
    },
  ];

  const [renderMenu, setRenderMenu] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    if(props.isAdmin) {
      console.log("Hello there")
      setRenderMenu(adminMenuData)
    } else {
      setRenderMenu(menuData)
    }
  }, [props.isAdmin])

  const logout=(response)=>{
    props.logout();
    navigate("");
    localStorage.clear();  
    window.location.reload()
    
  }
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav>
      <img src={Logo} alt="" className="logo" />
      <div className="bars">
        <FaBars onClick={toggle} />
      </div>
      {props.isLogin &&
      <div className="menu" style={{ left: isOpen ? "-100%" : "0" }}>
        {renderMenu.map((item) => (
          <NavLink to={item.path} key={item.name}>
            <div className="list_item">{item.name}</div>
          </NavLink>
        ))}
        {props.isAdmin && <NavLink to={'/upload'} key={'Upload'}>
            <div className="list_item">{'Upload'}</div>
          </NavLink>}
       <Button variant="contained" onClick={logout} sx={{marginLeft: '20px', backgroundColor: 'rgb(105 129 230)'}} >Logout</Button>
      </div>}
    </nav>
  );
};

export default Navbar;
