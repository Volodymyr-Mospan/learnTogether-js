// const obj = {
//     0:"test"
// }
// console.log(obj[0]); // test
// console.log(obj.0); // Uncaught SyntaxError: missing ) after argument list

// const arr = ["test"]
// console.log("Елемент масива",arr[0]);

// const emptyArray = []
// console.log(emptyArray);

// const mixedTypeArray = [42, "JavaScript", true, { name: "Olya" }];
// console.log(mixedTypeArray);

// const testArray = [345, 'test', 34, true,]

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix[0]);
// console.log(matrix[0][2]);


// const emptyArray = []
// console.log(emptyArray);

// let emptyArray1 = new Array(); // []
// console.log(emptyArray1);
// console.log(emptyArray1[0]); // undefined
// let emptyArray2 = new Array(5); // [пусто*5] 
// console.log(emptyArray2);
// console.log(emptyArray2[0]); // undefined

// let arrayWithValues1 = new Array("JavaScript");
// let arrayWithValues2 = new Array(42, "JavaScript", true, { name: "Olya" });
// let arrayWithValues2 = new Array(42, 2323);
// let arrayWithValues2 = new Array(function(){return 44}, function(){return 44-33});
// console.log(arrayWithValues1);
// console.log(arrayWithValues1[10]);
// console.log(arrayWithValues2); 
// console.log(arrayWithValues2[4]); 
// console.log(arrayWithValues2[444]); 
// console.log(arrayWithValues2[0]());
// console.log(arrayWithValues2[1]());



// const numArray = []
// numArray[0] = 2323
// console.log(numArray);

// const numArray1 = [4334]
// console.log(numArray1);

// Змінні та вирази
// let a = 10;
// let b = 20;
// let sum = a + b;
// let literalArray1 = [a, b, sum, a * b];
// console.log(literalArray1);

// let literalArray2 = new Array(a, b, sum, a * b) 
// console.log(literalArray2);
// let literalArray2 = new Array(function(){return 44}, function(){return 44-33}) 
// console.log(literalArray2);
// console.log(literalArray2[0]());
// console.log(literalArray2[1]());

// let array1 = [111, 2, 3, 44, 5];
// console.log(array1); 
// console.log(array1.length); // Виведе 5

// // array1.length = 3
// // console.log(array1); 
// array1.length = 10
// console.log(array1); 
// array1[20] =56565
// console.log(array1); 
// console.log(array1.length); 
// array1[10] = 5656
// console.log(array1); 
// array1[7] = 56
// console.log(array1); 

// /**
//  * Масив з завданнями до виконання
//  * @type {string[]}
//  */
// const tasks = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6',]

// delete tasks[5] // не скорочує довжину
// console.log(tasks);


// /**
//  * Обробка одного завдання
//  * @param {string} task - завдання для обробки
//  * @returns {void}
//  */
// function processTask(task) {
//     console.log(`Оброблено: ${task}`);
//     // debugger
// }

// /**
//  * Кількість завдань для обробки
//  * @type {number}
//  */
// let tasksToProcess = 4

// for (let i = tasks.length - 1; i >= tasks.length - tasksToProcess; i--) {
//     // debugger
//     processTask(tasks[i])
// }
// // tasks.length -= tasksToProcess
// tasks.length = tasks.length - tasksToProcess
// console.log(tasks);

// let fruits = ['apple', 'banana', 'cherry'];
// let firstFruit = fruits[0];
// console.log(firstFruit); // 'apple'

// const fruits = ['apple', 'banana', 'cherry'];
// fruits[1] = 'orange';
// console.log(fruits); // ['apple', 'orange', 'cherry']

// sparse array
// let sparseArrayLiteral = [1, , , 4, 5];
// console.log(sparseArrayLiteral);
// console.log(sparseArrayLiteral.length); // 5

// let sparseArrayConstructor = new Array(5);
// sparseArrayConstructor[10] = 'value';
// console.log(sparseArrayConstructor);
// console.log(sparseArrayConstructor.length); // 11

// let anotherSparseArray = [];
// anotherSparseArray[3] = 'hello';
// console.log(anotherSparseArray);
// console.log(anotherSparseArray.length); // 4

// let commaSparseArray0 = [, , , , ,];
// let commaSparseArray1 = [, ,];


// const baseObj = {
//     "Ганна":25,
//     "Олександр": 30,
//     "Марія": 35,
//     "Віктор": 40,
//     "Ірина": 45
// }

// let people = Object.entries(baseObj)
// console.log(people);

// let people = [
//     ["Ганна", 25],
//     ["Олександр", 30],
//     ["Марія", 35],
//     ["Віктор", 40],
//     ["Ірина", 45]
// ];
// // console.log(people);
// for (let i = 0; i < people.length; i++) {
//     // console.log(people[i]);
//     let person = people[i]
//     for (let j = 0; j < person.length; j++) {
//         console.log(person[j]);
//     }
//     console.log('--');

// }

// let array1 = [12, 25, 36];
// let array2 = [42, 53, 64, 566];

// let combinedData = []
// combinedData = [...array2, ...array1, 999]
// console.log(combinedData);

// let originalArray = [111, 2222, 3333];
// let copiedArray = [...originalArray];
// console.log(copiedArray); // 

// let str = "Hel  lo";
// let charsArray = [...str];
// console.log(charsArray); // ['H', 'e', 'l', 'l', 'o']

// console.log(Array());
// let arr1 = Array.of()
// console.log(arr1);
// let arr = Array.of(10) // [10]
// console.log(arr);
// let arr2 = Array.of(10, true, 'ererer')
// console.log(arr2);

// let str = "Test"
// let arr3 = Array.from(str)
// console.log(arr3);

// let arrayLike = {x:100, y:300, z:200}
// let arr4 = Array.from(arrayLike)
// console.log(arr4);
// let arrayLike = {0:100, 1:300, 2:200, length:5}
// let arr4 = Array.from(arrayLike)
// console.log(arr4);

// // let result = [...arrayLike]
// // console.log(result);
// let result = {...arrayLike}
// console.log(result);

// let arrayLike = { 0: 100, 1: 300, 2: 200, length: 10 }
// // let arr4 = Array.from(arrayLike, (item)=>console.log(item));
// let arr4 = Array.from(arrayLike, (item) => {
//     console.log(item)
//     // return item 
//     return item + 1
// });

// console.log(arr4);

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
console.log(list);

