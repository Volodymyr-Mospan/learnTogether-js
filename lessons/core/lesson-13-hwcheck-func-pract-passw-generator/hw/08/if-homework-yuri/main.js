"use strict";

// first task

const num = 5;
if (num % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// second task

const day = 5;

switch (day) {
    case 0: {
        console.log("Monday");
        break;
    }
    case 1: {
        console.log("Tuesday");
        break;
    }
    case 2: {
        console.log("Wednesday");
        break;
    }
    case 3: {
        console.log("Thursday");
        break;
    }
    case 4: {
        console.log("Friday");
        break;
    }
    case 5: {
        console.log("Saturday");
        break;
    }
    case 6: {
        console.log("Sunday");
        break;
    }
}

// third task

const a = 6,
    b = 5;
a > b
    ? console.log("Перше число більше")
    : a === b
    ? console.log("Числа рівні")
    : console.log("Друге число більше");
