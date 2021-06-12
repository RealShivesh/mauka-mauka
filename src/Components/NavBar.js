import React from "react";
import "./NavBar.css";
import Logo from "../asset/Group 220.png";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-header">
        <img src={Logo} alt="" className="logo" /> Organic
      </div>
      <div className="nav-menu">
        <li className="menu-items">Home</li>
        <li className="menu-items">Products</li>
        <li className="menu-items">Blog</li>
        <li className="menu-items">About Us</li>
        <li className="menu-items">Contacts</li>
      </div>
    </div>
  );
};

export default NavBar;
