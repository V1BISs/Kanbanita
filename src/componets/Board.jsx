import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import "../styles/projectBoard.css";

const Board = () => {
  const navigate = useNavigate();

  const toBoard = () => {
    navigate("/kanban");
  };
  return (
    <div className="projectBoard" onClick={toBoard}>
      <h1 className="nameProject">Project HQ SPB</h1>
      <h2 className="description">Тестовый проект для теста канбан доски</h2>
      <div className="progressBarToBoard"></div>
      <footer className="footerCard">
        <div className="users">
          <div className="user1"></div>
          <div className="user2"></div>
          <div className="user3"></div>
          <div className="user4"></div>
        </div>
        <div className="reaction">
          <div className="like">
            <AiFillLike />
            <span>123</span>
          </div>
          <div className="comments">
            <FaComment />
            <span>12</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Board;
