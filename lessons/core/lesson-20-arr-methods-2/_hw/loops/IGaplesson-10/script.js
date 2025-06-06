/*Цикл While
Напишіть скрипт, який виведе в консоль всі числа кратні 3 в діапазоні від 33 до 23 включно (саме в порядку від 33 до 23)*/
let i = 33;             // ініціалізує змінну i значенням 33
while (i >= 23) {       // цикл працюватиме до тих пір, поки i більше або дорівнює 23
    console.log(i); // значення i для консолі
    i -= 3;           // віднімаємо 3 від i на кожній ітерації
}

/*Цикл Do/While
Створіть програму,  яка генерує та виводить в консоль випадкові числа від 1 до 10, поки не згенерується число 8. Програма також повинна вести підрахунок кількості ітерацій циклу, потрібних для генерації числа 8, та виводити це число після закінчення циклу.*/
let count = 0;                                   // ініціалізує змінну count  значенням 0
let numbers;                                     // ініціалізує змінну numbers беззначенням 
do {
    numbers = Math.floor((Math.random() * 10) + 1);//генерує випадкові числа від 1 до 10
    {
        console.log(`Згенероване число ${numbers}`);//виводить в консоль випадкові числа від 1 до 10
        count++;                                   //операція інкрименту  
    }
}
while (numbers !== 8) {                           //Цикл продовжується поки не згенерується  число 8
    console.log(`Кількість ітерацій ${count}`);   //виводить підрахунок кількості ітерацій циклу
}

/*Цикл For
Напишіть код, який використовує цикл for для піднесення числа 2 до степеня від 2 до 10 включно. Результат кожної операції піднесення до степеня повинен бути виведений в консоль у форматі "2 в степені N дорівнює R", де N - це поточна степінь, а R - це результат піднесення до степеня.*/
let number = 2;
let N;
let R;
for (let N = 2; N <= 10; N++) {
    let R = Math.pow(2, N);                  //піднесення числа 2 до степеня від 2 до 10 включно
    console.log(`${2} в степені ${N} дорівнює ${R}`);//Результат кожної операції піднесення до степеня  виведений в консоль у форматі "2 в степені N дорівнює R", де N - це поточна степінь, а R - це результат піднесення до степеня.
}

