console.log("Оператор If-Else");
let number = 5;
console.log("Число " + number);

if (number % 2 === 0) {
  console.log("Число парне");
} else {
  console.log("Число непарне");
}

console.log("\n");
console.log("Оператор Switch");

let dayName = "";
let day = 0;

switch (day) {
  case 0:
    dayName = "Monday";
    break;
  case 1:
    dayName = "Tuesday";
    break;
  case 2:
    dayName = "Wednesday";
    break;
  case 3:
    dayName = "Thurday";
    break;
  case 4:
    dayName = "Friday";
    break;
  case 5:
    dayName = "Saturday";
    break;
  case 6:
    dayName = "Sunday";
    break;
  default:
    dayName = "Невідомий день";
}
console.log(`${day}: ${dayName}`);

console.log("\nТернарний оператор");
let number1 = 40;
let number2 = 40;

console.log("Перше число: " + number1);
console.log("Друге число: " + number2);

console.log(
  number1 > number2
    ? "Перше число більше"
    : number1 === number2
    ? "Числа рівні"
    : "Друге число більше"
);
