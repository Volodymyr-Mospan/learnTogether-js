// task 1
const integerNumber = 43;
const floatingPointNumber = 5.6;
console.log(integerNumber, floatingPointNumber);
console.log(typeof integerNumber, typeof floatingPointNumber); //number number

// task 2
const largeNumber = 1_000_000;
console.log(largeNumber); // 1000000
const bigNumber = 9007199254740997n;
const sumNumber = bigNumber + 23n;
console.log(sumNumber); // 9007199254741020n

// task 3
let scientificNotation = 1.23e5;// означає 1.23 * 10^5
console.log(scientificNotation); // 123000
let scientificNotation2 = 1.23e-5; // означає 1.23 * 10^-5
console.log(scientificNotation2);// 0.0000123
// щоб не було втрати точності при розрахунках з дуже великими або дуже маленькими числами 

// task 4
const numOne = 4;
const numTwo = 7;

let randomNumber = Math.floor(Math.random() * (numTwo - numOne + 1) + numOne);
console.log(randomNumber); // випадкове число від 4 до 7

// task 5
const firstDecimal = 0.11;
const secondDecimal = 0.12;
const sum = firstDecimal + secondDecimal;
console.log(sum); //0.22999999999999998
console.log(sum.toPrecision(2))// 0.23
console.log(Math.round(sum * 100) / 100); // 0.23