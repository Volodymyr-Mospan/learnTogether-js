// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; // Копіюємо масив arr1 в arr2
// console.log(arr2); // Виведе [1, 2, 3]

// arr2[0] = 10; // Змінюємо перший елемент масиву arr2
// console.log(arr2); // Виведе [10, 2, 3] - масив arr2 змінився
// console.log(arr1); // Виведе [1, 2, 3] - масив arr1 не змінився

// // const arr1 = [1, 2, 5];
// const arr1 = [1, 22, 5];
// const arr2 = [2, 5, 6];
// // const combined = [...arr1, ...arr2];
// // console.log(combined); // Виведе [1, 2, 5, 2, 5, 6]

// const combined = [10, true, "test",...arr1, ...arr2, 7, 8, 9];
// console.log(combined); // Виведе [10, true, "test", 1, 2, 5, 2, 5, 6, 7, 8, 9]

// arr1[0] = 100; // Змінюємо перший елемент масиву arr1
// console.log(arr1); // Виведе [100, 22, 5] - масив arr1 змінився
// console.log(combined); // Виведе [10, true, "test", 1, 2, 5, 2, 5, 6, 7, 8, 9] - масив combined не змінився

// const str = "Hello World";
// const arr = [...str]; // Розгортаємо рядок в масив
// console.log(arr); // Виведе ['H', 'e', 'l', 'l', 'o'] - рядок str розгорнувся в масив

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1 };
// console.log(obj2); // Виведе { a: 1, b: 2 } - об'єкт obj2 є копією obj1
// obj2.a = 10; // Змінюємо властивість a об'єкта obj2
// console.log(obj2); // Виведе { a: 10, b: 2 } - об'єкт obj2 змінився
// console.log(obj1); // Виведе { a: 1, b: 2 } - об'єкт obj1 не змінився

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combined = { ...obj1, ...obj2 };
// console.log(combined); // Виведе { a: 1, b: 2, c: 3, d: 4 } - об'єкти obj1 і obj2 об'єдналися в один об'єкт combined

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// // const combined = { ...obj1, ...obj2 };
// // console.log(combined); 

// // як це працює покроково:
// const testSpread = {}
// testSpread.a = 1;
// console.log(testSpread); // Виведе { a: 1 } - об'єкт testSpread має тільки одну властивість a
// testSpread.b = 2;
// console.log(testSpread); // Виведе { a: 1, b: 2 } - об'єкт testSpread тепер має дві властивості a і b
// testSpread.b = 3; // Змінюємо властивість b об'єкта testSpread
// console.log(testSpread); // Виведе { a: 1, b: 3 } - об'єкт testSpread тепер має властивість b зі значенням 3
// testSpread.c = 4; // Додаємо нову властивість c об'єкта testSpread
// console.log(testSpread); // Виведе { a: 1, b: 3, c: 4 } - об'єкт testSpread тепер має три властивості a, b і c

// const additionObj ={b: 3, c: 4};
// const obj1 = { a: 1, b: 2, ...additionObj };
// console.log(obj1); // Виведе { a: 1, b: 3, c: 4 } - об'єкт obj1 має властивість b зі значенням 3 з об'єкта additionObj

// const testObj = { aaa:"thin", aa:"thick"};
// const testName = "aaa";
// console.log(testObj.aaa); // Виведе "thin" - значення властивості aaa об'єкта testObj
// console.log(testObj[testName]); // Виведе "thin" - значення властивості aaa об'єкта testObj
// console.log(testObj["aaa"]); // Виведе "thin" - значення властивості aaa об'єкта testObj



// {
//     [`item${2+4}`]: "value"
// }
// item6: "value"

// let i = 0
// const obj = {
//     [`item${++i}`]: i*2,
//     [`item${++i}`]: i*2,
//     [`item${++i}`]: i*2,
//     // [--i]:"test",
//     [i]:"test",
//     i:"test",
// }
// console.log(obj); // Виведе { item1: 2 } - об'єкт obj має властивість item1 зі значенням 2
// // console.log(obj.3); // Виведе undefined - об'єкт obj не має властивості 3
// console.log(obj["3"]); // test


