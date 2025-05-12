// Напишіть скрипт, який перевіряє, чи є число записане в початкову змінну парним

const minRandomValue = 1;
const maxRandomValue = 77;
const randomValue = Math.floor(Math.random() * (maxRandomValue - minRandomValue + 1) + minRandomValue);

console.log(randomValue);

if (randomValue % 2 === 0) {
    console.log('Число парне');
} else {
    console.log('Число не парне');
}



// Створіть програму, яка для чисел від 0 до 6  виводить назву дня тижня, відповідну цьому числу

// const number = parseInt(prompt('Введіть число від 0 до 6'))

// switch (number) {
//     case 0:
//         console.log('понеділок');
//         break;
//     case 1:
//         console.log('вівторок');
//         break;
//     case 2:
//         console.log('середа');
//         break;
//     case 3:
//         console.log('четвер');
//         break;
//     case 4:
//         console.log('п\'ятниця');
//         break;
//     case 5:
//         console.log('субота');

//         break;
//     case 6:
//         console.log('неділя');
//         break;

//     default:
//         console.log('Неправильне число!!!');
//         break;
// }




// Напишіть код, який використовує тернарний оператор, для визначення більшого з двох чисел

// const minRandomValue1 = 1;
// const maxRandomValue1 = 10;
// const randomValue1 = Math.floor(Math.random() * (maxRandomValue1 - minRandomValue1 + 1) + minRandomValue1);

// const minRandomValue2 = 1;
// const maxRandomValue2 = 10;
// const randomValue2 = Math.floor(Math.random() * (maxRandomValue2 - minRandomValue2 + 1) + minRandomValue2);

// randomValue1 > randomValue2
//     ? console.log(`Перше число ${randomValue1} більше за друге число ${randomValue2}`)
//     : randomValue1 < randomValue2
//         ? console.log(`Друге число ${randomValue2} більше за перше число ${randomValue1}`)
//         : console.log(`Перше число ${randomValue1} дорівнює другому числу ${randomValue2}`);



