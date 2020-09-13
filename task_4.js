let credits = 23580;
const pricePerDroid = 3000;
let quantityDroid = prompt("какое количество дроидов вы хотите купить");
const totalPrice = (quantityDroid *= pricePerDroid);

if (quantityDroid === 0) {
  console.log("Отменено пользователем!");
} else if (totalPrice >= credits) {
  console.log("Недостаточно средств на счету!");
} else {
  credits = credits -= totalPrice;
  console.log(
    `Вы купили ${(quantityDroid /= pricePerDroid)} дроидов, на счету осталось ${credits} кредитов.`
  );
}