// const items = ["A", "B", "C"];
// const obj = {
//   [items]: "Hello",
// //   "A,B,C": "Hello",
// [["A", "B", "C"]]: "Hello",
// };
// console.log(obj); // Виведе { 'A,B,C': 'Hello' } - об'єкт obj має властивість 'A,B,C' зі значенням 'Hello'

// console.log(obj[items]); // Виведе "Hello" - значення властивості items об'єкта obj
// console.log(obj.items); // Виведе undefined - об'єкт obj не має властивості items
// console.log(obj['items']); // Виведе undefined - об'єкт obj не має властивості items
// console.log(obj.ABC); // undefined - об'єкт obj не має властивості ABC
// console.log(obj["ABC"]); // undefined - об'єкт obj не має властивості ABC
// console.log(obj["A","B","C"]); // Виведе undefined - об'єкт obj не має властивості items

// console.log(obj["A,B,C"]); // Виведе undefined - об'єкт obj не має властивості items

// console.log(String(["A", "B", "C"])); // Виведе [String: 'A,B,C'] - об'єкт obj не має властивості items
// console.log(String([2323, "B", "C"])); // Виведе [String: 'A,B,C'] - об'єкт obj не має властивості items

// Symbol(опис)
// const symbol1 = Symbol('description');
// const symbol2 = Symbol('description');
// console.log(symbol1 === symbol2); 

// const mySymbol = Symbol('name');
// const person = { [mySymbol]: 'John' };
// console.log(person);
// console.log(Object.keys(person)); // Виведе [] - об'єкт person не має звичайних ключів
// console.log(Object.values(person)); // Виведе [] - об'єкт person не має звичайних ключів
// console.log(Object.entries(person)); // Виведе [] - об'єкт person не має звичайних ключів


// const mySymbol = Symbol('name');
// const person = { [mySymbol]: 'John' };
// console.log(person[mySymbol]); // Виведе 'John' - значення властивості mySymbol об'єкта person

// const mySymbol = Symbol('name');
// const person = {
//   [mySymbol]: 'John',
//   age: 30
// };
// console.log(Object.keys(person)); // Виведе [] - об'єкт person не має звичайних ключів
// console.log(Object.values(person)); // Виведе [] - об'єкт person не має звичайних ключів
// console.log(Object.entries(person)); // Виведе [] - об'єкт person не має звичайних ключів

// const mySymbol = Symbol('name');
// const person = {
//   [mySymbol]: 'John',
//   age: 30
// };
// const keys = Reflect.ownKeys(person); // Отримуємо всі ключі об'єкта person
// console.log(keys); // Виведе [Symbol(name), 'age'] - масив ключів об'єкта person

// const mySymbol = Symbol('name');
// const anotherSymbol = Symbol('age');
// const person = {
//   [mySymbol]: 'John',
//   [anotherSymbol]: 30,
//   city: 'New York',
// };
// const symbolsArray = Object.getOwnPropertySymbols(person); // Отримуємо всі символи об'єкта person
// console.log(symbolsArray); // Виведе [Symbol(name), Symbol(age)] - масив символів об'єкта person

// const obj = { key: "value" };
// console.log(obj.hasOwnProperty("key")); // true
// console.log("key" in obj); // true
// let testIn = "key1" in obj; // false
// console.log(testIn); // false
// // console.log("key1" in obj); // false


// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// // const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);
// obj1.a = 100; // Змінюємо властивість a об'єкта obj1
// console.log(obj1); // Виведе { a: 100, b: 2 } - об'єкт obj1 змінився
// console.log(obj3); // Виведе { a: 1, b: 3, c: 4 } - об'єкт obj3 не змінився

// const obj1 = { a: 1, b: 2 };
// const obj2 = Object.assign({}, obj1);
// console.log(obj2); // Виведе { a: 1, b: 2 } - об'єкт obj2 є копією obj1
// obj2.a = 10; // Змінюємо властивість a об'єкта obj2
// console.log(obj2); // Виведе { a: 10, b: 2 } - об'єкт obj2 змінився
// console.log(obj1); // Виведе { a: 1, b: 2 } - об'єкт obj1 не змінився
// console.log(obj1); // Виведе { a: 1, b: 3 } - об'єкт obj1 змінився
