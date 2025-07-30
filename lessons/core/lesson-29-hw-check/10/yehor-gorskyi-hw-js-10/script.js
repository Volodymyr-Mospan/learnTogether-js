console.log("Цикл While");
let num1 = 33;

while (num1 >= 23) {
  if (num1 % 3 === 0) {
    console.log(num1);
  }
  num1--;
}
console.log("\n");
console.log("Цикл Do/While");
let count = 0;
let num;

do {
  num = Math.floor(Math.random() * 10) + 1;
  console.log(num);
  count++;
} while (num !== 8);

console.log(`Кількість ітерацій: ${count}`);
console.log("\n");
console.log("Цикл For");
for (let n = 2; n <= 10; n++) {
  let result = Math.pow(2, n);
  console.log(`2 в степені ${n} дорівнює ${result}`);
}
