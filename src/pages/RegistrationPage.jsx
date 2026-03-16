import React, { useState, useEffect, useRef } from "react";
import "../styles/registrationPage.css";
import { useNavigate } from "react-router-dom";
import { VALIDATION_RULES, ERROR_MESSAGES } from "../constants/validationRules";
import { useDispatch, useSelector } from "react-redux";
import { updateRegistrationField } from "../store/actions/authActions";
import { debounce } from "lodash";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Данные из Redux (добавляем errors)
  const { email, username, password, errors, isFormValid } = useSelector((state) => state.auth);
  
  // Локальные состояния для быстрого отображения
  const [localEmail, setLocalEmail] = useState(email);
  const [localUsername, setLocalUsername] = useState(username);
  const [localPassword, setLocalPassword] = useState(password);

  const debouncedDispatchRef = useRef(
    debounce((name, value) => {
      dispatch(updateRegistrationField(name, value));
    }, 500)
  );

  useEffect(() => {
    const debouncedDispatch = debouncedDispatchRef.current;
    return () => {
      debouncedDispatch.cancel();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    switch(name) {
      case 'email':
        setLocalEmail(value);
        break;
      case 'username':
        setLocalUsername(value);
        break;
      case 'password':
        setLocalPassword(value);
        break;
      default:
        break;
    }
    
    debouncedDispatchRef.current(name, value);
  };

  useEffect(() => {
    setLocalEmail(email);
  }, [email]);

  useEffect(() => {
    setLocalUsername(username);
  }, [username]);

  useEffect(() => {
    setLocalPassword(password);
  }, [password]);

  const handleSubmit = () => {
    if (isFormValid) {
      navigate("/home");
    }
  };

  // Функция для определения класса инпута (с ошибкой или без)
  const getInputClassName = (fieldName) => {
    return errors && errors[fieldName] ? 'regField regFieldError' : 'regField';
  };

  return (
    <div className="registrationContainer">
      <div className="registrationPanel">
        <div className="companyName">Kanbanita</div>
        <div className="registrationForm">
          <div className="fieldContainer">
            <input
              name="email"
              value={localEmail}
              onChange={handleInputChange}
              className={getInputClassName('email')}
              placeholder="Электронная почта"
            />
            {errors && errors.email && (
              <span className="errorMessage">{errors.email}</span>
            )}
          </div>

          <div className="fieldContainer">
            <input
              name="username"
              value={localUsername}
              onChange={handleInputChange}
              className={getInputClassName('username')}
              placeholder="Имя пользователя"
            />
            {errors && errors.username && (
              <span className="errorMessage">{errors.username}</span>
            )}
          </div>

          <div className="fieldContainer">
            <input
              name="password"
              value={localPassword}
              onChange={handleInputChange}
              className={getInputClassName('password')}
              placeholder="Пароль"
              type="password"
            />
            {errors && errors.password && (
              <span className="errorMessage">{errors.password}</span>
            )}
          </div>
        </div>
        <button 
          onClick={handleSubmit} 
          className={`registrationButton ${!isFormValid ? 'registrationButtonDisabled' : ''}`}
          disabled={!isFormValid}
        >
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;