import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { updateRegistrationField } from '../../store/actions/authActions';
import './ProfileModal.css';

const ProfileModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { email, username, password } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [editedUsername, setEditedUsername] = useState(username);

  if (!isOpen) return null;

  const handleSave = () => {
    if (editedUsername !== username) {
      dispatch(updateRegistrationField('username', editedUsername));
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUsername(username);
    setIsEditing(false);
  };

  return ReactDOM.createPortal(
    <div className="profile-overlay" onClick={onClose}>
      <div className="profile-content" onClick={(e) => e.stopPropagation()}>
        <button className="profile-close" onClick={onClose}>×</button>
        
        <div className="profile-header">
          <div className="profile-avatar">
            {username ? username[0].toUpperCase() : <FaUser />}
          </div>
          <h2>Профиль</h2>
        </div>

        <div className="profile-body">
          <div className="profile-info">
            <div className="profile-info-item">
              <span className="profile-info-label">Имя пользователя:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={editedUsername}
                  onChange={(e) => setEditedUsername(e.target.value)}
                  className="profile-edit-input"
                  autoFocus
                />
              ) : (
                <span className="profile-info-value">
                  {username || 'Не указано'}
                </span>
              )}
            </div>

            <div className="profile-info-item">
              <span className="profile-info-label">Email:</span>
              <span className="profile-info-value">
                {email || 'Не указан'}
              </span>
            </div>

            <div className="profile-info-item">
              <span className="profile-info-label">Пароль:</span>
              <div className="profile-password-container">
                <span className="profile-info-value">
                  {showPassword ? password : '••••••••'}
                </span>
                <button 
                  className="profile-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            {isEditing ? (
              <>
                <button className="profile-btn profile-btn-save" onClick={handleSave}>
                  Сохранить
                </button>
                <button className="profile-btn profile-btn-cancel" onClick={handleCancel}>
                  Отмена
                </button>
              </>
            ) : (
              <button 
                className="profile-btn profile-btn-edit"
                onClick={() => setIsEditing(true)}
              >
                Редактировать профиль
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProfileModal;