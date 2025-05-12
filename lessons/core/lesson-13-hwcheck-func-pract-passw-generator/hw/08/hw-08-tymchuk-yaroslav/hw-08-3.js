let myNumber1 = 4;
let myNumber2 = -4;

let result =
    myNumber1 === myNumber2
        ? `Числа "${myNumber1}" і "${myNumber2}" рівні`
        : (myNumber1 > myNumber2
        ? `Число "${myNumber1}" більше за число "${myNumber2}"`
        : `Число "${myNumber2}" більше за число "${myNumber1}"`);

console.log(result);
