//task 1

let numUser = prompt('exit number', "")

if (Number(numUser) % 2 === 0) {
  console.log('число є парним', Number(numUser));
} else {
  console.log('число не є парним', Number(numUser));
}

// Number(numUser) % 2 === 0  ? console.log('число є парним') : console.log('число не є парним')

// task 2

let numDay = prompt('Введіть число дня');

switch (Number(numDay) - 1) {
  case 0:
    alert("Понеділок")
    break;
  case 1:
    alert("Вівторок")
    break;
  case 2:
    alert("Середа")
    break;
  case 3:
    alert("Четверг")
    break;
  case 4:
    alert("Пятниця")
    break;
  case 5:
    alert("Субота")
    break;
  case 6:
    alert("Неділя")
    break;
  default:
    alert('Ведіть число від 1 до 7');
    break;
}

// task 3

let numOne = 5;
let numTwo = 6;

numOne === numTwo
  ? console.log("числа рівні")
  : numOne > numTwo
    ? console.log("num one the big")
    : console.log("num two the big")

numOne !== numTwo
  ? (numOne > numTwo
    ? console.log("num one the big")
    : console.log("num two the big"))
  : console.log("числа рівні")
