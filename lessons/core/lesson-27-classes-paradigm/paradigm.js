// [1, 2, 3, 4, 5, 6]
// [2,4,6]
// [4, 8, 12]
// 24


// 1. Процедурне програмування

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = [];
// let doubleNumbers = [];
// let sum = 0;

// function filterEven() {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
//     }
// }
// function double() {
//     for (let i = 0; i < evenNumbers.length; i++) {
//         doubleNumbers.push(evenNumbers[i] * 2);
//     }
// }
// function sumNumbers() {
//     for (let i = 0; i < doubleNumbers.length; i++) {
//         sum += doubleNumbers[i];
//     }
// }

// filterEven();
// double();
// sumNumbers();
// console.log(evenNumbers); // [2, 4, 6]
// console.log(doubleNumbers); // [4, 8, 12]
// console.log(sum); // 24

// 2. Об'єктно-орієнтоване програмування
// class NumberProcessor {
//     constructor(numbers) {
//         this.numbers = numbers;
//     }
//     getEvenNumbers() {
//         return this.numbers.filter(num => num % 2 === 0);
//     }
//     getDoubleNumbers() {
//         return this.getEvenNumbers().map(num => num * 2);
//     }
//     getSum() {
//         return this.getDoubleNumbers().reduce((acc, num) => acc + num, 0);
//     }
//     process() {
//         const evenNumbers = this.getEvenNumbers();
//         const doubleNumbers = this.getDoubleNumbers();
//         const sum = this.getSum();
//         return { evenNumbers, doubleNumbers, sum };
//     }
// }

// const numberProcessor = new NumberProcessor([1, 2, 3, 4, 5, 6]);
// console.log(numberProcessor);
// const evenNumbers = numberProcessor.getEvenNumbers();
// console.log(evenNumbers); // [2, 4, 6]

// const numberProcessor = new NumberProcessor([1, 2, 3, 4, 5, 6]);
// const result = numberProcessor.process();
// console.log(result.evenNumbers); // [2, 4, 6]
// console.log(result.doubleNumbers); // [4, 8, 12]
// console.log(result.sum); // 24

// const numberProcessor1 = new NumberProcessor([10, 20, 30, 40]);
// const result1 = numberProcessor1.process();
// console.log(result1.evenNumbers); // [2, 4, 6]
// console.log(result1.doubleNumbers); // [4, 8, 12]
// console.log(result1.sum); // 24

// const numberProcessor1 = new NumberProcessor([10, 20, 30, 40]);
// console.log(numberProcessor1); // [10, 20, 30, 40]
// console.log(numberProcessor1.getEvenNumbers());
// console.log(numberProcessor1.getDoubleNumbers());
// console.log(numberProcessor1.getSum());


// 3. Функціональне програмування

// const solveFunctional = (numbers) => numbers.filter(num => num % 2 === 0).map(num => num * 2).reduce((acc, num) => acc + num, 0); 

// console.log(solveFunctional([1, 2, 3, 4, 5, 6]));


// Імперативне програмування
const numbers = [1, 2, 3, 4, 5, 6];
let result = []

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        const doubled = numbers[i] * 2;
        result.push(doubled);
    }
    
}

let sum = 0;
for (let i = 0; i < result.length; i++) {
    sum += result[i];
}
console.log(sum); // 24

// Декларативне програмування
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((acc, num) => acc + num, 0);
console.log(result); // 24

