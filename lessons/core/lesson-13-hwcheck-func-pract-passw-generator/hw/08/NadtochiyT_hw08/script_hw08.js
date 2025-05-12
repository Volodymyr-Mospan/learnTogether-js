
// 1. if-else
let example = 33;
if (example % 2 === 0) {
    console.log('Число парне')
} else {
    console.log(`число непарне`);
};
// % - залишок від ділення

//2. Switch
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
let day = 3
switch (day) {
    case 6:
        console.log(`sunday is day - ${day} `);
        break;

    case 0:
        console.log(`monday is day - ${day} `);
        break;

    case 1:
        console.log(`tuesday is day - ${day} `);
        break;

    case 2:
        console.log(`wednesday is day - ${day} `);
        break;

    case 3:
        console.log(`thursday is day - ${day} `);
        break;

    case 4:
        console.log(`friday is day - ${day} `);
        break;

    case 5:
        console.log(`saturday is day - ${day} `);
        break;
    default:
        console.log(`Wrong number`);
        break;
};

//3. Тернарний оператор(*)
const num1 = 78;
const num2 = 34;
const result = num1 <= num2 ? `yes` :
    `no`;
console.log(result);

let ex1 = -10
let ex2 = 10
let res = ex1 > ex2
    ? `the first number is greater`
    : ex2 > ex1
        ? `the second number is greater`
        : `numbes are equal`;
console.log(res);


