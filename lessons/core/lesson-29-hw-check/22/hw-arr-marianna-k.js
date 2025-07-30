const arr = [22,33,11,55,44,66];

// task 1 - Написати код результати роботи якого такі як у метода push.

let numPush = 101;
arr[arr.length] = numPush
console.log(arr);

// task - 2 Написати код результати роботи якого такі як у метода pop.
arr.length = arr.length-1
console.log(arr);


// task 3 Написати код результати роботи якого такі як у метода shift.


for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i + 1]
}

arr.length = arr.length-1
console.log(arr);


// task 4 Написати код результати роботи якого такі як у метода unshift.

let num = 101;
for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i]; 
}
arr[0]= num;
console.log(arr);

// task 5  Написати код результати роботи якого такі як у метода map (дія з елементами масиву: ділення на 11 та додавання до них від'ємного випадкового числа в діапазоні від 2 до 4).

const numD = 11
const numOne = 2;
const numTwo = 4;
let newArr1 = new Array(arr.length);

for(let i = 0; i<arr.length; i++) {
    let randomNumber = Math.floor(Math.random() * (numTwo - numOne + 1) + numOne);
    newArr1[i] = arr[i] / numD + (-randomNumber)
}
console.log(newArr1);


// task 6 - результати роботи якого такі як у метода filter (вибірка НЕпарних чисел які менші 33).
const arr = [22,33,11,55,44,66];

let newArr = new Array();

for(let i = 0; i<= arr.length; i++) {
    if(arr[i] < 33 && arr[i] % 2 === 0){
        newArr[i] = arr[i];
    }
}

console.log(newArr);


// task 7 - результати роботи якого такі як у метода reduce (початкове значення accumulator від'ємне (-231), необхідно отримати суму значень елементів масиву).

let firstNum = -231;
for(let i = 0; i < arr.length; i++) {
    firstNum += arr[i];
}

console.log(firstNum);
