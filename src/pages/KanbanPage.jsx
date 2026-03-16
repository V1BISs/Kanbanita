import React from 'react'
import NavPanel from '../componets/NavPanel'
import HeaderPanel from '../componets/HeaderPanel'
import KanbunProject from '../componets/KanbunProject'
import "../styles/kanbanPage.css";

const KanbanPage = () => {
  return (
     <div className="kanbanApp">
      <NavPanel />
      <div className="rightColumn">
        <HeaderPanel />
        <KanbunProject />
      </div>
    </div>
  )
}

export default KanbanPage