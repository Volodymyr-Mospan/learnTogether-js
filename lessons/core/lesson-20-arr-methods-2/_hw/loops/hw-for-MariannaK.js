//task 1
// Напишіть скрипт, який виведе в консоль всі числа кратні 3 в діапазоні від 33 до 23 включно (саме в порядку від 33 до 23)

let startNumber = 33;
let endNumber = 23;

while (startNumber >= endNumber) {

    if(startNumber % 3 === 0){
        console.log(startNumber);
    }
    startNumber--;
    
}

//task 2

let i = 0;
let randomNumber = 0;
do{
    randomNumber = Math.floor(Math.random() * 10 + 1);
    i++;  
    console.log(randomNumber);
    
} while (randomNumber !== 8) console.log('кількості ітерацій циклу = ', i);


//task 3

const num = 2;
for (let i = 2; i <= 10; i++) {
    console.log(`${num} в степені ${i} дорівнює ${num ** i}`);
}