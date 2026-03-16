export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  USERNAME: /^[a-zA-Zа-яА-Я0-9_]{3,20}$/,
  PASSWORD: /^.{8,}$/
};

export const ERROR_MESSAGES = {
  EMAIL: 'Неправильный формат email',
  USERNAME: 'Имя должно быть 3-20 символов: A-Z, А-Я, 0-9',
  PASSWORD: 'Пароль: минимум 8 символов'
};