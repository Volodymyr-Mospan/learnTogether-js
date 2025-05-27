//* ЗАВДАННЯ

/* 
Цикл While
Напишіть скрипт, який виведе в консоль всі числа кратні 3 в діапазоні від 33 до 23 включно (саме в порядку від 33 до 23)

-----

Цикл Do/While
Створіть програму,  яка генерує та виводить в консоль випадкові числа від 1 до 10, поки не згенерується число 8. Програма також повинна вести підрахунок кількості ітерацій циклу, потрібних для генерації числа 8, та виводити це число після закінчення циклу.

-----

Цикл For
Напишіть код, який використовує цикл for для піднесення числа 2 до степеня від 2 до 10 включно. Результат кожної операції піднесення до степеня повинен бути виведений в консоль у форматі "2 в степені N дорівнює R", де N - це поточна степінь, а R - це результат піднесення до степеня.
*/

// ============

//*1 Цикл While

let startNum, endNum;
startNum = 33;
endNum = 23;
const divideNum = 3;

while (startNum >= endNum) {
  if (startNum % divideNum === 0) {
    console.log(`${startNum} ділиться на ${divideNum} без остачі`);
  }
  startNum--;
}

//*2 Цикл Do/While

let iterator = 1;
let countIteration = 1;
const limitNum = 10;

do {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber === 8) {
    console.log(`Число: ${randomNumber} згенеровано протягом ${countIteration} ітерацій`);
    break
    // continue
  }
  console.log(`Число: ${randomNumber}`);
  iterator++;
  countIteration += 1;
} while (iterator <= limitNum);

//*3 Цикл For

const numLimit = 10;
const numForExponent = 2;

for (let i = 2; i <= numLimit; i++) {
  let result = Math.pow(numForExponent, i);
  console.log(`${numForExponent} в степені ${i} дорівнює ${result}`);
}
