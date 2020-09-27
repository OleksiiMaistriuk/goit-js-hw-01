let country;
let price;
let countrySelection = prompt("выбери страну");
countrySelection = countrySelection.toLowerCase();

switch (countrySelection) {
  case "china":
    price = 100;
    country = "китай";
    break;

  case "chile":
    price = 250;
    country = "Чили";
    break;

  case "australia":
    price = 170;
    country = "Австралия";
    break;

  case "india":
    price = 80;
    country = "Индия";
    break;

  case "jamaica":
    price = 120;
    country = "Ямайка";
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

console.log(`Доставка в ${country} будет стоить ${price} кредитов`);

// let countryName = "sFGR";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;
// countryName = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
// //countryName = countryName.toLowerCase(1);
// console.log(countryName);
// switch (countryName) {
//   case null:
//     message = CANCELED_BY_USER;
//     break;
//   case CHINA:
//     country = CHINA;
//     price = 100;
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     break;

//   case AUSTRALIA:
//     price = 170;
//     country = AUSTRALIA;
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     break;

//   case INDIA:
//     price = 80;
//     country = INDIA;
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     break;

//   case JAMAICA:
//     price = 120;
//     country = JAMAICA;
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     break;

//   default:
//     message = NO_DELIVERY;
// }

// console.log(message);
// const countryName = "чили";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//     case CHINA:
//       price = 100;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case AUSTRALIA:
//       price = 170;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case INDIA:
//       price = 80;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case JAMAICA:
//       price = 120;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;

//     default:
//       message = NO_DELIVERY;
//     // Write code under this line
//   }
// }
