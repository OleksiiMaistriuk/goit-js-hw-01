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
