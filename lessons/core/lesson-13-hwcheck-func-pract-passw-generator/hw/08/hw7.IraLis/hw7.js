/* Оператор If-Else
Напишіть скрипт, який перевіряє, чи є число записане в початкову змінну парним. Програма повинна вивести в консоль "Число парне" або "Число непарне" в залежності від числа яке призначено у початкову змінну. */

console.log(`Оператор If-Else:`)
let czyslo = 6;
if (czyslo % 2 === 0) {
  console.log("\nczyslo parne");
} else {
  console.log("\nczyslo ne parne");
}

/* Оператор Switch
Створіть програму, яка для чисел від 0 до 6  виводить назву дня тижня, відповідну цьому числу (0 - понеділок, 1 - вівторок, і т.д.). Якщо число не входить в цей діапазон, програма повинна вивести "Неправильне число". */

console.log(`\nОператор Switch:`)
let numerDnia = Math.round(Math.random() * 7);
// let numerDnia = 1;
console.log(`\n` + numerDnia);
switch (numerDnia) {
  case 0:
    console.log("ponedilok");
    break;
  case 1:
    console.log("wtorek");
    break;
  case 2:
    console.log("sereda");
    break;
  case 3:
    console.log("czetwerg");
    break;
  case 4:
    console.log("piatnycia");
    break;
  case 5:
    console.log("subota");
    break;
  case 6:
    console.log("nedilia");
    break;
  default:
    console.log("Неправильне число");
}

if ((numerDnia === 0)) {
  console.log("ponedilok")
}
else if (numerDnia === 1) {
  console.log("wtorek")
}
else if (numerDnia === 2) {
  console.log("sereda")
}
else if (numerDnia === 3) {
  console.log("czetwerg")
} else if (numerDnia === 4) {
  console.log("piatnycia")
} else if (numerDnia === 5) {
  console.log("subota")
} else if (numerDnia === 6) {
  console.log("nedilia")
} else console.log("Неправильне число");

/*  Тернарний оператор(*)
Напишіть код, який використовує тернарний оператор, для визначення більшого з двох чисел (створіть дві початкові змінні). Програма повинна виводити "Перше число більше", "Друге число більше" або "Числа рівні", в залежності від чисел призначених в початкові змінні. (підказка: тернарний оператор можна додавати як одне зі значень іншого тернарного оператора)*/

console.log(`\nТернарний оператор:`);
let czyslo1 = Math.random() * 10;
let czyslo2 = Math.random() * 10;
// console.log(`\n` + czyslo1);
console.log(`\n ${czyslo1}`);
console.log(czyslo2);
let rez =
  czyslo1 > czyslo2
    ? `Перше число більше`
    : czyslo2 > czyslo1
      ? "Друге число більше"
      : 'Числа рівні';
console.log(rez);




