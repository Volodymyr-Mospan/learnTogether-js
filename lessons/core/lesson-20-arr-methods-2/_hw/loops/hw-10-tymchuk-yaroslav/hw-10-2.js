// Цикл Do/While
// Створіть програму,  яка генерує та виводить в консоль випадкові числа від 1 до 10, поки не згенерується число 8. Програма також повинна вести підрахунок кількості ітерацій циклу, потрібних для генерації числа 8, та виводити це число після закінчення циклу.

let count = 0;
let min = 1;
let max = 10;
let myRundomNumber;

do {
    myRundomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Згенероване число: ${myRundomNumber}`);
    count++;
} while (myRundomNumber !== 8);

console.log(`Кількість спроб: ${count}`);
