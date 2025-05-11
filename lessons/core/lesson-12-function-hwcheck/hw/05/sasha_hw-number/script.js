// 1:
let integerNumber = 456;
let floatingPointNumber = 20.06;
console.log(integerNumber, floatingPointNumber);
console.log(typeof integerNumber);
console.log(typeof floatingPointNumber);



// 2:
const largeNumber = 1_000_000;
// console.log(Number.MAX_SAFE_INTEGER);
let bigNumber = 9007199254740993n;
console.log(bigNumber + BigInt(6));



// 3:
let scientificNotation = 1.23e5; // це означає що число 1.23 потрібно помножити на 10 п'ять разів.
console.log(scientificNotation);
let negativeScienceNotation = 1.23e-5; // 1.23 поділити на 10 п'ять разів.
console.log(negativeScienceNotation);



// 4:
const minRandomNumber = 4;
const maxRandomNumber = 7;
const randomNumber = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1) + minRandomNumber);
console.log(randomNumber);



// 5:
let firstDecimal = 0.11;
let secondDecimal = 0.12;
let sum = firstDecimal + secondDecimal;
console.log(sum); // 0.22999999999999998







