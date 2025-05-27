//1.Цикл While

// let k = 33;
// while (k>=23) {
//     console.log(k);
//     k--;
// };

//a)
// let i = 23;
// while (i<=33) {
//     if (i % 3 === 0)
//         {console.log(i)};
//     i++;
// };

//b)
let k = 33;
while (k >= 23) {
  if (k % 3 === 0) {
    console.log(k);
  }
  k--;
}
console.log(`Кількість ітерацій дорівнює ` + k);
console.log(`----------------------`);

//2.Цикл. LOOP Do/While

// let num = Math.floor(Math.random()*10 +1);
//     console.log(num);

let iteration_num = 0;
do {
  let num = Math.floor(Math.random() * 10 + 1);
  console.log(num);
  iteration_num++;
  if (num === 8) {
    break;
  }
} while (true);
console.log(`Кількість ітерацій дорівнює ` + iteration_num);
// console.log(`Number of iterations is ${iteration_num}`);
console.log(`---------------------`);

//3.Цикл For

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
//a.
// for (i = 2; i<=10; i++) {
//     console.log(`ітерація номер ${i-1}`);
//     let res = 2**i;
//     console.log(`2 в степені ${i} дорівнює ${res}`);
// }
//b.

for (i = 2; i <= 10; i++) {
  console.log(`ітерація номер ${i - 1}`);
  let res = Math.pow(2, i);
  console.log(`2 в ступені  ${i} дорівнює ${res}`);
}
//c.FOR. LOOP.
// for (i=2; i<=10; i++) {
//     console.log(`Iteration number ${i-1}`);
//     let res = Math.pow(2, i);
//     console.log(`2 raised to the power of ${i} equals ${res}`);//raise a number to a power
// }
// console.log(`Action after completing the loop`);
console.log(`-----------`);

for (let i = 2; i <= 10; i++) {
  console.log(`Піднесення до степеня ${i}`);
  for (let j = 2; j <= 10; j++) {
    let res = 2 ** i;
    console.log(`2 в степені ${i} дорівнює ${res}`);
    // console.log(`ex - ${i}**${j} = ${(i**j)}`);
  }
}
