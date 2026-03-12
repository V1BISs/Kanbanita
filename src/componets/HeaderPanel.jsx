import React from "react";
import "../styles/headerPanel.css";
import { RiHomeLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";


const HeaderPanel = () => {
  return (
    <header className="headerPanel">
      <div className="leftHeader">
        <button className="homeButton">
          <RiHomeLine />
        </button>
      </div>
      <div className="rightHeader">
        <button className="searchButton">
          <IoSearchSharp />
        </button>
        <div className="userPrevList">
          <div className="user1"></div>
          <div className="user2"></div>
          <div className="user3"></div>
          <div className="user4"></div>
        </div>
        <button className="inviteButton">
          <span>Пригласить</span>
          <FaUserPlus />
        </button>
      </div>
    </header>
  );
};

export default HeaderPanel;
