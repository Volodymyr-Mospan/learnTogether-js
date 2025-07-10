function toDivide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return console.log(`На нуль ділити не можна!`);
  } else {
    return firstNumber / secondNumber;
  }
}
function toAdd(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function toMultiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
function toSubtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function calculator() {
  let firstNumber = +prompt(`Введіть перше число`);
  let secondNumber = +prompt(`Введіть друге число`);
  let operation = prompt(`Введіть операцію`);
  lable1: if (operation === '+') {
    console.log(
      `Результат : ${firstNumber} ${operation} ${secondNumber} = ${toAdd(
        firstNumber,
        secondNumber
      )}`
    );
  } else if (operation === '-') {
    console.log(
      `Результат : ${firstNumber} ${operation} ${secondNumber} = ${toSubtract(
        firstNumber,
        secondNumber
      )}`
    );
  } else if (operation === '*') {
    console.log(
      `Результат : ${firstNumber} ${operation} ${secondNumber} = ${toMultiply(
        firstNumber,
        secondNumber
      )}`
    );
  } else if (operation === '/') {
    if (secondNumber === 0) {
      toDivide(firstNumber, secondNumber);
      // break lable1;
    } else {
      console.log(
        `Результат : ${firstNumber} ${operation} ${secondNumber} = ${toDivide(
          firstNumber,
          secondNumber
        )}`
      );
    }
  } else {
    console.log(`Ви ввели невідомий оператор`);
  }
}
calculator();
