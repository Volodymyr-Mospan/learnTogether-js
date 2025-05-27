"use strict";

// first task
console.log("First task:");
let i = 33;
while (i >= 23) {
    if (i % 3 === 0) {
        console.log(`${i}`);
    }
    i--;
}

console.log("-".repeat(100));

// second task
console.log("Second task:");
const min = 1;
const max = 10;
let j = 1;
do {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(`Random numbers: ${random}; iteration: ${j}`);
    if (random === 8) {
        console.log(`Activation break; ${random} - found`);
        console.log(`Number of iterations: ${j}`);
        break;
    }
    j++;
} while (true);

console.log("-".repeat(100));

// third task
for (let i = 2; i <= 10; i++) {
    console.log(`2 в степені ${i} = ${Math.pow(2, i)}`);
}
