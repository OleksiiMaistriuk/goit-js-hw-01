const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const quantity = prompt("Введите пароль");

if (quantity === ADMIN_PASSWORD) {
  alert("Добро пожаловать!");
} else if (quantity === null) {
  alert("Отменено пользователем!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}
