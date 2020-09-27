// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "3";
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }
//console.log(message);
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][2]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][2]); // 9
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log("Подмассив матрицы matrix[i]: ", matrix[i]);
//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log("Элемент подмассива матрицы matrix[i][j]: ", matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45
// let sum = 0;
// while (true) {
//   let value = +prompt("Введите число", "");
//   if (!value) break; // (*)
//   sum += value;
// }
// alert("Сумма: " + sum);

// for (let i = 0; i < 100; i += 1) {
//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;
//   alert(i); // 1, затем 3, 5, 7, 9
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, "");
//     // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
//   }
// }

// alert("Готово!");
// Выносим варианты в массив

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";

// if (redFruits.includes(fruit)) {
// сonsole.log("It is a red fruit!");

const a = ["ugc", "uggc"];
console.table(a);
