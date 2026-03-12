import React from "react";
import "../styles/navPanel.css";
import { RiHomeLine } from "react-icons/ri";
import { BsListTask } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const NavPanel = () => {
  return (
    <nav className="navMain">
        
      <img className="companyLogo"></img>
      <h1 className="companyName"></h1>
      <div className="navContent">
      <button className="navButton"><RiHomeLine /></button>
      <button className="navButton"><BsListTask /></button>
      <button className="navButton"><FaUser /></button>
      <button className="navButton"><IoMdSettings /></button>
      <button className="navButton"><BiSupport /></button>
      </div>
    </nav>
  );
};

export default NavPanel;
