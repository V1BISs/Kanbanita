import React from "react";
import "../styles/kanbunHeader.css";
import { FiGrid } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { GoColumns } from "react-icons/go";
import { GoRows } from "react-icons/go";
import { LuSettings2 } from "react-icons/lu";
import { HiSortAscending } from "react-icons/hi";

const KanbunHeader = () => {
  return (
    <div className="kanbunHeader">
      <div className="logoContainer">
        <div className="logoProject"></div>
        <div className="bgLogoProject"></div>
      </div>
      <h1 className="projectName">Project HQ SPB</h1>
      {/* Использоать динамическое назавние проекта */}
      <div className="viewPanel">
        <button className="viewButton">
          <FiGrid />
          <span>Сетка</span>
        </button>
        <button className="viewButton">
          <BsList />
          <span>Список</span>
        </button>
        <button className="viewButton">
          <GoColumns />
          <span>Колонки</span>
        </button>
        <button className="viewButton">
          <GoRows />
          <span>Строки</span>
        </button>
      </div>
      <div className="sortPanel">
        <button className="sortButton">
          <LuSettings2 />
          <span>Фильтер</span>
        </button>
        <button className="sortButton">
          <HiSortAscending /> <span>Сортировка</span>
        </button>
      </div>
    </div>
  );
};

export default KanbunHeader;
