// LOOPS

// while (condition) {
// код для повторного виконання
// }

// do {
// код для повторного виконання
// } while (condition);

// for (let i = 0; i < mezha; i++) {
// код для повторного виконання
// }

// i, j, k, counter
// let i = 0
// while (i<5) {
//   console.log(`ітерація циклу номер: ${i}`);
//   console.log('OK');
//   i++
// }
// console.log('дія після завершення циклу');
// let i = 6
// console.log('дія перед стартом циклу');
// while (i<5) {
//   console.log(`ітерація циклу номер: ${i}`);
//   console.log('OK');
//   i++
// }
// console.log('дія після завершення циклу');


// /**
//  * Лічильник циклу
//  * @type {number}
//  */
// let i = 0; // i,j,k, count, counter
// /**
//  * Цикл while, який виводить числа від 0 до 4
//  * @param {number} i - Лічильник циклу
//  * @returns {void} Нічого не повертає, тільки виводить значення в консоль
//  */
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(`ітерація циклу номер: ${i}`);
//   console.log(i * 10);
//   i++;
// } while (i < 5);

// console.log('дія після завершення циклу');
// console.log(i);

// let i = 9;
// do {
//   console.log(`ітерація циклу номер: ${i-9}`);
//   console.log(i*10);
//   i++;
// } while (i<5);
// console.log('дія після завершення циклу');
// console.log(i);

// /**
//  * Лічильник циклу
//  * @type {number} 
//  */
// let i = 0;
// /**
//  * Цикл do...while, який виводить числа від 0 до 4
//  * @param {number} i - Лічильник циклу
//  * @returns {void} Нічого не повертає, тільки виводить значення в консоль
//  */
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// FOR
// for (ініціалізація; умова; зміна лічільника) {
// // код для повторного виконання
// }
// Ініціалізація: Це код, який виконується один раз перед початком циклу. Зазвичай тут встановлюється змінна-лічильник.

// Умова: Це вираз, який перевіряється перед кожним кроком циклу. Якщо умова є істинною, цикл продовжується. Якщо умова є хибною, цикл зупиняється.

// Зміна лічильника: Це код, який виконується після кожного кроку циклу. Зазвичай тут змінна-лічильник збільшується або зменшується.


// for (let i = 0; i < 5; i++) {
//   // код для повторного виконання
//   console.log(`ітерація циклу номер: ${i}`);
//   console.log(i);
// }


// console.log('дія після завершення циклу');
// // console.log(i);


// for (let i = 0; i < 5; i++) {


//   console.log(`ітерація циклу номер: ${i}`);
//   console.log(i);


// }


// console.log('дія після завершення циклу');


// /**
//  * Простий цикл for, який виводить числа від 0 до 4
//  * @param {number} i - Лічильник циклу
//  * @returns {void} Нічого не повертає, тільки виводить значення в консоль
//  */
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// /**
//  * Цикл for, який виводить числа від 5 до 0 у зворотньому порядку
//  * @param {number} j - Лічильник циклу
//  * @returns {void} Нічого не повертає, тільки виводить значення в консоль
//  */
// for (let j = 5; j >= 0; j--) {
//   console.log(j);
// }


// /**
//  * Цикл for з двома лічильниками, що рухаються в протилежних напрямках
//  * @param {number} i - Перший лічильник, що збільшується
//  * @param {number} j - Другий лічильник, що зменшується 
//  * @returns {void} Нічого не повертає, тільки виводить значення в консоль
//  */
// for (let i = 0, j = 0; i < 5; i++, j--) {
//   console.log(i);
//   console.log(j);
// }
// for (let i = 0, j = 5; i < 5; i++, j--) {
//   console.log(i);
//   console.log(j);
// }


// let i = 0
// for (; i < 10; i++) {
//   console.log(i);
// }
// console.log('after loop');
// console.log(i);
// let i = 0
// for (; i < 10 ;) {
//   console.log(i);
//   i++
// }
// console.log('after loop');
// console.log(i);


// for(;;){
//   console.log('OK');
// }


// for (let i = 0; i < 10; i++) {
//   console.log(`Таблиця множення на ${i + 1}`);
//   for (let j = 0; j < 10; j++) {
//     console.log(`множник ${j + 1}: ${(i + 1)} * ${j + 1} = ${(i + 1) * (j + 1)}`);
//   }
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(`Таблиця множення на ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`множник ${j}: ${i} * ${j} = ${i * j}`);
//   }
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log('wow');
//     continue;
//   }
//   console.log(i);
// }

// console.log('==============');


// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log('wow');
//     break;
//   }
//   console.log(i);
// }


// for (let k = 0; k < 3; k++) {
//   console.log(`Старт ${k} ітерації зовнішнього циклу`);

//   for (let i = 0; i < 4; i++) {
//     if (i === 2) {
//       console.log('\t\t\t\t\twow');
//       continue;
//     }
//     console.log(`\tСтарт ${i} ітерації внутрішнього циклу`);
 
//   }
// }
// upLevel: for (let k = 0; k < 3; k++) {
//   console.log(`Старт ${k} ітерації зовнішнього циклу`);

//   for (let i = 0; i < 4; i++) {
//     if (i === 2) {
//       console.log('\t\t\t\t\twow');
//       break upLevel;
//     }
//     console.log(`\tСтарт ${i} ітерації внутрішнього циклу`);
 
//   }
// }
upLevel: for (let k = 0; k < 3; k++) {
  console.log(`Старт ${k} ітерації зовнішнього циклу`);

  for (let i = 0; i < 4; i++) {
    if (i === 2) {
      console.log('\t\t\t\t\twow');
      continue upLevel;
    }
    console.log(`\tСтарт ${i} ітерації внутрішнього циклу`);
 
  }
}