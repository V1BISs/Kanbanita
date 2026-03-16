
import "../styles/projectBoard.css";
import Board from "./Board";
import NewBoard from "./NewBoard";


const ProjectBoard = () => {
  return (
    <div className="projectBoardContainer">
      <Board/>
      <NewBoard/>
    </div>
  );
};

export default ProjectBoard;
