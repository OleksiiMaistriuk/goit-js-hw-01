// let credits = 23580;
// const pricePerDroid = 3000;
// let quantityDroid = prompt("какое количество дроидов вы хотите купить");
// const totalPrice = (quantityDroid *= pricePerDroid);

// if (quantityDroid === 0) {
//   console.log("Отменено пользователем!");
// } else if (totalPrice >= credits) {
//   console.log("Недостаточно средств на счету!");
// } else {
//   credits = credits -= totalPrice;
//   console.log(
//     `Вы купили ${(quantityDroid /= pricePerDroid)} дроидов, на счету осталось ${credits} кредитов.`
//   );
// }

const orderPieces = 5;

let credits = 23580;
let pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = pricePerDroid * orderPieces;
let balanceCredit;
let message;
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (credits >= totalPrice) {
  balanceCredit = credits - totalPrice;
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else if (totalPrice >= credits) {
  message = ACCESS_DENIED;
} else {
  message = ACCESS_DENIED;
}
console.log(message);
