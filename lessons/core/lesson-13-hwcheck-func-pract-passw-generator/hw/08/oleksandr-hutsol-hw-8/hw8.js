// Оператор If-Else
const numberToCheck = Math.floor(Math.random() * 100) + 1;

if (numberToCheck % 2 === 0) {
    console.log(`The number "${numberToCheck}" is even`);
} else {
    console.log(`The number "${numberToCheck}" is odd`);
}

// Оператор Switch
const dayNumber = Math.floor(Math.random() * 14);

switch (dayNumber) {
    case 0:
        console.log(dayNumber + ' - Monday');
        break;
    case 1:
        console.log(dayNumber + ' - Tuesday');
        break;
    case 2:
        console.log(dayNumber + ' - Wednesday');
        break;
    case 3:
        console.log(dayNumber + ' - Thursday');
        break;
    case 4:
        console.log(dayNumber + ' - Friday');
        break;
    case 5:
        console.log(dayNumber + ' - Saturday');
        break;
    case 6:
        console.log(dayNumber + ' - Sunday');
        break;

    default: console.log(dayNumber + ' - Wrong number! Try again');
        break;
}

// Тернарний оператор(*)
const numberOne = Math.floor(Math.random() * 100);
const numberTwo = Math.floor(Math.random() * 100);

console.log(
    numberOne > numberTwo ? `The first number "${numberOne}" is bigger than the second number "${numberTwo}"`
        : numberOne < numberTwo
            ? `The second number "${numberTwo}" is bigger than the first number "${numberOne}"`
            : `The numbers "${numberOne}" and "${numberTwo}" are equal`
);
