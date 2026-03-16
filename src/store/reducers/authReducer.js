import { UPDATE_REGISTRATION_FIELD } from "../actions/authActions";
import {
  VALIDATION_RULES,
  ERROR_MESSAGES,
} from "../../constants/validationRules";

const initialState = {
  email: "",
  username: "",
  password: "",
  errors: {
    email: null,
    username: null,
    password: null,
  },
  isFormValid: false, // ← добавляем флаг
};

const authReducer = (state = initialState, action) => {
  console.log(state, action);

  switch (action.type) {
    case UPDATE_REGISTRATION_FIELD: {
      const { field, value } = action.payload;
      const isValid = VALIDATION_RULES[field.toUpperCase()]?.test(value);

      const newErrors = {
        ...state.errors,
        [field]: isValid ? null : ERROR_MESSAGES[field.toUpperCase()],
      };

      // Проверяем ВСЕ поля на валидность
      const emailValid = VALIDATION_RULES.EMAIL.test(
        field === "email" ? value : state.email,
      );
      const usernameValid = VALIDATION_RULES.USERNAME.test(
        field === "username" ? value : state.username,
      );
      const passwordValid = VALIDATION_RULES.PASSWORD.test(
        field === "password" ? value : state.password,
      );

      const allFieldsValid = emailValid && usernameValid && passwordValid;

      return {
        ...state,
        [field]: value,
        errors: newErrors,
        isFormValid: allFieldsValid, // ← обновляем флаг
      };
    }

    default:
      return state;
  }
};

export default authReducer;
