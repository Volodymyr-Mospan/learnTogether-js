// Для кожного завдання використовуйте масив чисел [22,33,11,55,44,66]
// НЕ ВИКОРИСТОВУЙТЕ ФУНКЦІЇ
// НЕ ВИКОРИСТОВУЙТЕ ЖОДЕН З МЕТОДІВ МАСИВІВ

// const numArray = [22, 33, 11, 55, 44, 66];

// ---
// Написати код результати роботи якого такі як у метода push.
// ---
// Написати код результати роботи якого такі як у метода pop.
// ---
// Написати код результати роботи якого такі як у метода shift.
// ---
// Написати код результати роботи якого такі як у метода unshift.
// ---
// Написати код результати роботи якого такі як у метода map (дія з елементами масиву: ділення на 11 та додавання до них від'ємного випадкового числа в діапазоні від 2 до 4).
// ---
// Написати код

// результати роботи якого такі як у метода filter (вибірка НЕпарних чисел які менші 33).
// ---
// Написати код

// результати роботи якого такі як у метода reduce (початкове значення accumulator від'ємне (-231), необхідно отримати суму значень елементів масиву).

//-------------------------------------------

// PUSH

const numArrayPush = [22, 33, 11, 55, 44, 66];
const newPushEl = 77;
numArrayPush[numArrayPush.length] = newPushEl;

console.log("Результат роботи метода push на масиві :", numArrayPush);
console.log("Результат повернення метода push :", numArrayPush.length);

//-------------------------------------------

// POP

const numArrayPop = [22, 33, 11, 55, 44, 66];
const delPopEl = numArrayPop[numArrayPop.length - 1];
numArrayPop.length = numArrayPop.length - 1;

console.log("Результат роботи метода pop на масиві :", numArrayPop);
console.log("Результат повернення метода pop :", delPopEl);

//-------------------------------------------

// SHIFT

const numArrayShift = [22, 33, 11, 55, 44, 66];
const deShiftlEl = numArrayPop[0];
for (let i = 1; i < numArrayShift.length; i += 1) {
  numArrayShift[i - 1] = numArrayShift[i];
}
numArrayShift.length = numArrayShift.length - 1;

console.log("Результат роботи метода shift на масиві :", numArrayShift);
console.log("Результат повернення метода shift :", deShiftlEl);

//-------------------------------------------

// UNSHIFT

const numArrayUnshift = [22, 33, 11, 55, 44, 66];
const numArLastIn = numArrayUnshift.length - 1;
const newUnshiftEl = 99;
for (let i = numArLastIn; i > 0; i -= 1) {
  numArrayUnshift[i + 1] = numArrayUnshift[i];
}
numArrayUnshift[0] = newUnshiftEl;

console.log("Результат роботи метода unshift на масиві :", numArrayUnshift);
console.log("Результат повернення метода unshift :", numArrayUnshift.length);

//-------------------------------------------

// MAP

const maxNum = 4;
const minNum = 2;

const numArrayMap = [22, 33, 11, 55, 44, 66];
const newArrayMap = [];
for (let i = 0; i < numArrayMap.length; i++) {
  newArrayMap[i] =
    numArrayMap[i] / 11 -
    Math.round(Math.random() * (maxNum - minNum) + minNum);
}

console.log("Результат роботи метода map на масиві :", numArrayMap);
console.log("Результат повернення метода map :", newArrayMap);

//-------------------------------------------

// FILTER

const maxRange = 33;

const numArrayFilter = [22, 33, 11, 55, 44, 66];
const newArrayFilter = [];
for (let i = 0, c = 0; i < numArrayFilter.length; i++) {
  if (numArrayFilter[i] < maxRange && numArrayFilter[i] % 2 !== 0) {
    newArrayFilter[c] = numArrayFilter[i];
    c += 1;
  }
}

console.log("Результат роботи метода filter на масиві :", numArrayFilter);
console.log("Результат повернення метода filter :", newArrayFilter);

//-------------------------------------------

// REDUCE

const numArrayReduce = [22, 33, 11, 55, 44, 66];

// console.log(numArrayReduce.reduce((acc, el) => acc + el, -231));

let acc = -231;

for (let i = 0; i < numArrayReduce.length; i++) {
  if (acc === null || acc === undefined) {
    acc = numArrayReduce[i];
    console.log(acc);
    continue;
  }
  acc += numArrayReduce[i];
  console.log(acc);
}

console.log("Результат роботи метода reduce на масиві :", numArrayReduce);
console.log("Результат повернення метода reduce :", acc);
