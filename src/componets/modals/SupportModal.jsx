import React from 'react';
import ReactDOM from 'react-dom';
import { BiSupport } from 'react-icons/bi';
import './SupportModal.css';

const SupportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="support-overlay" onClick={onClose}>
      <div className="support-content" onClick={(e) => e.stopPropagation()}>
        <button className="support-close" onClick={onClose}>×</button>
        
        <div className="support-header">
          <BiSupport className="support-icon" />
          <h2>Поддержка</h2>
        </div>

        <div className="support-body">
          <p className="support-text">
            Приложение в разработке, и не все функции доступны
          </p>
          
          <a 
            href="https://t.me/andreyblackk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="support-telegram-btn"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SupportModal;