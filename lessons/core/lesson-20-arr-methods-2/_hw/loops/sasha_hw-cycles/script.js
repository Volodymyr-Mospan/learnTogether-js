//! Напишіть скрипт, який виведе в консоль всі числа кратні 3 в діапазоні від 33 до 23 включно (саме в порядку від 33 до 23)

let i = 33;

while (i >= 23) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i--;
}



//! Створіть програму,  яка генерує та виводить в консоль випадкові числа від 1 до 10, поки не згенерується число 8

let counter = 0;
const minRandomNumber = 1;
const maxRandomNumber = 10;
let randomNumber;

do {
    randomNumber = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1) + minRandomNumber);

    if (randomNumber !== 8) {
        console.log(`Ітерація номер ${counter + 1}`);
        console.log(randomNumber);
    } else {
        break
    }

    counter++;
} while (1);

console.log(`Для генерації числа ${randomNumber} знадобилось ${counter} ітерацій`);




//! Напишіть код, який використовує цикл for для піднесення числа 2 до степеня від 2 до 10 включно.

// for (let i = 2; i < 11; i++) {
//     const num = 2;
//     // let numToThePower = Math.pow(num, i);
//     let numToThePower = num ** i;

//     console.log(`${num} в степені ${i} дорівнює ${numToThePower}`);
// }
