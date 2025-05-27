let number = 33;

while (number >= 23) {
    if (number % 3 === 0) {
        console.log(number);
    }
    number--; 
}

let count = 0;
let randomNumber;

do {
    randomNumber = Math.floor(Math.random() * 10) + 1; 
    count++; 
} while (randomNumber !== 8);

console.log(`Число 8 згенерувалося після ${count} ітерацій.`);

let num = 2;

for(let num2 = 2; num2 <= 10; num2++){
    let num3 = Math.pow(num, num2);
    console.log(`${num} в степені ${num2} дорівнює ${num3}`)
}