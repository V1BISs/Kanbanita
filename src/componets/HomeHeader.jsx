import React from "react";
import { BsList } from "react-icons/bs";
import { FiGrid } from "react-icons/fi";
import { GoColumns, GoRows } from "react-icons/go";
import { HiSortAscending } from "react-icons/hi";
import { LuSettings2 } from "react-icons/lu";
import "../styles/homeHeader.css";

const HomeHeader = () => {
  return (
    <div className="homeHeader">
    <h1 className="yourBoard">Ваши доски</h1>
      <div className="viewPanel">
        <button className="viewButton">
          <FiGrid />
          <span>Сетка</span>
        </button>
        <button className="viewButton">
          <GoColumns />
          <span>Колонки</span>
        </button>
        <button className="viewButton">
          <GoRows />
          <span>Список</span>
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

export default HomeHeader;
