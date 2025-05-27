// Цикл While
console.log('--While--');

let limit = 33;
while (limit >= 23) {
    if(limit % 3 === 0) {
        console.log(limit);
    }
    limit--;
}

// Цикл Do/While
console.log('--Do/While--');

let iterations = 0;
let stopNumber = 8;
let generatedNumber;

do {
    iterations++;
    generatedNumber = Math.floor(Math.random() * 10) + 1;
    console.log(generatedNumber);
} while (generatedNumber !== stopNumber);

console.log(`Quantity of iterations to generate number "${stopNumber}" is ${iterations}`);

// Цикл For
console.log('--For--');

let result = 0;

for (let i = 2; i < 11; i++) {
    result = Math.pow(2, i);
    console.log(`2 to power ${i} equals ${result}`);
}