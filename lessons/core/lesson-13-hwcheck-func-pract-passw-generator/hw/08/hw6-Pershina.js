// 1

let checkedNumber = '1';

if (checkedNumber % 2 === 0) {
  console.log(`${checkedNumber} - парне число`);
} else if (checkedNumber % 2 === 1) {
  console.log(`${checkedNumber} - непарне число`);
} else {
  console.log(`${checkedNumber} - не число`);
}

// 2

let numberOfDay = 7;

switch (numberOfDay) {
  case 0:
    console.log(`${numberOfDay} - понеділок`);
    break;
  case 1:
    console.log(`${numberOfDay} - вівторок`);
    break;
  case 2:
    console.log(`${numberOfDay} - середа`);
    break;
  case 3:
    console.log(`${numberOfDay} - четвер`);
    break;
  case 4:
    console.log(`${numberOfDay} - п'ятниця`);
    break;
  case 5:
    console.log(`${numberOfDay} - субота`);
    break;
  case 6:
    console.log(`${numberOfDay} - неділя`);
    break;

  default:
    console.log(`Неправильне число`);
    break;
}

// 3

const firstNumber = '7';
const secondNumber = 5;

firstNumber - secondNumber > 0
  ? console.log(`Перше число більше`)
  : firstNumber - secondNumber < 0
    ? console.log(`Друге число більше`)
    : firstNumber === secondNumber
      ? console.log(`Числа рівні`)
      : console.log(`Введено некоректні дані`);
