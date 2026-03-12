import React from "react";
import KanbunHeader from "./KanbunHeader";
import KanbanBoard from "./KanbanBoard";
import "../styles/kanbanBoard.css";

const KanbunProject = () => {
  return (
    <main className="kanbunProject">
      <KanbunHeader />
      <div className="boardContainer">
        <KanbanBoard />
        <KanbanBoard />
        <KanbanBoard />
      </div>
    </main>
  );
};

export default KanbunProject;
