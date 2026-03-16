import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoMdSettings } from 'react-icons/io';
import './SettingsModal.css';

const SettingsModal = ({ isOpen, onClose }) => {
  const [theme, setTheme] = useState('dark'); 

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-content" onClick={(e) => e.stopPropagation()}>
        <button className="settings-close" onClick={onClose}>×</button>
        
        <div className="settings-header">
          <IoMdSettings className="settings-icon" />
          <h2>Настройки</h2>
        </div>

        <div className="settings-body">
          <div className="settings-section">
            <h3 className="settings-section-title">Тема оформления</h3>
            
            <div className="theme-options">
              <button 
                className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => handleThemeChange('dark')}
              >
                <div className="theme-preview dark-preview"></div>
                <span>Темная</span>
              </button>

              <button 
                className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                onClick={() => handleThemeChange('light')}
              >
                <div className="theme-preview light-preview"></div>
                <span>Светлая</span>
              </button>

              <button 
                className={`theme-option ${theme === 'system' ? 'active' : ''}`}
                onClick={() => handleThemeChange('system')}
              >
                <div className="theme-preview system-preview"></div>
                <span>Системная</span>
              </button>
            </div>
          </div>

          <div className="settings-section">
            <h3 className="settings-section-title">Скоро будет...</h3>
            <p className="settings-note">
              В разработке: уведомления, язык интерфейса, размер шрифта
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SettingsModal;