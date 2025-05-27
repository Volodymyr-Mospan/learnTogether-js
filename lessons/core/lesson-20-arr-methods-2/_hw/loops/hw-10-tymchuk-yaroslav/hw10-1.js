// Напишіть скрипт, який виведе в консоль всі числа кратні 3 в діапазоні від 33 до 23 включно (саме в порядку від 33 до 23)

let counter = 33;
while (counter > 22) {
    if (counter % 3 === 0) {
        console.log(counter);
    }
    counter--;
}
