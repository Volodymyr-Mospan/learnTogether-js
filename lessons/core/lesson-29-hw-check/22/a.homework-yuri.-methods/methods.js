const arr = [22, 33, 11, 55, 44, 66];

//! Метод push() додає один або декілька елементів в кінцеь масиву а такоє повертає нову довжину масиву;
console.log("-".repeat(80));

arr[arr.length] = 15;
const newLengthPush = arr.length;
console.log(
    `Додавання елемента '15' в кінець масиву: ${arr}; Нова довжина: ${newLengthPush}`,
);

console.log("-".repeat(80));

//! Метод pop() видаляє останній елемент масиву

arr.length = arr.length - 1;
console.log(`Видалення елемента '15' який є останній: ${arr}`);
console.log("-".repeat(80));

//! Метод shift() видаляє перший елемент масиву
const arr = [22, 33, 11, 55, 44, 66];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(`Видалення елемента '22' який є перший: ${arr}`);
console.log("-".repeat(80));

//! Метод unshift() додає один або декілька елементів на початок масиву а такоє повертає нову довжину масиву;
for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = 22;
const newLengthUnsift = arr.length;

console.log(
    `Додавання елемента '22' на початок масиву: ${arr}; Нова довжина: ${newLengthUnsift}`,
);
console.log("-".repeat(80));

//! Метод map();

const newMapArray = [];
const [min, max] = [2, 4];
for (const element of arr) {
    newMapArray[newMapArray.length] =
        element / 11 + Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(`Метод map ${newMapArray}`);
console.log("-".repeat(80));

//! Метод filter();

const newFilterArray = [];
for (const element of arr) {
    if (element <= 33 && element % 2 !== 0) {
        newFilterArray[newFilterArray.length] = element;
    }
}

console.log(`Відфільтрований масив: ${newFilterArray}`);
console.log("-".repeat(80));

//! Метод reduce();
let sum = -231;
for (const element of arr) {
    sum += element;
}
console.log(`Сума значень елементів масиву: ${sum}`);
console.log("-".repeat(80));
