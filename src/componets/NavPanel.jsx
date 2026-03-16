import React, { useState } from "react";
import "../styles/navPanel.css";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import SupportModal from "./modals/SupportModal";
import ProfileModal from "./modals/ProfileModal";
import SettingsModal from "./modals/SettingsModal"; 

const NavPanel = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false); 

  return (
    <nav className="navMain">
      <div className="navContent">
        <div className="topNav">
          <div className="companyLogo">K</div>
          <button 
            className="navButton"
            onClick={() => setIsSupportModalOpen(true)}
          >
            <BiSupport />
          </button>
        </div>
        <div className="bottomNav">
          <button 
            className="navButton"
            onClick={() => setIsSettingsModalOpen(true)} 
          >
            <IoMdSettings />
          </button>
          <button 
            className="navButton"
            onClick={() => setIsProfileModalOpen(true)}
          >
            <FaUser />
          </button>
        </div>
      </div>

      <SupportModal 
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />

      <ProfileModal 
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />

      <SettingsModal 
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
      />
    </nav>
  );
};

export default NavPanel;