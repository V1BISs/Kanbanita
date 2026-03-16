import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import "../styles/projectBoard.css";

const NewBoard = () => {
  return (
    <div className="addNewBoard">
      <div className="addBoard">
        <CiCirclePlus />
      </div>
    </div>
  );
};

export default NewBoard;
