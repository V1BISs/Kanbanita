import React from "react";
import "../styles/kanbanBoard.css";
import { FaPlus } from "react-icons/fa6";

const KanbanBoard = () => {
  return (
    <div className="kanbanBoard">
      <div className="headerBoard">
        <div className="headerBoardLeft">
          <div className="colorBoard"></div>
          <div className="boardName">To Do</div>
          <div className="boardInTask">(4)</div>
        </div>
        <div className="headerBoardRigth">
          <button className="addTask">
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="task">
        <div className="complexityTask">Задача</div>
        <div className="nameTask">UI/UX Дизайн</div>
        <div className="progressBar"></div>
        <div className="progressBarBG"></div>
        <div className="userInTask"></div>
        <div className="commentInTask"></div>
        <div className="approvedInTask"></div>
      </div>
    </div>
  );
};

export default KanbanBoard;
