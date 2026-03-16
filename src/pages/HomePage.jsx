import React from "react";
import NavPanel from "../componets/NavPanel";
import HeaderPanel from "../componets/HeaderPanel";
import "../styles/kanbanPage.css";
import HomeMain from "../componets/HomeMain";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="homePage">
        <div className="kanbanApp">
          <NavPanel />
          <div className="rightColumn">
            <HeaderPanel />
            <HomeMain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
