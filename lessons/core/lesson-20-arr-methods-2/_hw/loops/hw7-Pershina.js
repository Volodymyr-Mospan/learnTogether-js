// 

console.log(`\n\tЦикл While`);

let i = 33;
while (i > 23) {
  console.log(`${i} ділиться на три`);
  i -= 3;
}

// 2

console.log(`\n\tЦикл Do/While`);

let randomNumber
let iter = 0;
do {
  randomNumber = Math.floor((Math.random() * 10))
  iter ++
  console.log(iter);
  console.log(randomNumber);
} while (randomNumber !== 8);
console.log(`Відбулося ${iter} ітерацій`);

// 3

console.log(`\n\tЦикл For`);

for (let index = 0; index <= 10; index++) {
  console.log(`2 в степені ${index} дорівнює ${2**index}`);
}

