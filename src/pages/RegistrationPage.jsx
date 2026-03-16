import React from "react";
import "../styles/registrationPage.css";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const TestReg = () => {
    navigate("/home");
  };

  return (
    <div className="registrationContainer">
      <div className="registrationPanel">
        <div className="companyName">Kanbanita</div>
        <div className="registrationForm">
          <input className="regEmail" placeholder="Электронная почта"></input>
          <input className="regUserName" placeholder="Имя пользователя"></input>
          <input className="regPassword" placeholder="Пароль"></input>
        </div>
        <button onClick={TestReg} className="registrationButton">Регистрация</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
