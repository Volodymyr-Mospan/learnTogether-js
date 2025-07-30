// Оператор If-Else

let num = 23;
if (num % 2 === 0) {
  console.log(" the number is even");
} else {
  console.log(" the number is odd");
}
// the number is odd

// Оператор Switch

let dayOfWeek = 4;
switch (dayOfWeek) {
  case 0:
    console.log("Поточний день тижня - понеділок");
    break;
  case 1:
    console.log("Поточний день тижня - вівторок");
    break;
  case 2:
    console.log("Поточний день тижня - середа");
    break;
  case 3:
    console.log("Поточний день тижня - четвер");
    break;
  case 4:
    console.log("Поточний день тижня - п'ятниця");
    break;
  case 5:
    console.log("Поточний день тижня - субота");
    break;
  case 6:
    console.log("Поточний день тижня - неділя");
    break;

  default:
    console.log("отримані дані некоректні");
}



// Тернарний оператор(*)

let num1 = 11;
let num2 = 11;
let ternary =
  num1 > num2 ? "Перше число більше" : num1 < num2 ? "Друге число більше" : "Числа рівні";
console.log(ternary);